"use client";

import { useState, useEffect } from "react";

export default function InputForm({ messages, setMessages }) {
  const [inputText, setInputText] = useState("");
  function handleText(e) {
    setInputText(e.target.value);
  }
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  function handleFiles(e) {
    setFiles(files.concat(Array.from(e.target.files)));
  }

  useEffect(() => {
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews(newPreviews);

    return () => {
      newPreviews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  const removeImg = (i) => {
    setFiles(
      files.filter((_, index) => {
        return index !== i;
      })
    );
  };

  const uploadMessages = (event) => {
    event.preventDefault();
    setMessages((prev) => prev.concat({ previews, inputText }));
    setFiles([]);
    setInputText("");
  };

  return (
    <footer className={`w-[70vw] flex flex-col`}>
      <FilePreviewLayout
        files={files}
        previews={previews}
        removeImg={removeImg}
      />
      <form
        className="border rounded-full border-gray-800 flex w-full h-[60px]"
        onSubmit={uploadMessages}
      >
        <input
          className="flex-1 m-[20px] focus:outline-none"
          type="text"
          id="question-content"
          placeholder="무엇이든 물어보세요."
          value={inputText}
          onChange={handleText}
        />
        <input
          className="hidden"
          type="file"
          name="file-upload"
          id="file-upload"
          onChange={handleFiles}
          multiple
        />
        <label
          className="ml-auto self-center p-[8px] hover:bg-gray-100 rounded-full"
          htmlFor="file-upload"
        >
          <img src="images/clip.svg" alt="파일 업로드" />
        </label>
        <button
          className={`self-center p-[7px] pr-[15px] ${
            inputText || files.length ? "opacity-100" : "opacity-50 disable"
          }`}
          type="submit"
          disabled={!inputText && files.length === 0}
        >
          <img
            className="h-[20px]"
            src="images/send_icon.png"
            alt="사이드바 입장"
          />
        </button>
      </form>
      <p className="w-[60vw] mx-auto mt-[12px] mb-[12px] text-[12px] text-center h-[12px] opacity-70">
        서비스 이용 중 개선되어야 하는 부분을
        <a className="underline" href="https://open.kakao.com/o/gLZzajMh">
          카톡 채널로 문의해주세요.
        </a>
      </p>
    </footer>
  );
}
function FilePreviewLayout({ files, previews, removeImg }) {
  if (files.length == 0) {
    return null;
  }
  return (
    <div
      className={`${
        files.length ? "h-[120px]" : "h-0"
      } flex flex-row justify-start`}
    >
      {previews.map((previewUrl, index) => (
        <div
          className="w-[80px] h-[80px] mt-[10px] mb-[30px] mr-[20px] relative"
          key={index}
        >
          <button
            onClick={() => removeImg(index)}
            className="absolute top-[-10px] right-[-10px] bg-black text-white w-[25px] h-[25px] rounded-full flex justify-center items-center"
          >
            X
          </button>
          <img
            src={previewUrl}
            className="w-[80px] h-[80px] object-cover rounded-2xl border-black border-[1px]"
          ></img>
        </div>
      ))}
    </div>
  );
}
