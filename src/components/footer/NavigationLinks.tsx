import { navigationLinks } from '@/lib/constants/navigation';

export default function NavigationLinks() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
      <nav className="grid grid-cols-2 gap-2">
        {navigationLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}