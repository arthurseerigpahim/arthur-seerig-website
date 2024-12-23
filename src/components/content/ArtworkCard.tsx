import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Artwork {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

interface ArtworkCardProps {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <a href={artwork.href} className="block transition-transform hover:-translate-y-1">
      <Card>
        <CardHeader>
          <div className="aspect-square overflow-hidden rounded-md">
            <img src={artwork.imageUrl} alt={artwork.title} className="h-full w-full object-cover" />
          </div>
          <CardTitle className="line-clamp-2">{artwork.title}</CardTitle>
          <CardDescription>{artwork.description}</CardDescription>
        </CardHeader>
      </Card>
    </a>
  );
}