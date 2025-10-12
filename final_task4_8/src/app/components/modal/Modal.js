"use client";
import { useAuth } from "@/app/contexts/Authprovider";

export default function Modal({ isModalOpen, modalToggle }) {
  const { user } = useAuth();
  return (
    <div>
      {user ? (
        <div
          className={`w-[30vw] h-[21vw] fixed rounded-2xl top-1/2 left-1/2 -translate-x-1/2 border-4 z-20 bg-white   
            ${
              isModalOpen
                ? "opacity-100 -translate-y-[50%] transition-all duration-300 ease-out"
                : "opacity-0 -translate-y-[40%]"
            }`}
        >
          <article className="m-8 space-y-2">
            <p>
              <b className="text-[20px]">마이페이지</b>
            </p>
            <br />
            <p>
              <b>프로필 정보</b>
            </p>
            <p>이름: 최민규</p>
            <p>이메일: fred3653@gmail.com</p>
            <p>학교: 경기과학고등학교</p>
            <p className="text-[14px] text-red-500">
              <a>로그아웃</a>
            </p>
          </article>
          <footer className="b-4 border-t w-[85%] mx-auto mt-[10px]">
            <div className="flex justify-between mt-5 w-[70%] mx-auto text-gray-600 text-[15px]">
              <a>이용약관</a>
              <p>|</p>
              <a>개인정보 처리방침</a>
              <p>|</p>
              <a>탈퇴하기</a>
            </div>
          </footer>
          <button className="fixed top-5 right-5" onClick={modalToggle}>
            <img
              src="/images/close-school.svg"
              className="filter brightness-[150%] hover:brightness-[100%]"
            />
          </button>
        </div>
      ) : (
        <div
          className={`w-[30vw] h-[21vw] fixed rounded-2xl top-1/2 left-1/2 -translate-x-1/2 border-4 z-20 bg-white   
            ${
              isModalOpen
                ? "opacity-100 -translate-y-[50%] transition-all duration-300 ease-out"
                : "opacity-0 -translate-y-[40%]"
            }`}
        >
          <div className="flex flex-col items-center pt-12 px-8">
            {/* Message */}
            <p className="text-xl font-bold mb-8 text-center">
              10초 만에 로그인하고 과제 도움을 받아보세요!
            </p>
            
            {/* Google Login Button */}
            <button 
              className="w-full max-w-md py-3 px-4 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
              onClick={() => {
                // 구글 로그인 로직 (사용자가 구현)
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.64 9.20443C17.64 8.56625 17.5827 7.95262 17.4764 7.36353H9V10.8449H13.8436C13.635 11.9699 13.0009 12.9231 12.0477 13.5613V15.8194H14.9564C16.6582 14.2526 17.64 11.9453 17.64 9.20443Z" fill="#4285F4"/>
                <path d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z" fill="#34A853"/>
                <path d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40665 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54756 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z" fill="#FBBC05"/>
                <path d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z" fill="#EA4335"/>
              </svg>
              <span className="text-base font-medium text-gray-700">
                구글 계정으로 시작하기
              </span>
            </button>
          </div>
          
          {/* Close Button */}
          <button className="absolute top-5 right-5" onClick={modalToggle}>
            <img
              src="/images/close-school.svg"
              className="filter brightness-[150%] hover:brightness-[100%]"
              alt="close"
            />
          </button>
        </div>
      )}
    </div>
    );
}
