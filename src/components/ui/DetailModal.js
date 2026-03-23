"use client";

import { useState } from "react";

export default function DetailModal({ isOpen, onClose, title, icon, children }) {
    if (!isOpen) return null;

    return (
        <div className="detail-overlay" onClick={onClose}>
            <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
                <button className="detail-close" onClick={onClose}>✕</button>
                <div className="detail-header">
                    <span className="detail-header-icon">{icon}</span>
                    <h2 className="detail-header-title">{title}</h2>
                </div>
                <div className="detail-body">
                    {children}
                </div>
            </div>
        </div>
    );
}
