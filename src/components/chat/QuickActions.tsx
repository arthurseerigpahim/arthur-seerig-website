import { Button } from '@/components/ui/button';

interface QuickActionsProps {
  onActionSelect: (message: string) => void;
  disabled?: boolean;
}

export default function QuickActions({ onActionSelect, disabled }: QuickActionsProps) {
  const quickActions = [
    { label: '📅 Book a Meeting', message: 'I would like to schedule a meeting' },
    { label: '💼 View Portfolio', message: 'Can you show me your portfolio?' },
    { label: '💰 Pricing Info', message: 'What are your service rates?' },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {quickActions.map((action) => (
        <Button
          key={action.label}
          variant="outline"
          size="sm"
          disabled={disabled}
          onClick={() => onActionSelect(action.message)}
          className="text-xs"
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
}