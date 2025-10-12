import "./globals.css";
import { AuthProvider } from "./contexts/Authprovider";
import { getServerSupabase } from '@/utils/supabase/server';


export const metadata = {
  title: "도서 추천 AI",
  description: "도서 추천 AI",
};

export default async function RootLayout({ children }) {
  const supabase = getServerSupabase();
  const { data: { session } } = await supabase.auth.getSession();
  return (
    <html>
        <body>
          <AuthProvider initialSession={session}>
            {children}
          </AuthProvider>
        </body>
    </html>
  );
}
