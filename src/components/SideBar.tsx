"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "@/context/ThemeContext"
import {useState} from "react";

export const Sidebar = () => {
    const {theme, setTheme, currentTheme} = useTheme()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const pathname = usePathname()

    const sidebarItems = [
        { href: "/", label: "Home", icon: "🏠" },
        { href: "/about", label: "About", icon: "👤" },
        { href: "/contact", label: "Contact", icon: "📧" },
    ]

    if (!currentTheme.layout.hasSidebar) {
        return null
    }

    return (
        <aside
            className={`fixed pt-10 left-0 h-[calc(100vh)] w-64 z-40 border-r transition-all duration-500 ease-in-out bg-gray-800 shadow-sm border-gray-700 `}
        >
            <Link href="/" className={`flex items-center space-x-2 pl-8`}>
                <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${currentTheme.button} `}>
                    MT
                </div>
                <span className={`text-xl font-bold ${currentTheme.textSecondary}`}>MultiTheme</span>
            </Link>
            <nav className="p-4 space-y-1">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                isActive
                                    ? `bg-opacity-20 font-semibold ${currentTheme.title}`
                                    : `hover:bg-opacity-10 ${currentTheme.textSecondary}`
                            }`}
                            style={{
                                backgroundColor: isActive ? currentTheme.button : "transparent",
                                color: currentTheme.text,
                            }}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-base">{item.label}</span>
                        </Link>


                    )
                })}
            </nav>
                <div className="flex pl-7">
                    {/* Theme Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${currentTheme.card} ${currentTheme.textSecondary} transition-all duration-200`}
                        >
                            <span className="text-sm font-medium capitalize">{theme}</span>
                            <div
                                className={`w-0 h-0 border-x-4 border-x-transparent border-t-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                                style={{borderTopColor: "currentColor"}}
                            />
                        </button>

                        {isDropdownOpen && (
                            <div
                                className={`right-0 mt-2 w-40 rounded-lg shadow-lg border ${currentTheme.card} z-50 transition-all duration-200`}
                            >
                                {["light", "dark", "colorful"].map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => {
                                            setTheme(t as typeof theme)
                                            setIsDropdownOpen(false)
                                        }}
                                        className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg hover:bg-opacity-70 ${
                                            theme === t ? `font-semibold ${currentTheme.title}` : `${currentTheme.textSecondary}`
                                        }`}
                                    >
                                        {t.charAt(0).toUpperCase() + t.slice(1)}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
        </aside>
)
}
