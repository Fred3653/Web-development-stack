import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function GET(request) {
  const url = request.nextUrl;
  const code = url.searchParams.get('code');
  const oauthError = url.searchParams.get('error');

  if (oauthError) {
    return NextResponse.redirect(url.origin);
  }
  if (!code) {
    return NextResponse.redirect(url.origin);
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    console.error('인증 코드 교환 실패 상세:', error);
  }

  return NextResponse.redirect(url.origin);
}