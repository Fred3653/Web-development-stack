"use client";

export default function Sidebar({ isModalOpen, modalToggle }) {
  if (!isModalOpen) {
    return null;
  }
  return (
    <button
      className="fixed inset-0 bg-black/70 z-10"
      onClick={modalToggle}
    ></button>
  );
}
