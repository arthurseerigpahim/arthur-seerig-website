import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { sendChatMessage } from '@/lib/api';
import QuickActions from './chat/QuickActions';

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatWidget({ isOpen, onToggle }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    await handleBotResponse(userMessage.text);
  };

  const handleQuickAction = async (message: string) => {
    if (isLoading) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    await handleBotResponse(message);
  };

  const handleBotResponse = async (message: string) => {
    setIsLoading(true);
    try {
      const response = await sendChatMessage(message);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.message,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      toast({
        title: 'Error sending message',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={onToggle}
          className="fixed bottom-4 right-4 rounded-full p-4 shadow-lg transition-transform hover:scale-105"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-4 right-4 h-[500px] w-[350px] overflow-hidden shadow-lg">
          <div className="flex h-14 items-center justify-between border-b bg-primary px-4">
            <span className="font-semibold text-primary-foreground">Chat with me</span>
            <Button variant="ghost" size="icon" onClick={onToggle} className="text-primary-foreground">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex h-[calc(100%-7rem)] flex-col justify-between p-4">
            <div className="overflow-auto">
              {messages.length === 0 && (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    👋 Hi! How can I help you today?
                  </p>
                  <QuickActions onActionSelect={handleQuickAction} disabled={isLoading} />
                </div>
              )}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-2 max-w-[80%] rounded-lg p-2 ${
                    msg.sender === 'user'
                      ? 'ml-auto bg-primary text-primary-foreground'
                      : 'mr-auto bg-muted'
                  }`}
                >
                  <p className="break-words">{msg.text}</p>
                  <span className="mt-1 block text-xs opacity-70">
                    {msg.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </Card>
      )}
    </>
  );
}