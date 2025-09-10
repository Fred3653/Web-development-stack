"use client";

export default function Sidebar({ isSidebarOpen, sidebarToggle }) {
  return (
    <aside
      className={`bg-black h-screen transition-all duration-150 ease-in-out overflow-hidden ${
        isSidebarOpen ? "w-[18vw]" : "w-0"
      }`}
    >
      <main
        className={`flex-col relative h-full ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <header className="flex-[1] mb-[8vh] flex justify-between">
          <button onClick={sidebarToggle}>
            <img className="h-[30px] ml-[15px]" src="/images/dowazo_logo.png" />
          </button>
          <button
            className="w-7 h-7 rounded-full border border-white inline-block m-[15px] flex items-center justify-center"
            onClick={sidebarToggle}
          >
            <div className="space-y-[3px]">
              <span className="block w-3 h-0.5 bg-white"></span>
              <span className="block w-3 h-0.5 bg-white"></span>
              <span className="block w-3 h-0.5 bg-white"></span>
            </div>
          </button>
        </header>
        <section className="group">
          <p className="text-white group-hover:text-black group-hover:bg-white p-[10px]">
            <b>새로운 과제</b>
          </p>
        </section>
        <section className="group">
          <p className="text-white group-hover:text-black group-hover:bg-white p-[10px]">
            <b>커뮤니티</b>
          </p>
        </section>
        <section>
          <p className="text-white mt-[20px] p-[10px]">
            <b>기간</b>
          </p>
          <p className="text-white hover:text-black hover:bg-white p-[10px] pl-[20px]">
            대화 제목
          </p>
        </section>
        <footer className="h-[20vh] border-white border-t absolute bottom-0 left-0 w-full text-white">
          <p className="m-[10px] text-[12px]">
            <b>대표자</b>&nbsp;&nbsp;&nbsp;&nbsp;최민규
          </p>
        </footer>
      </main>
    </aside>
  );
}
