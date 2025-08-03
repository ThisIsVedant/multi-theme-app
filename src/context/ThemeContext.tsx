"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Define theme types
export type ThemeType = "light" | "dark" | "colorful";

interface ThemeConfig {
    title: string;
    bg: string;
    header: string;
    card: string;
    secondaryCard: string;
    text: string;
    textSecondary: string;
    button: string;
    buttonSecondary: string;
    font: string;
    layout: string;
}

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
    currentTheme: ThemeConfig;
    themeStyles: Record<ThemeType, ThemeConfig>;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeStyles: Record<ThemeType, ThemeConfig> = {
    light: {
        title: "text-blue-600",
        bg: "bg-gray-50",
        header: "bg-white shadow-sm border-b border-gray-100",
        card: "bg-white border border-gray-200 shadow-sm",
        secondaryCard: "bg-blue-50 border border-blue-200",
        text: "text-gray-900",
        textSecondary: "text-gray-600",
        button: "bg-blue-600 text-white hover:bg-blue-700",
        buttonSecondary: "bg-white text-blue-600 hover:text-blue-500",
        font: "font-sans",
        layout: "minimal"
    },
    dark: {
        title: "text-amber-500",
        bg: "bg-gray-900",
        header: "bg-gray-800 shadow-sm border-b border-gray-700",
        card: "bg-gray-800 border border-gray-700 shadow-lg",
        secondaryCard: "bg-amber-100 border border-amber-500",
        text: "text-white",
        textSecondary: "text-gray-300",
        button: "bg-amber-500 text-black hover:bg-amber-600",
        buttonSecondary: "bg-gray-900 text-amber-500 hover:text-amber-600",
        font: "font-serif font-bold",
        layout: "sidebar"
    },
    colorful: {
        title: "text-pink-500",
        bg: "bg-amber-100",
        header: "bg-white backdrop-blur-md shadow-sm border-b border-indigo-100",
        card: "bg-white/90 backdrop-blur-sm border-2 border-indigo-100 shadow-xl",
        secondaryCard: "bg-pink-200 border border-blue-200",
        text: "text-pink-500",
        textSecondary: "text-black",
        button: "bg-pink-500 text-white hover:bg-pink-400",
        buttonSecondary: "text-pink-500 hover:text-pink-400",
        font: "font-pacifico",
        layout: "grid"
    }
};


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>("light");

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as ThemeType;
        if (savedTheme && ["light", "dark", "colorful"].includes(savedTheme)) {
            setTheme(savedTheme);
        }
    }, []);

    // Save theme to localStorage when it changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const currentTheme = themeStyles[theme];

    const value: ThemeContextType = {
        theme,
        setTheme,
        currentTheme,
        themeStyles
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
