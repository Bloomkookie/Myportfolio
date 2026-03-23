"use client";

export default function Card({ children, className = "", hover = true, ...props }) {
    return (
        <div
            className={`glass-card ${hover ? "" : "hover:transform-none hover:shadow-none"} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
