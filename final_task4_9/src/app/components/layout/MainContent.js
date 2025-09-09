"use client";

import Nav from "@/app/components/nav/Nav";

export default function MainContent({
  isSidebarOpen,
  sidebarToggle,
  modalToggle,
}) {
  return (
    <div className="flex-1 flex flex-col items-center h-screen">
      <Nav
        isSidebarOpen={isSidebarOpen}
        sidebarToggle={sidebarToggle}
        modalToggle={modalToggle}
      />
    </div>
  );
}
