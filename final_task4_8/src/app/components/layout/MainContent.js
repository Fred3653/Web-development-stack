"use client";

import Nav from "@/app/components/nav/Nav";
import ChatArea from "@/app/components/chat/ChatArea";
import InputForm from "@/app/components/forms/InputForm";

export default function MainContent({
  isSidebarOpen,
  sidebarToggle,
  modalToggle,
  messages,
  setMessages,
}) {
  return (
    <div className="flex-1 flex flex-col items-center h-screen">
      <Nav
        isSidebarOpen={isSidebarOpen}
        sidebarToggle={sidebarToggle}
        modalToggle={modalToggle}
      />
      <ChatArea messages={messages} />
      <InputForm messages={messages} setMessages={setMessages} />
    </div>
  );
}
