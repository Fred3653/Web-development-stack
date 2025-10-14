'use client';

import Nav from "@/app/components/nav/Nav";
import ChatArea from "@/app/components/chat/ChatArea";
import InputForm from "@/app/components/forms/InputForm";

export default function MainContent({
  isSidebarOpen,
  sidebarToggle,
  modalToggle,
  optimisticMessages,
  setOptimisticMessages,
  backendMessages,
}) {
  return (
    <div className="flex-1 flex flex-col items-center h-screen">
      <Nav
        isSidebarOpen={isSidebarOpen}
        sidebarToggle={sidebarToggle}
        modalToggle={modalToggle}
      />
      <ChatArea optimisticMessages={optimisticMessages} backendMessages={backendMessages} />
      <InputForm setOptimisticMessages={setOptimisticMessages} modalToggle={modalToggle} />
    </div>
  );
}
