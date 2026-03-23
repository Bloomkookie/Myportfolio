"use client";

export default function ContactContent() {
    const socials = [
        {
            label: "LinkedIn",
            icon: "in",
            href: "https://www.linkedin.com/in/nafisa-anjum-laskar-273b57297/",
        },
        {
            label: "GitHub",
            icon: "⟨/⟩",
            href: "https://github.com/Bloomkookie",
        },
        {
            label: "Email",
            icon: "✉",
            href: "mailto:nafisaanjumlaskar21@gmail.com",
        },
    ];

    return (
        <div className="panel-3d">
            <h2 className="panel-title">Let&apos;s Connect</h2>
            <p className="panel-subtitle-text">
                Got a project, a question about ML, or just want to talk about space?
                I&apos;m always up for a good conversation.
            </p>

            <div className="panel-socials">
                {socials.map((s) => (
                    <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="panel-social-link"
                    >
                        <span className="panel-social-icon">{s.icon}</span>
                        <span className="panel-social-label">{s.label}</span>
                    </a>
                ))}
            </div>

            <div className="panel-card" style={{ marginTop: "1rem" }}>
                <p className="panel-text" style={{ textAlign: "center", fontSize: "0.85rem" }}>
                    📧 nafisaanjumlaskar21@gmail.com
                </p>
            </div>
        </div>
    );
}
