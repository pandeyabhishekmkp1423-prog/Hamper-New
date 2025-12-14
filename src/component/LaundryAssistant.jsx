import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { RiRobot2Line } from "react-icons/ri";

/* ================= AI LOGIC ================= */

const initialContext = {
  fabric: null,
  stain: null,
  quantity: null,
};

const detectAndUpdateContext = (context, text) => {
  const t = text.toLowerCase();
  const updated = { ...context };

  if (t.includes("cotton") || t.includes("shirt") || t.includes("t-shirt")) {
    updated.fabric = "cotton";
  }

  if (t.includes("silk") || t.includes("wool")) {
    updated.fabric = "delicate";
  }

  if (t.includes("stain") || t.includes("oil") || t.includes("grease")) {
    updated.stain = true;
  }

  if (t.includes("no stain")) {
    updated.stain = false;
  }

  const qtyMatch = t.match(/\d+/);
  if (qtyMatch) {
    updated.quantity = Number(qtyMatch[0]);
  }

  return updated;
};

const generateReply = (context) => {
  if (!context.fabric) {
    return "What type of fabric is it? (cotton, silk, wool, etc.)";
  }

  if (context.stain === null) {
    return "Do the clothes have any stains?";
  }

  if (!context.quantity) {
    return "How many items are there?";
  }

  if (context.fabric === "delicate" || context.stain) {
    return (
      "✅ Recommended Service: Dry Cleaning + Stain Treatment\n\n" +
      "Why this is best:\n" +
      "• Delicate or stained fabric needs gentle solvents\n" +
      "• Prevents shrinkage and color damage\n\n" +
      `📦 Quantity: ${context.quantity}\n` +
      `💰 Estimated Price: ₹${context.quantity * 180}\n` +
      "⏱ Delivery Time: 48 hours\n\n" +
      "Say “new order” to check another item."
    );
  }

  return (
    "✅ Recommended Service: Wash & Fold\n\n" +
    "Why this is best:\n" +
    "• Ideal for daily cotton garments\n" +
    "• Cost-effective and fast\n\n" +
    `📦 Quantity: ${context.quantity}\n` +
    `💰 Estimated Price: ₹${context.quantity * 60}\n` +
    "⏱ Delivery Time: 24 hours\n\n" +
    "Say “new order” to check another item."
  );
};

/* ================= COMPONENT ================= */

const LaundryAssistant = () => {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [context, setContext] = useState(initialContext);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I’m your Laundry AI Concierge.\nTell me about your clothes and I’ll recommend the best service.",
    },
  ]);
  const [input, setInput] = useState("");

  const chatRef = useRef(null);
  const location = useLocation();

  /* Close chat on route change */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* Auto scroll */
  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages, typing]);

  const handleUser = () => {
    if (!input.trim()) return;

    const text = input;
    setInput("");

    setMessages((m) => [...m, { from: "user", text }]);
    setTyping(true);

    setTimeout(() => {
      if (text.toLowerCase().includes("new order")) {
        setContext(initialContext);
        setMessages((m) => [
          ...m,
          { from: "bot", text: "Alright 👍 Tell me about the next item." },
        ]);
        setTyping(false);
        return;
      }

      const updatedContext = detectAndUpdateContext(context, text);
      const reply = generateReply(updatedContext);

      setContext(updatedContext);
      setMessages((m) => [...m, { from: "bot", text: reply }]);
      setTyping(false);
    }, 700);
  };

  return (
    <>
      {/* FLOATING AI BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full
                   bg-gradient-to-br from-blue-600 to-indigo-600
                   text-white shadow-xl flex items-center justify-center
                   hover:scale-110 transition z-50 animate-pulse"
        aria-label="Open Laundry AI"
      >
        <RiRobot2Line size={26} />
      </button>

      {/* CHAT BOX */}
      {open && (
        <div
          className="fixed bottom-24 right-6 w-96 max-w-[90vw]
                     bg-white dark:bg-gray-900
                     text-gray-800 dark:text-gray-100
                     rounded-2xl shadow-2xl flex flex-col z-50 border
                     dark:border-gray-700"
        >
          {/* HEADER */}
          <div className="p-4 border-b dark:border-gray-700 flex items-center gap-3">
            <RiRobot2Line size={20} className="text-blue-600" />
            <div>
              <p className="font-semibold">Laundry AI</p>
              <p className="text-xs text-green-600">Online • Smart Concierge</p>
            </div>
          </div>

          {/* MESSAGES */}
          <div
            ref={chatRef}
            className="flex-1 p-4 space-y-3 overflow-y-auto text-sm"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-2 ${
                  m.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.from === "bot" && (
                  <RiRobot2Line size={16} className="text-blue-600 mt-1" />
                )}
                <div
                  className={`px-4 py-2 rounded-2xl max-w-[75%] whitespace-pre-line ${
                    m.from === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 shadow"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex gap-2 items-center text-gray-500">
                <RiRobot2Line size={16} />
                <span className="italic">Typing…</span>
              </div>
            )}
          </div>

          {/* INPUT */}
          <div className="p-3 border-t dark:border-gray-700 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleUser()}
              placeholder="Describe your laundry need…"
              className="flex-1 px-4 py-2 rounded-full border
                         bg-white dark:bg-gray-800
                         dark:border-gray-600 focus:outline-none"
            />
            <button
              onClick={handleUser}
              className="bg-blue-600 text-white px-4 rounded-full hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LaundryAssistant;
