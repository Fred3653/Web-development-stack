import AppFrame from "@/app//components/layout/AppFrame.js";
import { createClient } from "@/utils/supabase/server";

export default async function HomePage() {
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    throw new Error('사용자 인증 정보를 찾을 수 없습니다. 로그인 상태를 확인하세요.');
  }
  const { data, error } = await supabase.from('messages').select('*').eq('user_id', user.id).order('created_at');
  if (error) {
    console.error(error);
    throw new Error('메시지 조회에 실패했습니다.');
  }
  const backendMessages = data.map((message) => ({
    inputText: message.text,
    urls: message.attachments.files.map((file) => file.url),
  }));
  return (
    <div>
      <AppFrame backendMessages={backendMessages} />
    </div>
  );
}
