import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroBg from '@assets/gulf-ventures/hero-bg.jpg';
import companyLogo from '@assets/WhatsApp_Image_2026-07-30_at_12,05,01-Picsart-BackgroundRemov_1785516492951.jpeg';

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
        transition={{ duration: 2.4, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        {/* Lighter centre so logo area has contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </motion.div>

      {/* Content column */}
      <div className="relative z-10 flex flex-col items-center min-h-screen pt-20">

        {/* Hero body */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-4 w-full max-w-3xl mx-auto">

          {/* ── LOGO ── */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
            className="mb-5"
          >
            {/*
              Dark oval backdrop — seamlessly hides the JPEG black bg
              and gives the mark crisp contrast without any glow/shadow tricks.
              overflow:hidden + reduced height crops away the
              "GULF VENTURES / TRADING AND CONTRACTING COMPANY" text
              that sits in the bottom ~27 % of the image.
            */}
            <div
              style={{
                width: '260px',
                height: '200px',        /* 77 % of 260 — crops the text strip */
                overflow: 'hidden',
                borderRadius: '20px',
                background: '#111111',  /* slightly lighter than pure black for contrast */
                boxShadow:
                  '0 0 0 1.5px rgba(200,16,46,0.5), 0 12px 56px rgba(0,0,0,0.6), 0 0 80px rgba(200,16,46,0.18)',
                margin: '0 auto',
              }}
            >
              <img
                src={companyLogo}
                alt="Gulf Ventures GVTC mark"
                style={{
                  width: '260px',
                  height: '260px',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  display: 'block',
                  /* Boost luminance so dark building elements stand out — no hue change */
                  filter: 'brightness(1.6) contrast(1.2)',
                }}
              />
            </div>
          </motion.div>

          {/* ── WORDMARK ── */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.38 }}
            className="font-black text-white leading-none mb-1"
            style={{
              fontSize: 'clamp(2rem, 5.5vw, 3.8rem)',
              letterSpacing: '-0.01em',
              textShadow: '0 2px 30px rgba(0,0,0,0.6)',
            }}
          >
            GULF VENTURES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="font-semibold text-[#C8102E] uppercase tracking-[0.28em] mb-4"
            style={{ fontSize: 'clamp(0.55rem, 1.4vw, 0.8rem)' }}
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
            className="text-white/85 font-light tracking-wide mb-1"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.15rem)' }}
          >
            Engineering Reliable Industrial Solutions
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.82 }}
            className="text-white/40 text-[9px] sm:text-[11px] tracking-[0.16em] uppercase mb-6"
          >
            General Contracting · Equipment Rental · Industrial Gas Supply · Material Trading
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-[#C8102E] hover:bg-[#a30d25] text-white font-bold uppercase tracking-widest text-xs px-10 py-4 h-auto rounded-none shadow-lg shadow-[#C8102E]/25 transition-all duration-300"
              data-testid="cta-get-quote-hero"
            >
              Get a Quote
            </Button>
            <Button
              onClick={() => scrollToSection('services')}
              size="lg"
              variant="outline"
              className="border border-white/35 text-white hover:border-white/65 hover:bg-white/5 font-medium uppercase tracking-widest text-xs px-10 py-4 h-auto bg-transparent rounded-none transition-all duration-300"
              data-testid="cta-explore-services"
            >
              Explore Services
            </Button>
          </motion.div>
        </div>

        {/* Stat bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="w-full bg-black/60 backdrop-blur-sm border-t border-white/10"
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
