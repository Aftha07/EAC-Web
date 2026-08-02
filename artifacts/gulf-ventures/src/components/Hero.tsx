import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroBg from '@assets/gulf-ventures/hero-bg.jpg';
import companyLogo from '@assets/LOGO_GVT_1785677705051.png';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/62 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </motion.div>

      {/* Full-height flex column — header offset via pt, bottom stats at flex-end */}
      <div className="relative z-10 flex flex-col items-center min-h-screen pt-20">
        
        {/* Centred hero body */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-6 w-full max-w-3xl mx-auto">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.82, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: 'easeOut' }}
            className="relative flex justify-center mb-4"
          >
            {/* Subtle red glow halo behind the logo */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: '420px',
                height: '420px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background:
                  'radial-gradient(ellipse 55% 60% at 50% 52%, rgba(200,16,46,0.18) 0%, rgba(200,16,46,0.07) 50%, transparent 75%)',
                zIndex: 0,
              }}
            />
            {/* Floating + subtle pulse wrapper */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ zIndex: 1 }}
            >
              <motion.img
                src={companyLogo}
                alt="Gulf Ventures Logo"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
                animate={{ filter: [
                  'drop-shadow(0 0 18px rgba(200,16,46,0.55)) drop-shadow(0 0 40px rgba(200,16,46,0.25))',
                  'drop-shadow(0 0 32px rgba(200,16,46,0.90)) drop-shadow(0 0 70px rgba(200,16,46,0.45))',
                  'drop-shadow(0 0 18px rgba(200,16,46,0.55)) drop-shadow(0 0 40px rgba(200,16,46,0.25))',
                ]}}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>

          {/* Company wordmark */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35 }}
            className="font-black text-white leading-none mb-1"
            style={{
              fontSize: 'clamp(2rem, 5.5vw, 3.8rem)',
              letterSpacing: '-0.01em',
              textShadow: '0 2px 40px rgba(0,0,0,0.6)',
            }}
          >
            GULF VENTURES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.48 }}
            className="font-semibold text-[#C8102E] uppercase tracking-[0.28em] mb-4"
            style={{ fontSize: 'clamp(0.55rem, 1.4vw, 0.78rem)' }}
          >
            Trading &nbsp;&amp;&nbsp; Contracting LTD.
          </motion.p>

          {/* Ornamental divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-14 h-px bg-gradient-to-r from-transparent to-[#C8102E]/65" />
            <div className="w-1 h-1 rounded-full bg-[#C8102E]" />
            <div className="w-5 h-px bg-[#C8102E]" />
            <div className="w-1 h-1 rounded-full bg-[#C8102E]" />
            <div className="w-14 h-px bg-gradient-to-l from-transparent to-[#C8102E]/65" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.7 }}
            className="text-white/80 font-light tracking-wide mb-1"
            style={{ fontSize: 'clamp(0.85rem, 1.9vw, 1.1rem)' }}
          >
            Engineering Reliable Industrial Solutions
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.82 }}
            className="text-white/35 text-[9px] sm:text-[11px] tracking-[0.16em] uppercase mb-6"
          >
            General Contracting · Equipment Rental · Industrial Gas Supply · Material Trading
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.92 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-[#C8102E] hover:bg-[#a30d25] text-white font-bold uppercase tracking-widest text-xs px-9 py-4 h-auto rounded-none shadow-lg shadow-[#C8102E]/25 transition-all duration-300"
              data-testid="cta-get-quote-hero"
            >
              Get a Quote
            </Button>
            <Button
              onClick={() => scrollToSection('services')}
              size="lg"
              variant="outline"
              className="border border-white/35 text-white hover:border-white/65 hover:bg-white/8 font-medium uppercase tracking-widest text-xs px-9 py-4 h-auto bg-transparent rounded-none transition-all duration-300"
              data-testid="cta-explore-services"
            >
              Explore Services
            </Button>
          </motion.div>
        </div>

        {/* Stat bar — bottom of the flex column */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="w-full bg-black/55 backdrop-blur-sm border-t border-white/10"
        >
          <div className="max-w-3xl mx-auto px-4 py-3 grid grid-cols-3 divide-x divide-white/10">
            {[
              { value: '15+', label: 'Years of Excellence' },
              { value: '500+', label: 'Projects Delivered' },
              { value: 'KSA', label: 'Kingdom of Saudi Arabia' },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-3">
                <p className="text-[#C8102E] font-bold text-base sm:text-lg leading-none mb-0.5">{stat.value}</p>
                <p className="text-white/45 text-[9px] sm:text-[10px] uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
