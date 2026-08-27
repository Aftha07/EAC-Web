import { ArrowLeft, ArrowRight, Check, ChevronRight, MapPin, MoveUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { navigateTo, scrollToSection } from '@/lib/navigation';
import type { ServiceDetail as ServiceDetailModel } from '@/lib/service-data';
import { services } from '@/lib/service-data';

type ServiceDetailProps = {
  service: ServiceDetailModel;
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] } },
};

function goToQuote() {
  if (window.location.pathname !== '/') {
    navigateTo('/');
    window.setTimeout(() => scrollToSection('contact'), 120);
    return;
  }
  scrollToSection('contact');
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = service.icon;
  const currentIndex = services.findIndex((item) => item.slug === service.slug);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <main className="min-h-[100dvh] bg-[#f0ede5] text-[#102334]">
      <section className="relative overflow-hidden bg-[#102334] pb-0 pt-28 text-[#f4f0e7] sm:pt-32">
        <div className="industrial-noise pointer-events-none absolute inset-0" />
        <div className="industrial-grid pointer-events-none absolute inset-0 opacity-[0.12]" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center justify-between border-b border-white/15 py-5"
          >
            <button
              type="button"
              onClick={() => navigateTo('/')}
              className="group flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#c3ccd0] transition-colors hover:text-[#e0b974]"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to services
            </button>
            <span className="service-mono hidden text-[10px] uppercase text-[#82919c] sm:block">
              Eastern Alliance / activity {service.number} of 06
            </span>
          </motion.div>

          <div className="grid items-end gap-10 py-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:py-24">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="service-mono mb-7 flex items-center gap-3 text-[10px] uppercase text-[#e0b974]">
                <span className="h-px w-10 bg-[#c8102e]" />
                {service.eyebrow}
              </div>
              <div className="service-mono mb-5 text-xs text-[#82919c]">{service.number} / 06</div>
              <h1 className="service-display max-w-2xl text-7xl font-bold uppercase leading-[0.83] tracking-tight sm:text-8xl lg:text-[7.8rem]">
                {service.title}
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="max-w-xl lg:justify-self-end"
            >
              <p className="text-lg leading-8 text-[#d2d8d9] sm:text-xl">{service.lead}</p>
              <button
                type="button"
                onClick={goToQuote}
                className="mt-9 inline-flex items-center gap-3 bg-[#c8102e] px-6 py-4 text-xs font-bold uppercase tracking-[0.17em] text-[#f4f0e7] transition-colors hover:bg-[#a60d26]"
              >
                Talk to our team <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative h-[22rem] overflow-hidden sm:h-[32rem] lg:h-[39rem]"
          >
            <img
              src={service.image}
              alt={`${service.label} service capability`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102334]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 text-xs uppercase tracking-[0.17em] text-[#f4f0e7] sm:bottom-9 sm:left-9">
              <Icon className="h-5 w-5 text-[#e0b974]" />
              <span>{service.label}</span>
            </div>
            <span className="service-mono absolute right-5 top-5 text-[10px] text-white/75 sm:right-8 sm:top-8">
              FIELD NOTE / {service.number}
            </span>
            <span className="service-scan absolute left-0 top-0 h-1/4 w-full bg-gradient-to-r from-transparent via-[#e0b974]/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              <div className="service-mono mb-5 text-[10px] uppercase text-[#c8102e]">The brief</div>
              <h2 className="service-display max-w-sm text-5xl font-bold uppercase leading-[0.9] sm:text-6xl">
                Built around your workfront.
              </h2>
              <div className="mt-10 flex items-center gap-3 border-t border-[#102334]/15 pt-5 text-xs uppercase tracking-[0.13em] text-[#60717a]">
                <MapPin className="h-4 w-4 text-[#c8102e]" />
                Saudi Arabia · Eastern Province
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              className="max-w-2xl"
            >
              <p className="text-xl leading-9 text-[#344b59] sm:text-2xl">{service.description}</p>
              <div className="mt-12 grid gap-x-8 gap-y-5 border-t border-[#102334]/15 pt-7 sm:grid-cols-2">
                {service.capabilities.map((capability) => (
                  <div key={capability} className="flex items-start gap-3 text-sm font-semibold text-[#102334]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e]" />
                    {capability}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="mt-20 grid border-y border-[#102334]/15 sm:grid-cols-3"
          >
            {service.stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-5 border-b border-[#102334]/15 py-6 last:border-0 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0">
                <span className="service-display text-5xl font-bold text-[#c8102e]">{stat.value}</span>
                <span className="max-w-[8rem] text-xs uppercase leading-5 tracking-[0.12em] text-[#60717a]">{stat.label}</span>
                <span className="service-mono ml-auto self-start text-[9px] text-[#9aa4a7]">0{index + 1}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#e3ded3] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="mb-12 flex flex-col justify-between gap-5 border-b border-[#102334]/15 pb-8 sm:flex-row sm:items-end"
          >
            <div>
              <div className="service-mono mb-4 text-[10px] uppercase text-[#c8102e]">How we work</div>
              <h2 className="service-display text-5xl font-bold uppercase leading-none sm:text-7xl">A clear sequence.</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#60717a]">
              Practical coordination at every handover, from the first call to the final shift.
            </p>
          </motion.div>
          <div className="grid gap-0 md:grid-cols-3">
            {service.process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative min-h-[15rem] border-b border-[#102334]/15 py-7 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span className="service-mono text-[10px] text-[#c8102e]">STEP {item.step}</span>
                  <ChevronRight className="h-4 w-4 text-[#9aa4a7] transition-transform group-hover:translate-x-1 group-hover:text-[#c8102e]" />
                </div>
                <h3 className="service-display mt-12 text-4xl font-semibold uppercase">{item.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-[#60717a]">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#c8102e] py-16 text-[#f4f0e7] sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-9 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="service-mono mb-4 text-[10px] uppercase text-[#f4d2c9]">Ready when you are</div>
            <h2 className="service-display max-w-2xl text-5xl font-bold uppercase leading-[0.88] sm:text-7xl">
              Put this capability to work.
            </h2>
          </motion.div>
          <motion.button
            type="button"
            onClick={goToQuote}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group inline-flex shrink-0 items-center gap-4 self-start border border-[#f4f0e7]/60 px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:bg-[#f4f0e7] hover:text-[#c8102e] lg:self-auto"
          >
            Request a quote <MoveUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </div>
      </section>

      <section className="bg-[#102334] py-8 text-[#f4f0e7]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 sm:flex-row sm:items-center sm:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => navigateTo('/')}
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-[#b6c0c7] transition-colors hover:text-[#e0b974]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All activities
          </button>
          <button
            type="button"
            onClick={() => navigateTo(`/services/${nextService.slug}`)}
            className="group flex items-center gap-3 text-right text-xs uppercase tracking-[0.15em] text-[#b6c0c7] transition-colors hover:text-[#e0b974]"
          >
            Next activity: {nextService.shortTitle}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </main>
  );
}