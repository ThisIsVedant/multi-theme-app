import { useTheme } from "@/context/ThemeContext";
import { Header } from "@/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    const { currentTheme, theme } = useTheme();

    const shouldHideHeader = theme === "dark" && currentTheme.layout.hasSidebar;

    return (
        <div className="min-h-screen transition-all duration-300">
            {!shouldHideHeader && <Header />}
            {/*<Sidebar />*/}
            <main
                className={` ${
                    currentTheme.layout.hasSidebar} transition-all duration-300`}
            >
                {children}
            </main>
        </div>
    );
}
