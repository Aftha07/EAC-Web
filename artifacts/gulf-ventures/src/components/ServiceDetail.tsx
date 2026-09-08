import { ArrowUpRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { navigateTo, scrollToSection } from '@/lib/navigation';
import type { ServiceDetail as ServiceDetailModel } from '@/lib/service-data';
import { services } from '@/lib/service-data';

type ServiceDetailProps = {
  service: ServiceDetailModel;
};

function requestQuote() {
  navigateTo('/');
  window.setTimeout(() => scrollToSection('contact'), 120);
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const currentIndex = services.findIndex((item) => item.slug === service.slug);
  const isReversed = currentIndex % 2 === 1;
  const isEquipment = service.slug === 'heavy-equipment-rental';
  const sectionEyebrow = isEquipment ? 'Equipment availability' : `${service.label} availability`;
  const sectionTitle = isEquipment ? 'A fleet ready for the work.' : service.title;

  const imageOrder = isReversed ? 'lg:order-1' : 'lg:order-2';
  const contentOrder = isReversed ? 'lg:order-2' : 'lg:order-1';

  return (
    <article id={service.sectionId} className="scroll-mt-28 border-t border-[#102334]/10 bg-[#f7f5f0] text-[#102334]">
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="mb-12 flex flex-col justify-between gap-6 border-b border-[#102334]/15 pb-8 lg:flex-row lg:items-end"
          >
            <div>
              <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#c8102e]">
                <span className="h-px w-8 bg-[#c8102e]" />
                {sectionEyebrow}
              </div>
              <h2 className="service-display max-w-3xl text-6xl font-bold uppercase leading-[0.88] tracking-tight sm:text-8xl">
                {sectionTitle}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#60717a]">{service.lead}</p>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-3">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className={`group relative overflow-hidden border border-[#102334]/10 bg-[#102334] shadow-sm lg:col-span-2 ${imageOrder}`}
            >
              <div className="relative min-h-[24rem] overflow-hidden sm:min-h-[31rem]">
                <img
                  src={service.image}
                  alt={`${service.label} available from Eastern Alliance Company`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102334]/80 via-transparent to-transparent" />
                <span className="service-mono absolute left-5 top-5 bg-white/90 px-2 py-1 text-[10px] text-[#102334]">
                  {service.number}
                </span>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#e0b974]">{service.label}</div>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/80">{service.description}</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c8102e]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.article>

            <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-1 ${contentOrder}`}>
              {service.capabilities.map((capability, index) => (
                <motion.article
                  key={capability}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group border border-[#102334]/10 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="service-mono text-[10px] text-[#60717a]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-2 w-2 shrink-0 bg-[#c8102e] transition-transform duration-300 group-hover:scale-125" />
                  </div>
                  <h3 className="service-display mt-8 text-2xl font-semibold uppercase leading-none">{capability}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#60717a]">
                    {service.process[index]?.copy ?? service.lead}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-[#102334]/15 pt-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#102334]">
                <Check className="h-4 w-4 text-[#c8102e]" />
                {service.sectors.join(' · ')}
              </div>
              <p className="max-w-xl text-sm leading-6 text-[#60717a]">
                Need a specific requirement, capacity, or configuration? Tell us about the workfront and we will help plan the right solution.
              </p>
            </div>
            <button
              type="button"
              onClick={requestQuote}
              className="inline-flex items-center gap-3 bg-[#102334] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#c8102e]"
            >
              Request a quote <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </article>
  );
}