import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-8 h-48 w-48 overflow-hidden rounded-2xl shadow-xl transition-transform hover:scale-105">
          <img
            src="/profile.jpg"
            alt="Arthur Seerig"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <h1 className="mb-4 font-serif text-4xl font-bold tracking-tight md:text-5xl">arthur seerig</h1>
        <div className="prose mx-auto max-w-2xl dark:prose-invert">
          <p className="mb-6 text-lg font-medium text-muted-foreground">
            23. south american. majoring in psychology and statistics.
          </p>
          <p className="mb-6 leading-relaxed">
            I'm not only midway my bachelor's degree as a Statistician with 6 years of full-stack web development baggage,
            mainly working on ecommerce stores, local business websites (real estate businesses, law firms and down to
            simple eletronic stores) but also have a professional statistician - a machine learning engineer to help me in
            case of gigs that would take too much time or knowledge -, Tiago Lopes.
          </p>
          <p className="mb-8 leading-relaxed">
            I'm the best option with a fair price to what I provide - I do not accept negotiation, please. Any doubts?
            Feel free to look at my portfolio.
          </p>
          <Button 
            onClick={scrollToContact} 
            variant="default" 
            size="lg"
            className="shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}