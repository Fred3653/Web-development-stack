// lib/supabase/server-mutate.ts (서버 액션/Route에서 사용)
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'

export function getServerSupabaseForMutations() {
  const cookieStore = cookies();

  return createServerClient(
    "https://witdqzthiglcanjwtycj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpdGRxenRoaWdsY2Fuand0eWNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MzE1OTYsImV4cCI6MjA3MzAwNzU5Nn0.swlHZdbmskgj3TVSunrM8wzrOlgnF1-nwj5x0pa1A60",
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value
        },
        set(name, value, options) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name, options) {
          // 보통 삭제는 maxAge=0로 처리
          cookieStore.set({ name, value: '', ...options, maxAge: 0 })
        },
      },
    }
  )
}
