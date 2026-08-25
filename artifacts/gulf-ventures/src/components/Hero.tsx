import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroBg from '@assets/gulf-ventures/hero-bg.jpg';
import serviceEquipment from '@assets/generated_images/service-heavy-equipment-reference-inspired.jpg';
import serviceGas from '@assets/generated_images/service-industrial-gas.jpg';
import serviceTrading from '@assets/generated_images/service-material-trading.jpg';
import serviceManpower from '@assets/generated_images/service-manpower.jpg';
import serviceShutdown from '@assets/generated_images/service-shutdown.jpg';
import serviceSafety from '@assets/generated_images/service-safety.jpg';

const activities = [
  {
    number: '01',
    label: 'Equipment Rental',
    title: 'Powering your project with the right equipment.',
    description:
      'Reliable cranes, lifts, forklifts, generators, and specialist equipment, ready when your operation needs them.',
    image: serviceEquipment,
  },
  {
    number: '02',
    label: 'Industrial Gas Supply',
    title: 'Industrial gases delivered with confidence.',
    description:
      'Certified argon, nitrogen, oxygen, and specialty gases with dependable site delivery across the Kingdom.',
    image: serviceGas,
  },
  {
    number: '03',
    label: 'Material Trading',
    title: 'The materials that keep industry moving.',
    description:
      'Industrial materials, steel products, and construction supplies sourced for demanding projects.',
    image: serviceTrading,
  },
  {
    number: '04',
    label: 'Manpower Supply',
    title: 'Skilled people for critical operations.',
    description:
      'Experienced technical teams and workforce solutions built around safety, capability, and performance.',
    image: serviceManpower,
  },
  {
    number: '05',
    label: 'Shutdown Support',
    title: 'Turnaround support without compromise.',
    description:
      'Coordinated shutdown and maintenance support that helps plants return to operation safely and on schedule.',
    image: serviceShutdown,
  },
  {
    number: '06',
    label: 'Safety Materials',
    title: 'Safety equipment for every worksite.',
    description:
      'A complete range of PPE and safety materials for teams working in demanding industrial environments.',
    image: serviceSafety,
  },
];

const SLIDE_DURATION = 3000;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlayResetKey, setAutoPlayResetKey] = useState(0);
  const activeActivity = activities[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % activities.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(timer);
  }, [autoPlayResetKey]);

  const goToActivity = (index: number) => {
    setActiveIndex((index + activities.length) % activities.length);
    setAutoPlayResetKey((current) => current + 1);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="group relative min-h-screen w-full overflow-hidden bg-[#071323] text-white"
    >
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={activeActivity.image}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.6 }, scale: { duration: 3, ease: 'easeOut' } }}
        >
          <img
            src={activeActivity.image}
            alt={`${activeActivity.label} by Eastern Alliance Company`}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          mixBlendMode: 'soft-light',
          opacity: 0.22,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,13,26,.94)_0%,rgba(4,17,34,.78)_38%,rgba(4,15,29,.25)_75%,rgba(4,15,29,.44)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,10,20,.9)_0%,transparent_42%,rgba(1,7,15,.18)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-5 pb-7 pt-28 sm:px-8 lg:px-12">
        <div className="flex flex-1 items-center py-16 sm:py-20">
          <div className="w-full max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#f2b2bd]"
            >
              <span className="h-px w-10 bg-[#C8102E]" />
              Eastern Alliance Company
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeActivity.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
              >
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#ef334f]">
                  {activeActivity.number} / 06 &nbsp; {activeActivity.label}
                </p>
                <h1 className="max-w-xl font-[var(--font-heading)] text-5xl font-extrabold leading-[0.94] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]">
                  {activeActivity.title}
                </h1>
                <p className="mt-7 max-w-lg text-base leading-7 text-white/72 sm:text-lg">
                  {activeActivity.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Button
                onClick={() => scrollToSection('contact')}
                className="h-14 rounded-none bg-[#C8102E] px-7 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-black/20 hover:bg-[#a30d25]"
                data-testid="cta-get-quote-hero"
              >
                Get a Quote <ArrowRight className="ml-3 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection('services')}
                variant="outline"
                className="h-14 rounded-none border-white/45 bg-white/5 px-7 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-[#071323]"
                data-testid="cta-explore-services"
              >
                Explore Activities
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-5 top-1/2 z-20 flex -translate-y-1/2 gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:right-8 lg:right-12">
          <button
            type="button"
            onClick={() => goToActivity(activeIndex - 1)}
            className="pointer-events-auto flex h-12 w-12 items-center justify-center border border-white/45 bg-black/20 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-[#071323]"
            aria-label="Previous activity"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goToActivity(activeIndex + 1)}
            className="pointer-events-auto flex h-12 w-12 items-center justify-center border border-white/45 bg-black/20 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-[#071323]"
            aria-label="Next activity"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}