"use client";

export default function MessageBubble({ role, content }) {
    const isBot = role === "bot";

    return (
        <div
            style={{
                alignSelf: isBot ? "flex-start" : "flex-end",
                maxWidth: "80%",
                padding: "0.75rem 1rem",
                borderRadius: isBot ? "12px 12px 12px 4px" : "12px 12px 4px 12px",
                background: isBot
                    ? "rgba(168, 85, 247, 0.08)"
                    : "linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(124, 58, 237, 0.15))",
                border: `1px solid ${isBot ? "rgba(168, 85, 247, 0.12)" : "rgba(168, 85, 247, 0.25)"
                    }`,
                fontSize: "0.85rem",
                lineHeight: 1.6,
                color: "var(--color-foreground)",
            }}
        >
            {content}
        </div>
    );
}
