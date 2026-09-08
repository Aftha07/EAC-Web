import { ArrowRight, Compass, Route, ShieldCheck } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { navigateTo, scrollToSection } from '@/lib/navigation';
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
    if (window.location.pathname !== '/services') {
      navigateTo('/services');
      window.setTimeout(() => scrollToSection(`service-${slug}`), 120);
      return;
    }

    scrollToSection(`service-${slug}`);
  };

  return (
    <section id="services" className="bg-[#f4f2ed] py-24 text-[#102334] md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={reveal}
          className="mb-14 flex flex-col justify-between gap-8 border-b border-[#102334]/15 pb-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8102e]">
              <span className="h-px w-10 bg-[#c8102e]" />
              Our services
            </div>
            <h2 className="service-display max-w-3xl text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl">
              Capability, <span className="text-[#c8102e]">connected.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#60717a] lg:pb-1">
            Six practical activities. One accountable partner. We bring the equipment,
            materials, people, and discipline that keep industrial work moving.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-12">
          <motion.button
            type="button"
            onClick={() => openService(featured.slug)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reveal}
            className="group relative min-h-[29rem] overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8102e] lg:col-span-7"
            data-testid="service-card-heavy-equipment-rental"
          >
            <img
              src={featured.image}
              alt={`${featured.label} at an industrial site`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071522]/95 via-[#102334]/30 to-transparent" />
            <div className="absolute left-0 top-0 h-full w-1 bg-[#c8102e] transition-all duration-500 group-hover:w-2" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.17em] text-[#e0b974]">
                <span>{featured.number} / 06</span>
                <span className="h-px w-12 bg-[#e0b974]/60" />
                Featured activity
              </div>
              <h3 className="service-display max-w-xl text-4xl font-bold uppercase leading-[0.9] sm:text-6xl">
                {featured.title}
              </h3>
              <div className="mt-7 flex items-center gap-3 border-t border-white/25 pt-5 text-xs font-bold uppercase tracking-[0.14em] text-white">
                View service
                <ArrowRight className="h-4 w-4 text-[#e0b974] transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.button>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5">
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
                  className="group relative min-h-[13.5rem] overflow-hidden border border-[#102334]/12 bg-white text-left shadow-[0_8px_28px_rgba(16,35,52,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(16,35,52,0.1)]"
                  data-testid={`service-card-${service.slug}`}
                >
                  <img src={service.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-[#102334]/85 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col justify-between p-5">
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c8102e] transition-colors group-hover:text-[#e0b974]">
                        {service.number}
                      </span>
                      <Icon className="h-5 w-5 text-[#c8102e] transition-colors group-hover:text-[#e0b974]" />
                    </div>
                    <span>
                      <span className="service-display block text-2xl font-semibold uppercase leading-none text-[#102334] transition-colors group-hover:text-white">
                        {service.shortTitle}
                      </span>
                      <span className="mt-3 block text-xs leading-5 text-[#60717a] transition-colors group-hover:text-[#d3d8d8]">
                        View service details
                      </span>
                    </span>
                  </div>
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
          className="mt-20 grid border-y border-[#102334]/15 md:grid-cols-[1.1fr_1fr_1fr_1fr]"
        >
          <div className="border-b border-[#102334]/15 py-7 pr-8 md:border-b-0 md:border-r">
            <div className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#c8102e]">Our operating rhythm</div>
            <div className="service-display mt-3 text-3xl uppercase">From brief to field.</div>
          </div>
          {[
            { icon: Compass, title: 'Scope', copy: 'Understand the workfront and its pressure points.' },
            { icon: Route, title: 'Mobilize', copy: 'Coordinate the right resources around your schedule.' },
            { icon: ShieldCheck, title: 'Deliver', copy: 'Stay accountable until the job is moving.' },
          ].map(({ icon: Icon, title, copy }, index) => (
            <div key={title} className="flex gap-4 border-b border-[#102334]/15 py-7 md:border-b-0 md:border-r md:px-7 last:border-r-0">
              <span className="pt-1 text-[10px] font-bold tracking-[0.12em] text-[#9aa4a7]">0{index + 1}</span>
              <div>
                <Icon className="mb-4 h-5 w-5 text-[#c8102e]" />
                <div className="service-display text-2xl uppercase">{title}</div>
                <p className="mt-2 text-xs leading-5 text-[#60717a]">{copy}</p>
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
          <p className="max-w-md text-sm leading-6 text-[#60717a]">
            Have a workfront to plan? Start with the activity that fits your next milestone.
          </p>
          <button
            type="button"
            onClick={() => openService(featured.slug)}
            className="service-link-line flex items-center gap-3 pb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#102334]"
          >
            Explore all capabilities <ArrowRight className="h-4 w-4 text-[#c8102e]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}