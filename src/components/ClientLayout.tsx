import { useTheme } from '@/context/ThemeContext';
import { Header } from '@/components/Header';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { currentTheme, theme } = useTheme();

  // Logic: Hide Header only if NOT mobile AND theme is dark AND layout has sidebar
  const shouldHideHeader = !useIsMobile() && theme === 'dark' && currentTheme.layout.hasSidebar;

  return (
    <div className="min-h-screen transition-all duration-300">
      {!shouldHideHeader && <Header />}
      <main className={` ${currentTheme.layout.hasSidebar} transition-all duration-300`}>
        {children}
      </main>
    </div>
  );
}
