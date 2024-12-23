import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RecentContent from '@/components/RecentContent';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

function App() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <RecentContent />
        </main>
        <ChatWidget isOpen={isWidgetOpen} onToggle={() => setIsWidgetOpen(!isWidgetOpen)} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;