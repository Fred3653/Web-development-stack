"use client";

export default function Overlay({ isModalOpen, modalToggle }) {
  if (!isModalOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/60 z-10" onClick={modalToggle} />
  );
}
