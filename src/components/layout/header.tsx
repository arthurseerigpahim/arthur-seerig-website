import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProfileImage } from '@/components/ui/profile-image';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="/" className="group flex items-center space-x-3">
            <ProfileImage size="sm" />
            <span className="font-serif text-xl font-semibold tracking-tight">arthur seerig</span>
          </a>
        </div>

        <MainNav className="hidden lg:flex" />
        <MobileNav isOpen={isMobileMenuOpen} />
      </div>
    </header>
  );
}