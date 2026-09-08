import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import mobileCrane from '@assets/generated_images/equipment-mobile-crane.jpg';
import boomLift from '@assets/generated_images/equipment-boom-lift.jpg';
import scissorLift from '@assets/generated_images/equipment-scissor-lift.jpg';
import forklift from '@assets/generated_images/equipment-forklift.jpg';
import telehandler from '@assets/generated_images/equipment-telehandler.jpg';
import generator from '@assets/generated_images/equipment-generator.jpg';
import airCompressor from '@assets/generated_images/equipment-air-compressor.jpg';
import weldingMachine from '@assets/generated_images/equipment-welding-machine.jpg';
import lightTower from '@assets/generated_images/equipment-light-tower.jpg';

const equipment = [
  { number: '01', title: 'Mobile Cranes', spec: 'Various capacities and configurations', image: mobileCrane },
  { number: '02', title: 'Boom Lifts', spec: 'Articulating and telescopic models', image: boomLift },
  { number: '03', title: 'Scissor Lifts', spec: 'Electric and diesel options', image: scissorLift },
  { number: '04', title: 'Forklifts', spec: 'Up to 10-ton capacity', image: forklift },
  { number: '05', title: 'Telehandlers', spec: 'Multi-purpose material handlers', image: telehandler },
  { number: '06', title: 'Generators', spec: 'From 20 kVA to 500+ kVA', image: generator },
  { number: '07', title: 'Air Compressors', spec: 'Portable and stationary units', image: airCompressor },
  { number: '08', title: 'Welding Machines', spec: 'Arc, MIG, and TIG welders', image: weldingMachine },
  { number: '09', title: 'Light Towers', spec: 'Mobile and trailer-mounted', image: lightTower },
];

export function Equipment() {
  return (
    <section id="equipment-fleet" className="border-t border-[#102334]/10 bg-[#f7f5f0] py-20 text-[#102334] sm:py-28">
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
              Equipment availability
            </div>
            <h2 className="service-display max-w-3xl text-6xl font-bold uppercase leading-[0.88] tracking-tight sm:text-8xl">
              A fleet ready for the work.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#60717a]">
            Explore the core equipment categories available for project delivery, site support, and industrial operations.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group overflow-hidden border border-[#102334]/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
              data-testid={`equipment-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="relative aspect-[1.35] overflow-hidden bg-[#102334]">
                <img
                  src={item.image}
                  alt={`${item.title} available from Eastern Alliance Company`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102334]/70 via-transparent to-transparent" />
                <span className="service-mono absolute left-4 top-4 bg-white/90 px-2 py-1 text-[10px] text-[#102334]">
                  {item.number}
                </span>
                <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#c8102e] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
                <div>
                  <h3 className="service-display text-3xl font-semibold uppercase leading-none">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#60717a]">{item.spec}</p>
                </div>
                <span className="mt-1 h-2 w-2 shrink-0 bg-[#c8102e]" />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-[#102334]/15 pt-7 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-6 text-[#60717a]">
            Need a specific machine, capacity, or configuration? Tell us about the workfront and we will help plan the right fleet.
          </p>
          <button
            type="button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 self-start bg-[#102334] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#c8102e] sm:self-auto"
          >
            Check availability <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}