"use client";

import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children, title }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
        >
            <div
                className="glass-card w-full max-w-lg animate-slide-up"
                onClick={(e) => e.stopPropagation()}
                style={{ border: "1px solid rgba(0, 243, 255, 0.2)" }}
            >
                <div className="flex items-center justify-between mb-4">
                    {title && <h3 className="text-lg font-bold glow-text-cyan">{title}</h3>}
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors text-xl leading-none"
                    >
                        ✕
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}
