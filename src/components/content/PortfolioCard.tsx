import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PortfolioItem {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  href: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <a href={item.href} className="block transition-transform hover:-translate-y-1">
      <Card>
        <CardHeader>
          <div className="aspect-video overflow-hidden rounded-md">
            <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover" />
          </div>
          <CardTitle className="line-clamp-2">{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}