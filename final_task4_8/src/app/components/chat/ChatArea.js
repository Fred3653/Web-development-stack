'use client';

export default function ChatArea({ optimisticMessages, backendMessages }) {
  const messages = [...backendMessages, ...optimisticMessages]
    
  return (
    <main className="w-[66vw] text-[15px] ml-[6vw] mt-[10px] overflow-auto flex-1 flex flex-col">
      <div>
        <p>
          도서 추천 전문 AI로 작업을 시작합니다!
          <br />제 안내에 따라
          <b> 최민규</b>님에게 도서를 추천해드립니다.
        </p>
        {messages.map((message, index) => (
          <div className="my-3 flex flex-col" key={index}>
            {message.urls.map((url, i) => (
              <div className="w-[100px] h-[100px] mb-[5px] self-end" key={i}>
                <img
                  src={url}
                  className="w-[100px] h-[100px] object-cover rounded-2xl border-black border-[1px]"
                ></img>
              </div>
            ))}
            {message.inputText && <div
              className="bg-black text-white rounded-full p-4 self-end"
              key={index}
            >
              {message.inputText}
            </div>}
          </div>
        ))}
      </div>
    </main>
  );
}
