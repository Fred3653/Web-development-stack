'use server'

import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@/utils/supabase/server";

export async function makeAiMessage() {
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return { error: '사용자 인증 정보를 찾을 수 없습니다. 로그인 상태를 확인하세요.' };
  }
  const { data, error } = await supabase.from('messages').select('*').eq('user_id', user.id).order('created_at');
  
  const genAI = new GoogleGenerativeAI('AIzaSyCUJzGGDiLrOZxcYceJyKDmwIvreimpSTo');
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  
  // 각 메시지의 파일들을 비동기로 처리
  const contents = await Promise.all(
    data.map(async (message) => {
      const parts = [{ text: message.text }];
      
      // 파일이 있는 경우 처리
      if (message.attachments?.files && Array.isArray(message.attachments.files)) {
        const fileParts = await Promise.all(
          message.attachments.files.map((file) => fileToData(file))
        );
        parts.push(...fileParts);
      }
      
      return {
        role: message.role,
        parts: parts
      };
    })
  );
  
  const response = await model.generateContent({ contents });

  const { error: insertError } = await supabase.from('messages').insert({
    user_id: user.id,
    role: 'model',
    attachments: { files: [] },
    text: response.response.text(),
  });
  if (insertError) {
    console.error(insertError);
    return { error: 'AI 메시지 삽입에 실패했습니다.' };
  }

  return { success: true, message: 'AI 메시지가 성공적으로 삽입되었습니다.' };
}

async function fileToData(file) {
  const rawData = await fetch(file.url);
  const arrayBuffer = await rawData.arrayBuffer()
  const data = Buffer.from(arrayBuffer).toString('base64') // (Edge Runtime이면 다른 인코더 사용 필요)
  const mimeType = file.type || file.mimeType // uploadMessage.js에서 type으로 저장되므로 type 우선 사용

  return { inlineData: {data, mimeType}};
}