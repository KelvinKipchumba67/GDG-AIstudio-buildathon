import React, { useState, useRef, useEffect } from "react";
import { getAIAssistantResponse } from "../services/geminiService";
import { Icons } from "../constants";

const SmartAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([
    {
      role: "bot",
      text: "Jambo! I am KeBot. Need help finding a house in Kenya?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);

    const response = await getAIAssistantResponse(userMsg, messages);
    setMessages((prev) => [...prev, { role: "bot", text: response }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 sm:w-96 flex flex-col h-[500px] overflow-hidden">
          <div className="bg-violet-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center font-bold shadow-inner">
                KB
              </div>
              <div>
                <h4 className="font-bold text-sm leading-none">
                  KeBot Assistant
                </h4>
                <span className="text-[10px] opacity-80 uppercase tracking-widest font-bold">
                  Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-violet-500 p-1 rounded-lg"
            >
              <Icons.Close />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-violet-600 text-white rounded-tr-none"
                      : "bg-white text-slate-800 shadow-sm border border-slate-200 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl shadow-sm border border-slate-200 rounded-tl-none flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75" />
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              placeholder="Ask about Nairobi, rental laws..."
              className="flex-grow text-sm bg-slate-100 border-none rounded-xl px-4 py-2 focus:ring-2 focus:ring-violet-500 outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-violet-600 p-2 text-white rounded-xl hover:bg-violet-700 transition-colors disabled:opacity-50"
              disabled={isTyping}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-violet-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:rotate-12 transition-transform"
          >
            <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SmartAssistant;
