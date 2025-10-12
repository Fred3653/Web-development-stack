// utils/supabase/middleware.js
import { createMiddlewareClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

// 이 함수는 Next.js 미들웨어에서 호출됩니다.
export async function updateSession(request) {
  // 1. 응답 객체 생성: 이 객체를 통해 갱신된 쿠키를 브라우저에 설정합니다.
  // 이 response 객체는 request의 헤더를 상속받습니다.
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // 2. 미들웨어용 Supabase 클라이언트 생성
  // createMiddlewareClient는 req와 res 객체를 받아 쿠키를 읽고 쓸 수 있도록 합니다.
  const supabase = createMiddlewareClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    req: request,
    res: response, // 이 response 객체에 새 쿠키가 설정됩니다.
  })

  // 3. IMPORTANT: auth.getUser()를 호출하여 세션 갱신 로직을 실행합니다.
  // 이 호출이 성공적으로 완료되면, 만료된 토큰이 갱신되고 새 토큰이 'response' 객체에 쿠키로 설정됩니다.
  const { data: { user } } = await supabase.auth.getUser()

  // 4. 인증되지 않은 사용자 리다이렉트 로직 (추가된 커스텀 로직)
  const isLoginPage = request.nextUrl.pathname.startsWith('/login')
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth')
  const isErrorPage = request.nextUrl.pathname.startsWith('/error')

  if (
    !user &&
    !isLoginPage &&
    !isAuthPage &&
    !isErrorPage
  ) {
    // 사용자가 없고, 공개 페이지가 아닌 경우 로그인 페이지로 리다이렉트
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // 5. 최종 응답 반환
  // 토큰 갱신이 발생했다면, 이 response 객체에는 새로운 쿠키가 포함되어 브라우저로 전송됩니다.
  return response
}