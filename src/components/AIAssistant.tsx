"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles } from "lucide-react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "¡Hola! Soy tu asistente experto en Bariloche. ¿En qué puedo ayudarte a planificar hoy?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Excelente elección. Bariloche ofrece experiencias increíbles en esta época. ¿Te gustaría que te arme un itinerario personalizado?" 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-24 right-0 w-[380px] md:w-[420px] h-[600px] bg-white rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gray-900 p-8 text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-black shadow-lg shadow-primary/20">
                  <Bot size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg font-serif">Vantage Concierge</h4>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-[10px] opacity-80 uppercase tracking-widest font-black">En línea ahora</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-gray-50/50">
              {messages.map((msg, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] p-5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-primary text-black font-bold rounded-tr-none shadow-lg shadow-primary/10" 
                      : "bg-white text-gray-800 shadow-sm rounded-tl-none border border-gray-100"
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-gray-100">
              <div className="flex gap-3 bg-gray-50 rounded-2xl p-2 items-center">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="¿Cómo puedo ayudarte?" 
                  className="flex-1 bg-transparent border-none px-4 py-2 text-sm focus:ring-0 outline-none transition-all"
                />
                <button 
                  onClick={handleSend}
                  className="bg-gray-900 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-primary hover:text-black transition-all shadow-lg"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-[9px] text-center text-gray-400 mt-4 uppercase tracking-widest font-bold">Respuesta instantánea por Vantage AI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 bg-primary text-black rounded-[2rem] shadow-2xl flex items-center justify-center hover:bg-yellow-300 transition-all group relative border-4 border-white"
      >
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
        <MessageSquare size={32} className="group-hover:rotate-12 transition-transform" />
      </motion.button>
    </div>
  );
}
