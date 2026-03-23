"use client";

import { useState, useEffect } from "react";

export function useTheme() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const saved = localStorage.getItem("portfolio-theme");
        if (saved) setTheme(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem("portfolio-theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    return { theme, toggleTheme };
}
