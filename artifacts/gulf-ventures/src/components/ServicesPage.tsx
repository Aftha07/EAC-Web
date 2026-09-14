import { motion } from 'framer-motion';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import { services } from '@/lib/service-data';
import { navigateTo } from '@/lib/navigation';

function openService(slug: string) {
  navigateTo(`/services/${slug}`);
}

export function ServicesPage() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#f4f2ed] py-24 text-[#102334] sm:py-32">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(16,35,52,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,35,52,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute right-0 top-0 h-80 w-56 bg-[#c8102e]/20 [clip-path:polygon(100%_0,100%_100%,0_0)]" />
      <div className="absolute bottom-0 left-0 h-64 w-40 bg-[#102334]/5 [clip-path:polygon(0_100%,100%_100%,0_0)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="mb-14 flex flex-col justify-between gap-8 border-b border-[#102334]/20 pb-10 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#c8102e]">
              <span className="h-px w-10 bg-[#c8102e]" />
              Eastern Alliance Company
            </div>
            <h2 className="max-w-3xl text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
              Our <span className="text-[#c8102e]">services</span>
            </h2>
          </div>
          <p className="max-w-md border-l border-[#102334]/30 pl-5 text-sm leading-7 text-[#52636c]">
            Integrated industrial support for projects that demand dependable people, equipment, materials, and execution.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              className="group flex flex-col overflow-hidden border border-[#102334]/15 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#c8102e]/80 hover:shadow-[0_22px_45px_rgba(16,35,52,.18)]"
            >
              <div className="relative aspect-[1.45] overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.label}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.65 }}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102334] via-[#102334]/15 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-3">
                  <span className="bg-[#c8102e] px-2 py-1 text-[10px] font-bold tracking-[0.18em] text-white">
                    {service.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                    EAC capability
                  </span>
                </div>
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                    {service.eyebrow}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors group-hover:border-[#c8102e] group-hover:bg-[#c8102e]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="max-w-xs text-2xl font-bold uppercase leading-[0.95] tracking-tight text-[#102334]">
                  {service.shortTitle}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-[#52636c]">{service.lead}</p>
                <button
                  type="button"
                  onClick={() => openService(service.slug)}
                  className="mt-7 flex w-fit items-center gap-3 border-t border-[#102334]/15 pt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#c8102e] transition-colors hover:text-[#102334]"
                >
                  Explore service
                  <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
