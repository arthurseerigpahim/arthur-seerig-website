import { cn } from '@/lib/utils';

interface ProfileImageProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  withHoverEffect?: boolean;
}

export function ProfileImage({ 
  className,
  size = 'md',
  withHoverEffect = true
}: ProfileImageProps) {
  const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-24 w-24',
    lg: 'h-48 w-48'
  };

  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl shadow-lg",
      withHoverEffect && "transition-transform hover:scale-105",
      sizeClasses[size],
      className
    )}>
      <img
        src="/profile.jpg"
        alt="Arthur Seerig"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}