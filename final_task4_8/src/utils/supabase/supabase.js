// lib/supabase/server.ts
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'

export function getServerSupabase() {
  return createServerClient(
    "https://witdqzthiglcanjwtycj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpdGRxenRoaWdsY2Fuand0eWNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MzE1OTYsImV4cCI6MjA3MzAwNzU5Nn0.swlHZdbmskgj3TVSunrM8wzrOlgnF1-nwj5x0pa1A60",
    { cookies } // ← 이 요청의 쿠키 바인딩 → RLS가 “그 사용자”로 평가됨
  )
}
