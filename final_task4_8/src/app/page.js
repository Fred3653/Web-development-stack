import AppFrame from "@/app//components/layout/AppFrame.js";
import { createClient } from "@/utils/supabase/server";

export default async function HomePage() {
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return (
      <div>
        <AppFrame backendMessages={[]} />
      </div>
    );
  }
  const { data, error } = await supabase.from('messages').select('*').eq('user_id', user.id).order('created_at');
  const backendMessages = data.map((message) => ({
    inputText: message.text,
    urls: message.attachments.files.map((file) => file.url),
    role: message.role
  }));
  return (
    <div>
      <AppFrame backendMessages={backendMessages} />
    </div>
  );
}
