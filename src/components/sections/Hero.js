"use client";

import { useState, useEffect } from "react";

const roles = [
    "AI/ML Engineer",
    "Python Developer",
    "Deep Learning Enthusiast",
    "Space Nerd 🚀",
];

export default function HeroContent() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting && text === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(
                () => {
                    setText(
                        isDeleting
                            ? currentRole.substring(0, text.length - 1)
                            : currentRole.substring(0, text.length + 1)
                    );
                },
                isDeleting ? 40 : 80
            );
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <div className="panel-3d panel-hero">
            <p className="panel-greeting">hey there 👋</p>

            <h1 className="panel-title-large">
                I&apos;m{" "}
                <span className="text-glow-purple">Nafisa</span>
            </h1>

            <div className="panel-typing">
                <span style={{ color: "rgba(229,231,235,0.45)" }}>an </span>
                <span className="text-glow-purple" style={{ fontWeight: 600 }}>
                    {text}
                </span>
                <span className="typing-cursor">&nbsp;</span>
            </div>

            <p className="panel-description">
                Passionate about designing intelligent systems and exploring
                how ML can push the boundaries of what&apos;s possible —
                from predicting product prices to detecting exoplanets.
            </p>

            <div className="panel-buttons">
                <a
                    href="https://drive.google.com/file/d/1LARJXjU8nQv6bslCY3WZvm00FyBQkE2U/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon btn-neon-primary"
                >
                    Resume ↗
                </a>
                <a
                    href="https://github.com/Bloomkookie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon btn-neon-outline"
                >
                    GitHub ⟨/⟩
                </a>
            </div>
        </div>
    );
}
