"use client";

import { useState, useEffect } from "react";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: "0 2rem",
                transition: "all 0.3s ease",
                background: scrolled ? "rgba(10, 10, 26, 0.9)" : "rgba(10, 10, 26, 0.4)",
                backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
                WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
                borderBottom: scrolled
                    ? "1px solid rgba(168, 85, 247, 0.15)"
                    : "1px solid transparent",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "70px",
                }}
            >
                {/* Logo */}
                <a
                    href="#hero"
                    onClick={(e) => handleClick(e, "#hero")}
                    style={{
                        fontSize: "1.3rem",
                        fontWeight: 800,
                        background: "linear-gradient(135deg, #c084fc, #a855f7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textDecoration: "none",
                        letterSpacing: "-0.5px",
                    }}
                >
                    {"<Nafisa />"}
                </a>

                {/* Desktop links */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2rem",
                    }}
                    className="nav-desktop"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            style={{
                                color: "rgba(229,231,235,0.6)",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                transition: "color 0.3s, text-shadow 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = "#c084fc";
                                e.target.style.textShadow = "0 0 10px rgba(168,85,247,0.5)";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = "rgba(229,231,235,0.6)";
                                e.target.style.textShadow = "none";
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="nav-mobile-btn"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{
                        display: "none",
                        background: "none",
                        border: "none",
                        color: "#c084fc",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                    }}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div
                    style={{
                        padding: "1rem 0 1.5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        borderTop: "1px solid rgba(168, 85, 247, 0.1)",
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            style={{
                                color: "rgba(229,231,235,0.7)",
                                textDecoration: "none",
                                fontSize: "1rem",
                                padding: "0.5rem 0",
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}

            <style jsx>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-btn {
            display: block !important;
          }
        }
      `}</style>
        </nav>
    );
}
