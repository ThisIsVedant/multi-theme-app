"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "@/context/ThemeContext"

export const Header = () => {
    const {theme, setTheme, currentTheme} = useTheme()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ]

    useEffect(() => {
        setIsDropdownOpen(false)
        setIsMobileMenuOpen(false)
    }, [pathname])

    console.log(currentTheme.text,"Baby")

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 ${currentTheme.header} border-b ${currentTheme.text} ${currentTheme.font} transition-all duration-500`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className={`flex items-center space-x-2`}>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${currentTheme.button} `}>
                            MT
                        </div>
                        <span className={`text-xl font-bold ${currentTheme.textSecondary}`}>MultiTheme</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`transition-colors duration-200 hover:opacity-80 ${pathname === href ? `font-semibold ${currentTheme.title}` : ""}`}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Theme Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${currentTheme.card} ${currentTheme.textSecondary} transition-all duration-200`}
                        >
                            <span className="text-sm font-medium capitalize">{theme}</span>
                            <div
                                className={`w-0 h-0 border-x-4 border-x-transparent border-t-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                                style={{ borderTopColor: "currentColor" }}
                            />
                        </button>

                        {isDropdownOpen && (
                            <div
                                className={`absolute right-0 mt-2 w-40 rounded-lg shadow-lg border ${currentTheme.card} z-50 transition-all duration-200`}
                            >
                                {["light", "dark", "colorful"].map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => {
                                            setTheme(t as typeof theme)
                                            setIsDropdownOpen(false)
                                        }}
                                        className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg hover:bg-opacity-70 ${
                                            theme === t ? "font-semibold" : ""
                                        } ${currentTheme.text}`}
                                    >
                                        {t.charAt(0).toUpperCase() + t.slice(1)}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg ${currentTheme.text}`}
                    >
                        {isMobileMenuOpen ? (
                            <div className="w-6 h-6 relative">
                                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-current rotate-45" />
                                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-current -rotate-45" />
                            </div>
                        ) : (
                            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                                <div className="w-full h-0.5 bg-current" />
                                <div className="w-full h-0.5 bg-current" />
                                <div className="w-full h-0.5 bg-current" />
                            </div>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className={`md:hidden mt-2 pt-4 pb-4 space-y-2 ${currentTheme.card} rounded-lg shadow transition-all`}>
                        {navItems.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block py-2 px-4 rounded-lg ${pathname === href ? "font-semibold" : ""} ${currentTheme.text}`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    )
}