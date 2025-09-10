"use client";

import { useState } from "react";
import MainContent from "@/app/components/layout/MainContent";
import Sidebar from "@/app/components/sidebar/Sidebar";
import Overlay from "@/app/components/layout/Overlay";
import useToggle from "@/app/hooks/useToggle";
import Modal from "@/app/components/modal/Modal";

export default function AppFrame() {
  const [isSidebarOpen, sidebarToggle] = useToggle();
  const [isModalOpen, modalToggle] = useToggle();
  const [messages, setMessages] = useState([]);
  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} sidebarToggle={sidebarToggle} />
      <Modal isModalOpen={isModalOpen} modalToggle={modalToggle} />
      <Overlay isModalOpen={isModalOpen} modalToggle={modalToggle} />
      <MainContent
        isSidebarOpen={isSidebarOpen}
        sidebarToggle={sidebarToggle}
        modalToggle={modalToggle}
        messages={messages}
        setMessages={setMessages}
      />
    </div>
  );
}
