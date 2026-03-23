"use client";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socials = [
        { label: "GitHub", href: "https://github.com/Bloomkookie", icon: "⟨/⟩" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/nafisa-anjum-laskar-273b57297/", icon: "in" },
        { label: "Email", href: "mailto:nafisaanjumlaskar21@gmail.com", icon: "✉" },
    ];

    return (
        <footer
            style={{
                borderTop: "1px solid rgba(168, 85, 247, 0.08)",
                padding: "2rem 2rem",
                textAlign: "center",
                position: "relative",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80px",
                    height: "2px",
                    background: "linear-gradient(90deg, transparent, #a855f7, transparent)",
                }}
            />

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1.25rem",
                    marginBottom: "1rem",
                }}
            >
                {socials.map((s) => (
                    <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={s.label}
                        style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "rgba(168, 85, 247, 0.06)",
                            border: "1px solid rgba(168, 85, 247, 0.12)",
                            color: "rgba(229,231,235,0.45)",
                            textDecoration: "none",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "#a855f7";
                            e.currentTarget.style.color = "#c084fc";
                            e.currentTarget.style.boxShadow = "0 0 12px rgba(168,85,247,0.25)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "rgba(168,85,247,0.12)";
                            e.currentTarget.style.color = "rgba(229,231,235,0.45)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        {s.icon}
                    </a>
                ))}
            </div>

            <p style={{ fontSize: "0.75rem", color: "rgba(229,231,235,0.25)" }}>
                © {currentYear} Nafisa Anjum Laskar
            </p>
        </footer>
    );
}
