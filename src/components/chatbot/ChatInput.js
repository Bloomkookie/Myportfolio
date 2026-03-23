"use client";

import { useState } from "react";

export default function ChatInput({ onSend }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onSend(text);
        setText("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                gap: "0.5rem",
                padding: "0.75rem 1rem",
                borderTop: "1px solid rgba(168, 85, 247, 0.1)",
            }}
        >
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Ask me anything..."
                style={{
                    flex: 1,
                    padding: "0.6rem 0.75rem",
                    background: "rgba(168, 85, 247, 0.06)",
                    border: "1px solid rgba(168, 85, 247, 0.12)",
                    borderRadius: "8px",
                    color: "var(--color-foreground)",
                    fontSize: "0.85rem",
                    outline: "none",
                    transition: "border-color 0.3s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(168,85,247,0.4)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(168,85,247,0.12)")}
            />
            <button
                type="submit"
                style={{
                    padding: "0.6rem 1rem",
                    background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
                Send
            </button>
        </form>
    );
}
