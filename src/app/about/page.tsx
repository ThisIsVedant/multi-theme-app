'use client';

import { useTheme } from '@/context/ThemeContext';
import { Sidebar } from '@/components/SideBar';

export default function AboutPage() {
  const { currentTheme } = useTheme();

  const features = [
    {
      icon: '🎨',
      title: 'Dynamic Theming',
      description:
        'Switch between multiple themes instantly with persistent storage and smooth animations.',
    },
    {
      icon: '💻',
      title: 'TypeScript Support',
      description: 'Built with TypeScript for better development experience and type safety.',
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Fully responsive layout that works perfectly on all devices and screen sizes.',
    },
    {
      icon: '⚡',
      title: 'Performance Optimized',
      description:
        'Optimized for performance with efficient state management and smooth transitions.',
    },
  ];

  return (
    <>
      <Sidebar />
      <main
        className={`${currentTheme.bg} ${currentTheme.font} ${currentTheme.text} min-h-screen px-6 py-12 pt-16 ${
          currentTheme.layout.hasSidebar ? 'ml-64' : ''
        }`}
      >
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <section className="text-center space-y-6 mb-20">
            <h1 className={`text-4xl md:text-6xl font-bold ${currentTheme.textSecondary}`}>
              About <span className={`${currentTheme.title}`}>MultiTheme</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              MultiTheme is a cutting-edge React application that demonstrates the power of dynamic
              theming and modern web development practices.
            </p>
          </section>

          {/* Mission Section */}
          <section className={`${currentTheme.card} rounded-2xl p-8 md:p-12 text-center mb-20`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe that user experience should be personal and adaptable. Our mission is to
              create applications that not only function beautifully but also adapt to user
              preferences seamlessly. Through innovative theming solutions, we&apos;re pushing the
              boundaries of what&apos;s possible in modern web development.
            </p>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover what makes MultiTheme special and how it can transform your user
                experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-6 rounded-xl transition-transform duration-300 hover:scale-105 shadow-sm"
                >
                  <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg text-2xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className={`${currentTheme.secondaryCard} rounded-2xl p-8 md:p-12 text-center`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${currentTheme.textSecondary}`}>
              Built with Passion
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              MultiTheme was crafted by a team of passionate developers who believe in the power of
              great design and user experience. Every line of code was written with care and
              attention to detail.
            </p>
            <button
              className={`${currentTheme.button} px-8 py-4 rounded-lg font-semibold transition`}
            >
              Join Our Team
            </button>
          </section>
        </div>
      </main>
    </>
  );
}
