"use client";

export default function Button({ children, variant = "primary", href, onClick, className = "", ...props }) {
    const variants = {
        primary: "btn-neon btn-neon-primary",
        outline: "btn-neon btn-neon-outline",
        ghost: "btn-neon btn-neon-ghost",
    };

    const classes = `${variants[variant] || variants.primary} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={classes} {...props}>
            {children}
        </button>
    );
}
