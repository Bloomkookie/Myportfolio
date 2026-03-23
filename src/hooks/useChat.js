"use client";

import { useState, useCallback } from "react";

export function useChat() {
    const [messages, setMessages] = useState([
        {
            role: "bot",
            content: "Hey! 👋 I'm an AI assistant. Ask me anything about this portfolio!",
        },
    ]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);

    const sendMessage = useCallback((text) => {
        if (!text.trim()) return;

        setMessages((prev) => [...prev, { role: "user", content: text }]);

        // Simulated bot response
        setTimeout(() => {
            const responses = [
                "Thanks for your message! This is a demo chatbot. Connect an API for real responses. 🚀",
                "Great question! Check out the Projects section for more details about my work. ✨",
                "Feel free to reach out via the Contact form below! I'd love to connect. 💬",
                "I'm powered by the magic of CSS animations and good vibes! 🌟",
            ];
            const reply = responses[Math.floor(Math.random() * responses.length)];
            setMessages((prev) => [...prev, { role: "bot", content: reply }]);
        }, 800);
    }, []);

    return { messages, isOpen, toggleChat, sendMessage };
}
