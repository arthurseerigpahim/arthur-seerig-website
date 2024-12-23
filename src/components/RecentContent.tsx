import { recentBlogPosts, portfolioHighlights, recentArtworks } from '@/lib/content';
import BlogPostCard from './content/BlogPostCard';
import PortfolioCard from './content/PortfolioCard';
import ArtworkCard from './content/ArtworkCard';

export default function RecentContent() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-3xl font-bold">Recent Content</h2>
      <div className="space-y-16">
        <div>
          <h3 className="mb-6 text-2xl font-semibold">Latest Blog Posts</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentBlogPosts.map((post) => (
              <BlogPostCard key={post.href} post={post} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-semibold">Portfolio Highlights</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolioHighlights.map((item) => (
              <PortfolioCard key={item.href} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-semibold">Digital Artwork</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentArtworks.map((artwork) => (
              <ArtworkCard key={artwork.href} artwork={artwork} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}