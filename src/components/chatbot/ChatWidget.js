"use client";

import { useChat } from "@/hooks/useChat";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

export default function ChatWidget() {
    const { messages, isOpen, toggleChat, sendMessage } = useChat();

    return (
        <>
            {/* Chat panel */}
            {isOpen && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "90px",
                        right: "20px",
                        width: "360px",
                        maxHeight: "480px",
                        zIndex: 1000,
                        borderRadius: "16px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        background: "rgba(10, 8, 25, 0.95)",
                        border: "1px solid rgba(168, 85, 247, 0.2)",
                        backdropFilter: "blur(20px)",
                        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(168, 85, 247, 0.1)",
                        animation: "slide-up 0.3s ease-out",
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            padding: "1rem 1.25rem",
                            borderBottom: "1px solid rgba(168, 85, 247, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <div
                                style={{
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    background: "#a855f7",
                                    boxShadow: "0 0 8px #a855f7",
                                }}
                            />
                            <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>🤖 AI Assistant</span>
                        </div>
                        <button
                            onClick={toggleChat}
                            style={{
                                background: "none",
                                border: "none",
                                color: "rgba(229,231,235,0.5)",
                                cursor: "pointer",
                                fontSize: "1.1rem",
                            }}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Messages */}
                    <div
                        style={{
                            flex: 1,
                            overflowY: "auto",
                            padding: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.75rem",
                            maxHeight: "320px",
                        }}
                    >
                        {messages.map((msg, idx) => (
                            <MessageBubble key={idx} role={msg.role} content={msg.content} />
                        ))}
                    </div>

                    {/* Input */}
                    <ChatInput onSend={sendMessage} />
                </div>
            )}

            {/* Floating button */}
            <button
                onClick={toggleChat}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    zIndex: 1000,
                    background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                    color: "#fff",
                    fontSize: "1.4rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.15)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow = "0 4px 30px rgba(168,85,247,0.6), 0 0 60px rgba(168,85,247,0.2)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(168,85,247,0.4), 0 0 40px rgba(168,85,247,0.15)";
                }}
                aria-label="Toggle chat"
            >
                {isOpen ? "✕" : "🤖"}
            </button>
        </>
    );
}
