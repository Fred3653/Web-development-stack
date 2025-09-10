import { createClient } from "@supabase/supabase-js";

export async function getGoogleUserInfo(accessToken) {
  const response = await fetch(
    "https://www.googleapis.com/oauth2/v2/userinfo",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.json();
}
