"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Define theme types
export type ThemeType = "light" | "dark" | "colorful";

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
    currentTheme: {
        header: string;
        text: string;
        textSecondary: string;
        card: string;
    };
}

const defaultTheme = "light";

const themeStyles = {
    light: {
        header: "bg-white",
        text: "text-black",
        textSecondary: "text-gray-600",
        card: "bg-gray-100",
    },
    dark: {
        header: "bg-gray-900",
        text: "text-white",
        textSecondary: "text-gray-400",
        card: "bg-gray-800",
    },
    colorful: {
        header: "bg-gradient-to-r from-pink-400 to-yellow-300",
        text: "text-indigo-800",
        textSecondary: "text-purple-600",
        card: "bg-yellow-100",
    },
};

const ThemeContext = createContext<ThemeContextType>({
    theme: defaultTheme,
    setTheme: () => {},
    currentTheme: themeStyles[defaultTheme],
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setThemeState] = useState<ThemeType>(defaultTheme);

    const setTheme = (newTheme: ThemeType) => {
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as ThemeType;
        if (savedTheme) setThemeState(savedTheme);
    }, []);

    const currentTheme = themeStyles[theme];

    return (
        <ThemeContext.Provider value={{ theme, setTheme, currentTheme }}>
            <div className={`${theme} min-h-screen transition-all duration-300`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
