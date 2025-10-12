// lib/supabase/server.ts (RSC 전용)
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'

export function getServerSupabase() {
  const cookieStore = cookies();

  return createServerClient(
    "https://witdqzthiglcanjwtycj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpdGRxenRoaWdsY2Fuand0eWNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MzE1OTYsImV4cCI6MjA3MzAwNzU5Nn0.swlHZdbmskgj3TVSunrM8wzrOlgnF1-nwj5x0pa1A60",
    {
      cookies: {
        // RSC에서는 읽기만 허용
        get(name) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )
}
