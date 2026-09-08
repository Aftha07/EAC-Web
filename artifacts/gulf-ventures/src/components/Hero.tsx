import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@assets/gulf-ventures/hero-bg.jpg';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (!element) return;

    const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({
      top: Math.max(0, elementPosition),
      behavior: 'smooth',
    });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#071323] text-white">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={heroBg}
          alt="Eastern Alliance Company industrial environment"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,13,26,.94)_0%,rgba(4,17,34,.78)_38%,rgba(4,15,29,.25)_75%,rgba(4,15,29,.44)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(2,10,20,.9)_0%,transparent_42%,rgba(1,7,15,.18)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
        <div className="w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#f2b2bd]"
          >
            <span className="h-px w-10 bg-[#C8102E]" />
            Eastern Alliance Company
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#ef334f]">
              Built for industrial progress
            </p>
            <h1 className="max-w-3xl font-[var(--font-heading)] text-5xl font-extrabold leading-[0.94] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]">
              Strong foundations for what comes next.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              Eastern Alliance Company brings trust, discipline, and long-term thinking to Saudi Arabia&apos;s energy and industrial landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button
              onClick={scrollToContact}
              className="h-14 rounded-none bg-[#C8102E] px-7 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-black/20 hover:bg-[#a30d25]"
              data-testid="cta-get-quote-hero"
            >
              Get a Quote <ArrowRight className="ml-3 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}