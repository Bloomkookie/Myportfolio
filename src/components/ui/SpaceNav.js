"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
    { id: "hero", label: "Home", icon: "🚀", page: 0 },
    { id: "about", label: "About", icon: "👩‍🚀", page: 1 },
    { id: "projects", label: "Projects", icon: "🛸", page: 2 },
    { id: "skills", label: "Skills", icon: "⚡", page: 3 },
    { id: "experience", label: "Journey", icon: "🌌", page: 4 },
    { id: "contact", label: "Contact", icon: "📡", page: 5 },
];

export default function SpaceNav() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Find the scroll container created by ScrollControls
            const scrollEl = document.querySelector("[data-lenis]") ||
                document.querySelector("div[style*='overflow']") ||
                document.querySelector(".scroll-container");

            if (!scrollEl) return;

            const scrollHeight = scrollEl.scrollHeight - scrollEl.clientHeight;
            const scrollPos = scrollEl.scrollTop;
            const progress = scrollPos / scrollHeight;
            const section = Math.round(progress * 5);
            setActive(Math.min(section, 5));
        };

        // Listen on the document and any scroll containers
        const interval = setInterval(handleScroll, 200);
        return () => clearInterval(interval);
    }, []);

    const scrollToSection = (pageIndex) => {
        // Find the scroll container
        const containers = document.querySelectorAll("div");
        for (const el of containers) {
            if (el.scrollHeight > el.clientHeight * 2 && el.style.overflow !== "hidden") {
                const scrollHeight = el.scrollHeight - el.clientHeight;
                const target = (pageIndex / 6) * scrollHeight;
                el.scrollTo({ top: target, behavior: "smooth" });
                break;
            }
        }
    };

    return (
        <nav className="space-nav">
            <div className="space-nav-inner">
                {NAV_ITEMS.map((item, i) => (
                    <button
                        key={item.id}
                        className={`space-nav-btn ${i === active ? "active" : ""}`}
                        onClick={() => scrollToSection(item.page)}
                        title={item.label}
                    >
                        <span className="space-nav-icon">{item.icon}</span>
                        <span className="space-nav-label">{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
}
