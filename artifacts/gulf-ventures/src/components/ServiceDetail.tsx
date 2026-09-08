import { ArrowLeft, ArrowRight, Check, ChevronRight, MapPin, MoveUpRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { navigateTo, scrollToSection } from '@/lib/navigation';
import type { ServiceDetail as ServiceDetailModel } from '@/lib/service-data';
import { services } from '@/lib/service-data';

type ServiceDetailProps = {
  service: ServiceDetailModel;
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] },
  },
};

function goToQuote() {
  navigateTo('/');
  window.setTimeout(() => scrollToSection('contact'), 120);
}

function goToServices() {
  navigateTo('/');
  window.setTimeout(() => scrollToSection('services'), 120);
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const Icon = service.icon;
  const currentIndex = services.findIndex((item) => item.slug === service.slug);
  const nextService = services[(currentIndex + 1) % services.length];

  return (
    <article
      id={`service-${service.slug}`}
      className="scroll-mt-28 border-t border-[#102334]/10 bg-[#f7f5f0] text-[#102334]"
    >
      <section className="bg-white pb-16 pt-36 sm:pb-24 sm:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[#102334]/15 pb-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-[#c8102e]" />
              <span className="service-mono text-[10px] uppercase tracking-[0.16em] text-[#60717a]">
                Activity {service.number} of 06
              </span>
              <span className="hidden h-px w-10 bg-[#102334]/20 sm:block" />
              <span className="hidden text-xs font-semibold uppercase tracking-[0.12em] text-[#102334] sm:block">
                {service.label}
              </span>
            </div>
            <button
              type="button"
              onClick={goToServices}
              className="group inline-flex items-center gap-2 self-start text-xs font-bold uppercase tracking-[0.14em] text-[#60717a] transition-colors hover:text-[#c8102e] sm:self-auto"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Services overview
            </button>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={reveal}>
              <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#c8102e]">
                <span className="h-px w-8 bg-[#c8102e]" />
                {service.eyebrow}
              </div>
              <h2 className="service-display max-w-xl text-6xl font-bold uppercase leading-[0.9] tracking-tight text-[#102334] sm:text-7xl">
                {service.title}
              </h2>
              <p className="mt-7 max-w-xl text-base leading-7 text-[#60717a] sm:text-lg">{service.lead}</p>
              <button
                type="button"
                onClick={goToQuote}
                className="mt-8 inline-flex items-center gap-3 bg-[#c8102e] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#a60d26]"
              >
                Request this service <MoveUpRight className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65 }}
              className="relative aspect-[1.45] overflow-hidden bg-[#102334]"
            >
              <img
                src={service.image}
                alt={`${service.label} at an industrial site`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102334]/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.13em] text-white sm:bottom-7 sm:left-7">
                <Icon className="h-5 w-5 text-[#e0b974]" />
                {service.label}
              </div>
              <span className="service-mono absolute right-5 top-5 text-[10px] text-white/80 sm:right-7 sm:top-7">
                {service.number} / 06
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={reveal}>
              <div className="service-mono mb-4 text-[10px] uppercase tracking-[0.16em] text-[#c8102e]">What we deliver</div>
              <h3 className="service-display max-w-sm text-5xl font-bold uppercase leading-[0.92] sm:text-6xl">
                Built around the work.
              </h3>
              <div className="mt-8 flex items-center gap-3 border-t border-[#102334]/15 pt-5 text-xs uppercase tracking-[0.12em] text-[#60717a]">
                <MapPin className="h-4 w-4 text-[#c8102e]" />
                Saudi Arabia · Eastern Province
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={reveal}>
              <p className="max-w-3xl text-lg leading-8 text-[#344b59] sm:text-xl">{service.description}</p>
              <div className="mt-9 grid gap-x-8 gap-y-4 border-t border-[#102334]/15 pt-6 sm:grid-cols-2">
                {service.capabilities.map((capability) => (
                  <div key={capability} className="flex items-start gap-3 text-sm font-semibold text-[#102334]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c8102e]" />
                    {capability}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid border-y border-[#102334]/15 sm:grid-cols-3">
            {service.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 border-b border-[#102334]/15 py-6 last:border-0 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0"
              >
                <span className="service-display text-4xl font-bold text-[#c8102e] sm:text-5xl">{stat.value}</span>
                <span className="max-w-[9rem] text-xs uppercase leading-5 tracking-[0.1em] text-[#60717a]">{stat.label}</span>
                <span className="service-mono ml-auto self-start text-[9px] text-[#9aa4a7]">0{index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ebe8e1] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[#102334]/15 pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="service-mono mb-3 text-[10px] uppercase tracking-[0.16em] text-[#c8102e]">Our approach</div>
              <h3 className="service-display text-5xl font-bold uppercase leading-none sm:text-6xl">A clear sequence.</h3>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#60717a]">
              Practical coordination from the first brief through delivery and ongoing support.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {service.process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="min-h-[12.5rem] border border-[#102334]/10 bg-white p-6 shadow-sm sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="service-mono text-[10px] uppercase text-[#c8102e]">Step {item.step}</span>
                  <ChevronRight className="h-4 w-4 text-[#9aa4a7]" />
                </div>
                <h4 className="service-display mt-12 text-3xl font-semibold uppercase">{item.title}</h4>
                <p className="mt-3 text-sm leading-6 text-[#60717a]">{item.copy}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs font-bold uppercase tracking-[0.13em] text-[#102334]">Supporting sectors</span>
            {service.sectors.map((sector) => (
              <span key={sector} className="border border-[#102334]/15 bg-white px-3 py-2 text-xs font-medium text-[#60717a]">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#102334]/10 bg-white py-7">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 sm:flex-row sm:items-center sm:px-8 lg:px-12">
          <button
            type="button"
            onClick={goToServices}
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#60717a] transition-colors hover:text-[#c8102e]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Services overview
          </button>
          <button
            type="button"
            onClick={() => scrollToSection(`service-${nextService.slug}`)}
            className="group inline-flex items-center gap-3 text-right text-xs font-bold uppercase tracking-[0.14em] text-[#60717a] transition-colors hover:text-[#c8102e]"
          >
            Next: {nextService.shortTitle}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </article>
  );
}