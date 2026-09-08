import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigateTo, scrollToSection } from '@/lib/navigation';
import companyLogo from '@assets/EAC_LOGO-Picsart-BackgroundRemover_1787941651782.png';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
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
      const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
      const activeLine = headerHeight + 1;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.getBoundingClientRect().top <= activeLine) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionNavigation = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigateTo('/');
      window.setTimeout(() => scrollToSection(sectionId), 120);
    } else {
      scrollToSection(sectionId);
    }
    setIsMobileMenuOpen(false);
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
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <button 
            type="button"
            onClick={() => handleSectionNavigation('home')}
            className="flex items-center gap-3 hover:opacity-85 transition-opacity"
            data-testid="logo-button"
          >
            <img
              src={companyLogo}
              alt="Eastern Alliance Company"
              className="h-[8rem] w-auto max-w-[22rem] object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSectionNavigation(item.id)}
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
              type="button"
              onClick={() => handleSectionNavigation('contact')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide"
              data-testid="cta-get-quote-header"
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
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
                type="button"
                onClick={() => handleSectionNavigation(item.id)}
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
              type="button"
              onClick={() => handleSectionNavigation('contact')}
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
