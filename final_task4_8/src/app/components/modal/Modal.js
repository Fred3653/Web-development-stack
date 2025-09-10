"use client";

export default function Modal({ isModalOpen, modalToggle }) {
  return (
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
  );
}
