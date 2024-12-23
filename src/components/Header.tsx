import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { navigationItems } from '@/lib/constants/navigation';
import type { NavigationItem } from '@/lib/types/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderNavigationItem = (item: NavigationItem) => {
    if (item.items) {
      return (
        <>
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <NavigationMenuLink asChild>
                    <a
                      href={subItem.href}
                      className={cn(
                        "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      )}
                    >
                      <div className="text-sm font-medium leading-none">{subItem.title}</div>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </>
      );
    }

    return (
      <NavigationMenuLink asChild>
        <a
          href={item.href}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
        >
          <div className="text-sm font-medium leading-none">{item.title}</div>
        </a>
      </NavigationMenuLink>
    );
  };

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
            <div className="overflow-hidden rounded-full transition-transform group-hover:scale-105">
              <img
                src="/profile.jpg"
                alt="Arthur Seerig"
                className="h-10 w-10 object-cover"
              />
            </div>
            <span className="font-serif text-xl font-semibold tracking-tight">arthur seerig</span>
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {renderNavigationItem(item)}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              {navigationItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}