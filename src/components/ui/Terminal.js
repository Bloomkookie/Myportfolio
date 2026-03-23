"use client";

export default function Terminal({ title = "terminal", children }) {
    return (
        <div className="terminal">
            <div className="terminal-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span style={{ marginLeft: "8px", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
                    {title}
                </span>
            </div>
            <div className="terminal-body">
                {children}
            </div>
        </div>
    );
}
