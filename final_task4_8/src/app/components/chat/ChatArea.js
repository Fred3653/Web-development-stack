'use client';

import { useEffect, useRef } from 'react'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatArea({ optimisticMessages, backendMessages }) {
  const messages = [...backendMessages, ...optimisticMessages]
  const bottomRef = useRef(null);
  
  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages]);

  return (
    <main className="w-[66vw] text-[15px] ml-[6vw] mt-[10px] overflow-y-auto overflow-x-hidden flex-1 flex flex-col">
      <div>
        <p>
          도서 추천 전문 AI로 작업을 시작합니다!
          <br />제 안내에 따라
          <b> 최민규</b>님에게 도서를 추천해드립니다.
        </p>
        {messages.map((message, index) => {
          const role = message.role || 'user';
          if (role === 'model') {
            return (
              <div className="my-3 flex flex-col" key={index}>
                {message.inputText && (
                  <div className="whitespace-pre-wrap leading-relaxed font-light break-words">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.inputText}</ReactMarkdown>
                  </div>
                )}
              </div>
            );
          }

          return (
            <div className="my-3 flex flex-col" key={index}>
              {(message.urls || []).map((url, i) => (
                <div className="w-[100px] h-[100px] mb-[5px] self-end" key={i}>
                  <img
                    src={url}
                    className="w-[100px] h-[100px] object-cover rounded-2xl border-black border-[1px]"
                  ></img>
                </div>
              ))}
              {message.inputText && (
                <div className="bg-black text-white rounded-full p-4 self-end break-words">
                  {message.inputText}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div ref={bottomRef} />
    </main>
  );
}
