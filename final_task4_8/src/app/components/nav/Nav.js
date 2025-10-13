"use client";
import { useAuth } from "@/app/contexts/Authprovider";
export default function Nav({ isSidebarOpen, sidebarToggle, modalToggle }) {
  const { user } = useAuth();
  return (
    <nav
      className={`h-[60px] flex justify-between ${
        isSidebarOpen ? "w-[82vw]" : "w-full"
      }`}
    >
      <button
        onClick={sidebarToggle}
        className={`w-7 h-7 rounded-full border border-gray-800 inline-block m-[15px] flex items-center justify-center ${
          isSidebarOpen ? "invisible" : ""
        }`}
      >
        <div className="space-y-[3px]">
          <span className="block w-3 h-0.5 bg-black"></span>
          <span className="block w-3 h-0.5 bg-black"></span>
          <span className="block w-3 h-0.5 bg-black"></span>
        </div>
      </button>
      <div className="inline-block text-[15px] m-[15px]">
        {user ? (
          <>
            <span>{user.user_metadata.full_name} | </span>
            <button onClick={modalToggle} type="button">
              <span>마이페이지</span>
            </button>
          </>
        ) : (
          <button onClick={modalToggle} type="button">
            <span>로그인</span>
          </button>
        )}
      </div>
    </nav>
  );
}
