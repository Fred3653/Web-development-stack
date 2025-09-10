"use client";

export default function Nav({ isSidebarOpen, sidebarToggle, modalToggle }) {
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
        <span>최민규 | </span>
        <button onClick={modalToggle} type="button">
          <span>마이페이지</span>
        </button>
      </div>
    </nav>
  );
}
