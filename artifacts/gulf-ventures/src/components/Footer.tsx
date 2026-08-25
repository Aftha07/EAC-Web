import { Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'clients', label: 'Clients' },
  { id: 'contact', label: 'Contact' },
];

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">EASTERN ALLIANCE COMPANY</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Eastern Alliance Company provides reliable equipment, materials, and services
              for Saudi Arabia&apos;s energy and industrial sectors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-white/80 hover:text-primary transition-colors"
                  data-testid={`footer-link-${link.id}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">+966 XX XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">info@gulfventures.sa</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">
                    Al Khobar, Eastern Province<br />
                    Saudi Arabia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-white/70 text-sm">
            &copy; 2025 Eastern Alliance Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
