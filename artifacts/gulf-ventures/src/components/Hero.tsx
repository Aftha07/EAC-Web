import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MoveUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/lib/navigation';
import { services } from '@/lib/service-data';
import heavyEquipmentHero from '@assets/gulf-ventures/Crane.png';
import gasSupplyHero from '@assets/gulf-ventures/AR Gas.png';
import materialTradingHero from '@assets/gulf-ventures/Mtrl.png';
import manpowerHero from '@assets/gulf-ventures/Mnp.png';
import safetyHero from '@assets/gulf-ventures/Safety.png';
import shutdownHero from '@assets/gulf-ventures/Shutdown.png';

const SLIDE_DURATION = 5000;

function ColoredTitle({ text }: { text: string }) {
  return (
    <>
      {Array.from(text).map((character, index) => {
        if (character === ' ') {
          return <span key={`${character}-${index}`}> </span>;
        }

        return (
          <span
            key={`${character}-${index}`}
            style={{
              backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 42%, #c8102e 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {character}
          </span>
        );
      })}
    </>
  );
}

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const heroImage =
    activeIndex === 0
      ? heavyEquipmentHero
      : activeIndex === 1
        ? gasSupplyHero
        : activeIndex === 2
          ? materialTradingHero
          : activeIndex === 3
            ? manpowerHero
            : activeIndex === 5
              ? shutdownHero
            : activeIndex === 6
              ? safetyHero
              : activeService.image;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % services.length);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  const changeSlide = (nextIndex: number) => {
    setActiveIndex((nextIndex + services.length) % services.length);
  };

  return (
    <>
      <style>{`
        .eac-hero-image {
          object-position: 64% center;
        }

        @media (min-width: 768px) {
          .eac-hero-image {
            object-position: 58% center;
          }
        }
      `}</style>
      <section
        id="home"
        className="relative h-[calc(100dvh-7rem)] min-h-[calc(100svh-7rem)] overflow-hidden bg-black text-white"
        style={{
          height: 'calc(100dvh - 7rem)',
          minHeight: 'calc(100svh - 7rem)',
        }}
      >
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={activeService.slug}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <img
            src={heroImage}
            alt={`${activeService.label} at an industrial site`}
            className="eac-hero-image h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.98)_0%,rgba(0,0,0,.9)_36%,rgba(0,0,0,.62)_70%,rgba(0,0,0,.38)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.78)_0%,rgba(0,0,0,.22)_52%,rgba(0,0,0,.48)_100%)]" />
      <div className="absolute left-0 top-0 h-40 w-20 bg-[#C8102E] [clip-path:polygon(0_0,100%_0,42%_100%,0_100%)] opacity-90 sm:h-56 sm:w-28" />
      <div className="absolute bottom-0 right-0 h-24 w-16 bg-[#C8102E] [clip-path:polygon(100%_0,100%_100%,0_100%)] opacity-90 sm:h-32 sm:w-24" />

      <div
        className="relative z-10 mx-auto flex h-full min-h-[calc(100svh-7rem)] max-w-7xl items-center px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
        style={{ minHeight: 'calc(100svh - 7rem)' }}
      >
        <div
          className="w-full max-w-xl border-l-4 border-[#C8102E] px-5 py-6 sm:px-8 sm:py-8 lg:px-9 lg:py-9"
          style={{ color: '#ffffff' }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.slug}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                <span className="h-px w-8 bg-[#C8102E]" />
                <span>{activeService.number} / {String(services.length).padStart(2, '0')}</span>
                <span style={{ color: '#ffffff' }}>EAC Services</span>
              </div>

              <p
                className="mb-4 text-sm font-semibold uppercase tracking-[0.18em]"
                style={{ color: '#ffffff' }}
              >
                {activeService.eyebrow}
              </p>

              <h1
                className="max-w-xl font-[var(--font-heading)] text-4xl font-bold uppercase leading-[0.9] tracking-tight sm:text-5xl lg:text-[3.75rem]"
              >
                {activeIndex === 0 ? (
                  <>
                    <span className="block"><ColoredTitle text="Heavy Equipment" /></span>
                    <span className="block"><ColoredTitle text="Rental" /></span>
                  </>
                ) : (
                  <ColoredTitle text={activeService.label} />
                )}
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-white/90 sm:text-lg">
                {activeService.lead}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button
              type="button"
              onClick={() => scrollToSection('services')}
              className="h-12 rounded-none bg-[#C8102E] px-6 text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-[#a30d25]"
              data-testid="cta-explore-service-hero"
            >
              Explore Service
              <MoveUpRight className="ml-3 h-4 w-4" />
            </Button>
            <Button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="h-12 rounded-none border border-white/75 bg-transparent px-6 text-xs font-bold uppercase tracking-[0.16em] text-white hover:border-white hover:bg-white/10"
              data-testid="cta-get-quote-hero"
            >
              Get a Quote
              <ArrowRight className="ml-3 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="absolute right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 sm:right-6 lg:right-8">
          <span className="mb-1 text-center text-xs font-semibold tabular-nums tracking-[0.16em] text-white/75">
            {String(activeIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={() => changeSlide((activeIndex - 1 + services.length) % services.length)}
            className="flex h-11 w-11 items-center justify-center border border-[#C8102E] bg-black/80 text-white transition-colors hover:bg-[#C8102E] hover:text-white"
            aria-label="Previous service"
            data-testid="hero-previous-service"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => changeSlide(activeIndex + 1)}
            className="flex h-11 w-11 items-center justify-center border border-[#C8102E] bg-black/80 text-white transition-colors hover:bg-[#C8102E] hover:text-white"
            aria-label="Next service"
            data-testid="hero-next-service"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="pointer-events-none absolute bottom-8 left-4 right-4 flex items-center justify-start gap-2 sm:bottom-10 sm:left-6 sm:right-6 lg:bottom-12 lg:left-8 lg:right-8">
          {services.map((service, index) => (
            <button
              key={service.slug}
              type="button"
              onClick={() => changeSlide(index)}
              className={`pointer-events-auto h-1 transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-[#C8102E]'
                  : 'w-3 bg-white/75 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}: ${service.label}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
