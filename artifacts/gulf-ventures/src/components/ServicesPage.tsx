import { motion } from 'framer-motion';
import { services } from '@/lib/service-data';

export function ServicesPage() {
  return (
    <section id="services" className="min-h-screen bg-[#f7f5f0] py-36 text-[#102334] sm:py-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-12 flex flex-col justify-between gap-6 border-b border-[#102334]/15 pb-8 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#c8102e]">
              <span className="h-px w-8 bg-[#c8102e]" />
              Eastern Alliance Company
            </div>
            <h1 className="service-display max-w-3xl text-6xl font-bold uppercase leading-[0.88] tracking-tight sm:text-8xl">
              Our services
            </h1>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#60717a]">
            A clear overview of the capabilities supporting industrial work across Saudi Arabia.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="overflow-hidden border border-[#102334]/10 bg-white shadow-sm"
            >
              <div className="relative aspect-[1.35] overflow-hidden bg-[#102334]">
                <img
                  src={service.image}
                  alt={service.label}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102334]/75 via-transparent to-transparent" />
                <span className="service-mono absolute left-4 top-4 bg-white/90 px-2 py-1 text-[10px] text-[#102334]">
                  {service.number}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h2 className="service-display text-3xl font-semibold uppercase leading-none">
                  {service.shortTitle}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#60717a]">{service.lead}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}