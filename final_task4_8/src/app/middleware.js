import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request) {
  // 모든 요청에서 세션 갱신을 시도합니다.
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * _next/static, _next/image, favicon.ico, 그리고 정적 파일(.svg, .png 등)을 제외한 모든 경로
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}