import { ArrowDownRight, ArrowRight, Compass, Crosshair, Route, ShieldCheck } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { scrollToSection } from '@/lib/navigation';
import { services } from '@/lib/service-data';

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export function Services() {
  const featured = services[0];
  const supporting = services.slice(1);

  const openService = (slug: string) => {
    scrollToSection(`service-${slug}`);
  };

  return (
    <section id="services" className="relative overflow-hidden bg-[#102334] py-24 text-[#f4f0e7] md:py-36">
      <div className="industrial-noise pointer-events-none absolute inset-0" />
      <div className="industrial-grid pointer-events-none absolute inset-0 opacity-[0.14]" />
      <div className="pointer-events-none absolute -right-40 top-32 h-[28rem] w-[28rem] rounded-full border border-[#d1a964]/20" />
      <div className="pointer-events-none absolute -right-24 top-48 h-[20rem] w-[20rem] rounded-full border border-[#d1a964]/15" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={reveal}
          className="mb-16 flex flex-col justify-between gap-8 border-b border-white/15 pb-10 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="service-mono mb-6 flex items-center gap-3 text-[10px] uppercase text-[#e0b974]">
              <span className="h-px w-10 bg-[#c8102e]" />
              What we put in motion
            </div>
            <h2 className="service-display max-w-3xl text-6xl font-bold uppercase leading-[0.86] tracking-tight text-[#f4f0e7] sm:text-8xl">
              Capability, <span className="text-[#e0b974]">connected.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#b6c0c7] lg:pb-1">
            Six practical activities. One accountable partner. We bring the equipment,
            materials, people, and discipline that keep industrial work moving.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.12fr_.88fr]">
          <motion.button
            type="button"
            onClick={() => openService(featured.slug)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reveal}
            className="group relative min-h-[31rem] overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0b974]"
            data-testid="service-card-heavy-equipment-rental"
          >
            <img
              src={featured.image}
              alt={`${featured.label} at an industrial site`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071522] via-[#102334]/25 to-[#102334]/5" />
            <div className="absolute left-0 top-0 h-full w-1 bg-[#c8102e] transition-all duration-500 group-hover:w-2" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <div className="service-mono mb-5 flex items-center gap-3 text-[10px] uppercase text-[#e0b974]">
                <span>{featured.number} / 06</span>
                <span className="h-px w-12 bg-[#e0b974]/60" />
                Featured activity
              </div>
              <h3 className="service-display max-w-xl text-5xl font-bold uppercase leading-[0.88] sm:text-7xl">
                {featured.title}
              </h3>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/25 pt-5">
                <p className="max-w-sm text-sm leading-6 text-[#d3d8d8]">{featured.lead}</p>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/50 transition-colors duration-300 group-hover:border-[#e0b974] group-hover:bg-[#e0b974] group-hover:text-[#102334]">
                  <ArrowDownRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-[-45deg]" />
                </span>
              </div>
            </div>
          </motion.button>

          <div className="flex flex-col border-t border-white/20">
            {supporting.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.button
                  key={service.slug}
                  type="button"
                  onClick={() => openService(service.slug)}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group flex min-h-[7.9rem] items-center gap-5 border-b border-white/15 px-1 py-5 text-left transition-colors duration-300 hover:bg-white/[0.06] sm:gap-7 sm:px-5"
                  data-testid={`service-card-${service.slug}`}
                >
                  <span className="service-mono w-7 shrink-0 text-[10px] text-[#82919c]">{service.number}</span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-[#e0b974] transition-all duration-300 group-hover:border-[#e0b974] group-hover:bg-[#e0b974] group-hover:text-[#102334]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="service-display block text-3xl font-semibold uppercase leading-none text-[#f4f0e7] transition-colors duration-300 group-hover:text-[#e0b974]">
                      {service.shortTitle}
                    </span>
                    <span className="mt-2 block max-w-md text-xs leading-5 text-[#9eabb3]">{service.lead}</span>
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 -translate-x-2 text-[#82919c] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-[#e0b974] group-hover:opacity-100" />
                </motion.button>
              );
            })}
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-70px' }}
          variants={reveal}
          className="mt-24 grid border-y border-white/15 md:grid-cols-[1.1fr_1fr_1fr_1fr]"
        >
          <div className="border-b border-white/15 py-7 pr-8 md:border-b-0 md:border-r">
            <div className="service-mono text-[10px] uppercase text-[#e0b974]">Our operating rhythm</div>
            <div className="service-display mt-3 text-3xl uppercase">From brief to field.</div>
          </div>
          {[
            { icon: Compass, title: 'Scope', copy: 'Understand the workfront and its pressure points.' },
            { icon: Route, title: 'Mobilize', copy: 'Coordinate the right resources around your schedule.' },
            { icon: ShieldCheck, title: 'Deliver', copy: 'Stay accountable until the job is moving.' },
          ].map(({ icon: Icon, title, copy }, index) => (
            <div key={title} className="flex gap-4 border-b border-white/15 py-7 md:border-b-0 md:border-r md:px-7 last:border-r-0">
              <span className="service-mono pt-1 text-[10px] text-[#82919c]">0{index + 1}</span>
              <div>
                <Icon className="mb-4 h-5 w-5 text-[#c8102e]" />
                <div className="service-display text-2xl uppercase">{title}</div>
                <p className="mt-2 text-xs leading-5 text-[#9eabb3]">{copy}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 pt-10 sm:flex-row sm:items-center"
        >
          <p className="max-w-md text-sm leading-6 text-[#9eabb3]">
            Have a workfront to plan? Start with the activity that fits your next milestone.
          </p>
          <button
            type="button"
              onClick={() => openService(featured.slug)}
            className="service-link-line flex items-center gap-3 pb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#f4f0e7]"
          >
            Explore all capabilities <ArrowRight className="h-4 w-4 text-[#e0b974]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}