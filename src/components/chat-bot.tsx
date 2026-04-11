"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "assistant";
  content: string;
};

// Local bot logic specialized for the portfolio
const getBotResponse = (input: string) => {
  const query = input.toLowerCase();

  if (query.includes("skill") || query.includes("tech") || query.includes("stack") || query.includes("use")) {
    return "Uzair's core stack includes Next.js, React, Node.js, TypeScript, and Tailwind CSS. He is also experienced with backend architecture and database management.";
  }
  if (query.includes("experience") || query.includes("work") || query.includes("journey") || query.includes("job")) {
    return "Uzair is a Full Stack Engineer who has built scalable, AI-driven, and high-performance web applications. You can check out the entire timeline in the 'Experience' section on this page!";
  }
  if (query.includes("project") || query.includes("portfolio") || query.includes("build")) {
    return "He has built lots of amazing things, from secure backends to polished frontends! Scroll up to the 'Featured Projects' section to see the latest case studies.";
  }
  if (query.includes("contact") || query.includes("hire") || query.includes("email") || query.includes("freelance")) {
    return "Uzair is always open to discussing new opportunities. The best way to reach him is by filling out the Contact form at the bottom of the site!";
  }
  if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
    return "Hello! 👋 I'm Uzair's virtual assistant. Try asking me about his 'skills', 'projects', or 'experience'!";
  }
  if (query.includes("who are you") || query.includes("your name")) {
    return "I'm a custom AI built specifically for Uzair's portfolio. I don't use external APIs—I just know everything about him!";
  }
  if (query.includes("education") || query.includes("degree") || query.includes("study") || query.includes("university")) {
    return "Uzair focuses on continuous learning, combining his formal education with hands-on application to deliver modern web solutions. Ask him directly via the contact form for his full CV!";
  }
  if (query.includes("resume") || query.includes("cv")) {
    return "You can usually find a link to download Uzair's resume in the Hero or About sections. Otherwise, feel free to use the contact form to request a copy directly!";
  }
  
  return "That's a great question! While I'm just a simple portfolio bot, Uzair would love to answer that. Feel free to reach out to him via the Contact section below!";
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Uzair's virtual assistant. Want to know more about his skills, experience, or latest projects?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    // Simulate bot thinking delay purely for UI/UX feel
    setTimeout(() => {
      const responseText = getBotResponse(currentInput);
      setMessages((prev) => [...prev, { role: "assistant", content: responseText }]);
      setIsLoading(false);
    }, 800 + Math.random() * 500); // 800ms - 1300ms delay
  };

  return (
    <>
      {/* Floating Chat Button with Pulsing Ring */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
        <AnimatePresence>
          {!isOpen && (
             <motion.div
               animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
               transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
               className="pointer-events-none absolute inset-0 rounded-full bg-blue-500/40 blur-md dark:bg-blue-400/40"
             />
          )}
        </AnimatePresence>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-teal-400 text-white shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all hover:scale-110 active:scale-95 dark:from-blue-500 dark:to-indigo-400"
          aria-label="Toggle Chat"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Chat Window Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0.35, duration: 0.6 }}
            className="fixed bottom-24 right-4 z-50 flex h-[500px] w-[calc(100vw-32px)] flex-col overflow-hidden rounded-3xl border border-slate-200/50 bg-white/60 p-[1px] shadow-2xl shadow-blue-900/10 backdrop-blur-xl sm:right-6 sm:w-[380px] dark:border-slate-700/50 dark:bg-slate-900/60 dark:shadow-blue-900/20"
          >
            <div className="flex h-full flex-col overflow-hidden rounded-[23px] bg-white/70 backdrop-blur-3xl dark:bg-slate-900/70">
              {/* Header */}
              <div className="relative flex items-center justify-between border-b border-slate-200/50 bg-white/40 p-4 backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-900/40">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-teal-400 text-white shadow-inner">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                      </span>
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Portfolio AI</h3>
                    <p className="text-xs font-medium text-blue-600 dark:text-blue-400">Online & ready</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100/50 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700/50">
                <div className="space-y-5">
                  <AnimatePresence initial={false}>
                    {messages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`relative max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm backdrop-blur-md ${
                            msg.role === "user"
                              ? "bg-gradient-to-tr from-blue-500 to-teal-400 text-white rounded-br-sm"
                              : "bg-white/90 border border-slate-100 text-slate-700 rounded-bl-sm dark:bg-slate-800/90 dark:border-slate-700/50 dark:text-slate-200"
                          }`}
                        >
                          {msg.content}
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Typing Indicator */}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                        className="flex justify-start"
                      >
                        <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-slate-100 bg-white/90 px-4 py-4 shadow-sm backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-800/90">
                          <motion.div className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400" animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} />
                          <motion.div className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400" animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.15 }} />
                          <motion.div className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400" animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 }} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div ref={messagesEndRef} className="h-1" />
                </div>
              </div>

              {/* Input Area */}
              <div className="border-t border-slate-200/50 p-4 pt-3 dark:border-slate-700/50">
                <form onSubmit={handleSubmit} className="relative flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about my skills..."
                    className="w-full rounded-2xl border border-slate-200/80 bg-slate-50/50 py-3.5 pl-4 pr-14 text-sm text-slate-900 shadow-inner outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700/80 dark:bg-slate-950/50 dark:text-white dark:focus:border-blue-500 dark:focus:bg-slate-900 dark:focus:ring-blue-500/10"
                    disabled={isLoading}
                  />
                  <div className="absolute right-1.5 flex h-full items-center">
                    <button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      className="group flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-teal-400 text-white shadow-md transition-all hover:scale-105 hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 dark:from-blue-500 dark:to-indigo-400"
                      aria-label="Send message"
                    >
                      <motion.svg 
                        className="h-4 w-4 shrink-0 -translate-y-[1px] translate-x-[1px]" 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        whileHover={{ scale: 1.1, x: 2, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19V5m0 0l-7 7m7-7l7 7" />
                      </motion.svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
