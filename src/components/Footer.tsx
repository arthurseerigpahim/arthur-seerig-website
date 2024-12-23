import ContactForm from './ContactForm';
import NavigationLinks from './footer/NavigationLinks';
import SocialLinks from './footer/SocialLinks';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <NavigationLinks />

            <div>
              <p className="mb-2 text-sm text-muted-foreground">Contact me at:</p>
              <a
                href="mailto:arthur.seerig@gmail.com"
                className="text-lg font-medium hover:text-primary"
              >
                arthur.seerig@gmail.com
              </a>
            </div>

            <div>
              <p className="mb-4 text-sm text-muted-foreground">made by Arthur Seerig Pahim, 2024</p>
              <SocialLinks />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Me</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </footer>
  );
}