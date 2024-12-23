import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface PortfolioPreviewProps {
  item: {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    href: string;
    previewImages?: string[];
  };
}

export default function PortfolioPreview({ item }: PortfolioPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [item.imageUrl, ...(item.previewImages || [])];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
        role="button"
        tabIndex={0}
      >
        <div className="aspect-video overflow-hidden rounded-md">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{item.title}</DialogTitle>
          </DialogHeader>
          
          <div className="relative aspect-video">
            <img
              src={images[currentImage]}
              alt={`Preview ${currentImage + 1}`}
              className="h-full w-full object-cover"
            />
            {images.length > 1 && (
              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-2 w-2 rounded-full ${
                      currentImage === index ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <p className="text-sm text-muted-foreground">{item.description}</p>

          <div className="flex justify-end">
            <Button asChild>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Project
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}