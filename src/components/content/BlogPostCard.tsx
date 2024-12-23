import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  href: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <a href={post.href} className="block transition-transform hover:-translate-y-1">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          <CardDescription>{post.category}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
        </CardContent>
      </Card>
    </a>
  );
}