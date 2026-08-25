import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import companyLogo from '@assets/PHOTO-2026-08-25-17-38-23-Picsart-BackgroundRemover_1787679117327.jpg';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'clients', label: 'Clients' },
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 hover:opacity-85 transition-opacity"
            data-testid="logo-button"
          >
            <img
              src={companyLogo}
              alt="Eastern Alliance Company"
              className="h-[4.5rem] w-auto max-w-[15rem] object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors relative ${
                  activeSection === item.id 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide"
              data-testid="cta-get-quote-header"
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left text-base font-medium uppercase tracking-wide py-2 transition-colors ${
                  activeSection === item.id 
                    ? 'text-primary' 
                    : 'text-foreground'
                }`}
                data-testid={`nav-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide"
              data-testid="cta-get-quote-mobile"
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
