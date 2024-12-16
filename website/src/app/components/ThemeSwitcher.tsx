"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return (
        <h1>Fortnite</h1>
    )

    if (resolvedTheme === "dark") {
        return (
            <button onClick={() => setTheme("light")} className="rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-teal-300">Turn light</button>
        );
    }
    else {
        return (
            <button onClick={() => setTheme("dark")} className="rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-teal-300">Turn dark</button>
        );
    }
};