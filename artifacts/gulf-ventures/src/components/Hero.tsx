import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroBg from '@assets/gulf-ventures/hero-bg.jpg';
import companyLogo from '@assets/WhatsApp_Image_2026-07-30_at_12.05.01_1785516069310.jpeg';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Logo — hero centrepiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            {/* Glow ring behind logo */}
            <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl scale-110" />
            <img
              src={companyLogo}
              alt="Gulf Ventures Trading and Contracting LTD. Logo"
              className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain rounded-2xl shadow-2xl ring-2 ring-white/20"
              style={{ filter: 'drop-shadow(0 8px 32px rgba(200,16,46,0.35))' }}
            />
          </div>
        </motion.div>

        {/* Company full name */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-3"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            GULF VENTURES
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-[#C8102E] tracking-[0.2em] uppercase mt-1">
            Trading and Contracting LTD.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-16 bg-[#C8102E]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
          <div className="h-px w-16 bg-[#C8102E]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-lg sm:text-xl md:text-2xl font-bold text-white/90 mb-4"
        >
          Engineering Reliable Industrial Solutions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/75 text-sm sm:text-base md:text-lg mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide"
        >
          General Contracting • Equipment Rental • Industrial Gas Supply • Material Trading • Manpower Supply
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wide text-base px-8 py-6 h-auto"
            data-testid="cta-get-quote-hero"
          >
            Get a Quote
          </Button>
          <Button
            onClick={() => scrollToSection('services')}
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-foreground font-bold uppercase tracking-wide text-base px-8 py-6 h-auto bg-transparent"
            data-testid="cta-explore-services"
          >
            Explore Services
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
