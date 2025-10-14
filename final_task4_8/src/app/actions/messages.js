'use server'
import { createClient } from '@/utils/supabase/server';
import { v4 as uuidv4 } from 'uuid';

export async function uploadMessage(formData) {
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return { error: '사용자 인증 정보를 찾을 수 없습니다. 로그인 상태를 확인하세요.' };
  }

  const inputText = formData.get('inputText');
  const files = formData.getAll('files');
  const attachments = { files: [] }; 
  for (const file of files) {
    const attachmentId = uuidv4();
    const filePath = `${user.id}/${Date.now()}_${attachmentId}`;
    const { error : uploadError } = await supabase.storage.from('message_files').upload(filePath, file);
    if (uploadError) {
      console.error(uploadError);
      return { success: false, message: '파일 업로드에 실패했습니다.' };
    }
    const { data: { publicUrl } } = supabase.storage.from('message_files').getPublicUrl(filePath);
    attachments.files.push({ url: publicUrl, type: file.type, id: attachmentId });
  }
  const messages = { user_id: user.id, role: 'user', text: inputText, attachments };
  const { error } = await supabase.from('messages').insert(messages);
  if (error) {
    console.error(error);
    return { success: false, message: '메시지와 파일 업로드에 실패했습니다.' };
  }
  return { success: true, message: '메시지와 파일이 성공적으로 업로드되었습니다.' };
}

