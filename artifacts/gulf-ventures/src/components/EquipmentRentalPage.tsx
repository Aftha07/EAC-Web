import { motion } from 'framer-motion';
import { ArrowUpRight, Boxes, Construction, Truck, Wrench, Zap } from 'lucide-react';
import mobileCrane from '@assets/generated_images/equipment-mobile-crane.jpg';
import boomLift from '@assets/generated_images/equipment-boom-lift.jpg';
import scissorLift from '@assets/generated_images/equipment-scissor-lift.jpg';
import forklift from '@assets/generated_images/equipment-forklift.jpg';
import telehandler from '@assets/generated_images/equipment-telehandler.jpg';
import generator from '@assets/generated_images/equipment-generator.jpg';
import airCompressor from '@assets/generated_images/equipment-air-compressor.jpg';
import weldingMachine from '@assets/generated_images/equipment-welding-machine.jpg';
import lightTower from '@assets/generated_images/equipment-light-tower.jpg';
import heavyEquipment from '@assets/generated_images/service-heavy-equipment-reference-inspired.jpg';
import { navigateTo, scrollToSection } from '@/lib/navigation';

type EquipmentItem = {
  name: string;
  detail: string;
  image: string;
};

type EquipmentGroup = {
  number: string;
  label: string;
  description: string;
  icon: typeof Construction;
  items: EquipmentItem[];
};

const equipmentGroups: EquipmentGroup[] = [
  {
    number: '01',
    label: 'Heavy lifting equipment',
    description: 'Built for critical lifts, demanding access, and complex workfronts.',
    icon: Construction,
    items: [
      { name: 'Mobile Cranes', detail: 'Multiple capacities and configurations', image: mobileCrane },
      { name: 'Crawler Cranes', detail: 'Stable lifting for demanding ground conditions', image: mobileCrane },
      { name: 'Rough Terrain Cranes', detail: 'Mobile lifting across active sites', image: mobileCrane },
      { name: 'Flatbed Trailers & Low Beds', detail: 'Equipment mobilization and heavy transport', image: heavyEquipment },
    ],
  },
  {
    number: '02',
    label: 'Earthmoving equipment',
    description: 'Reliable machines for excavation, grading, loading, and site preparation.',
    icon: Boxes,
    items: [
      { name: 'Excavators', detail: 'Digging, trenching, and material handling', image: heavyEquipment },
      { name: 'Wheel Loaders', detail: 'High-output loading and stockpile movement', image: heavyEquipment },
      { name: 'Backhoe Loaders', detail: 'Versatile excavation and utility work', image: heavyEquipment },
      { name: 'Skid Steers & Bobcats', detail: 'Compact power for tight workfronts', image: heavyEquipment },
      { name: 'Dozers', detail: 'Pushing, spreading, and site preparation', image: heavyEquipment },
      { name: 'Graders & Rollers', detail: 'Precise grading and ground compaction', image: heavyEquipment },
    ],
  },
  {
    number: '03',
    label: 'Power & light equipment',
    description: 'Site-ready power, welding, air, and lighting equipment for continuous work.',
    icon: Zap,
    items: [
      { name: 'Power Generators', detail: 'Reliable temporary and standby power', image: generator },
      { name: 'Welding Machines', detail: 'Arc, MIG, and TIG welding equipment', image: weldingMachine },
      { name: 'Air Compressors', detail: 'Portable and stationary compressed air', image: airCompressor },
      { name: 'Light Towers', detail: 'Mobile lighting for extended work hours', image: lightTower },
      { name: 'Boom Lifts', detail: 'Articulating and telescopic access', image: boomLift },
      { name: 'Scissor Lifts', detail: 'Electric and diesel elevated platforms', image: scissorLift },
    ],
  },
  {
    number: '04',
    label: 'Material handling & access',
    description: 'Practical handling and elevated access for warehouses, plants, and construction sites.',
    icon: Wrench,
    items: [
      { name: 'Forklifts', detail: 'Material handling up to heavy-duty capacities', image: forklift },
      { name: 'Telehandlers', detail: 'Multi-purpose reach and placement', image: telehandler },
      { name: 'Rough Terrain Forklifts', detail: 'Handling across uneven outdoor sites', image: telehandler },
      { name: 'Manlifts', detail: 'Safe access for elevated work', image: boomLift },
    ],
  },
  {
    number: '05',
    label: 'Transportation equipment',
    description: 'Movement support for people, materials, equipment, and project logistics.',
    icon: Truck,
    items: [
      { name: 'Dump Trucks', detail: 'Bulk material movement and site support', image: heavyEquipment },
      { name: 'Pickups & Dyna Trucks', detail: 'Flexible daily project transport', image: heavyEquipment },
      { name: 'Buses', detail: 'Workforce and site transportation', image: heavyEquipment },
      { name: 'Trailers', detail: 'Equipment and material delivery support', image: heavyEquipment },
    ],
  },
];

function requestAvailability() {
  if (window.location.pathname !== '/') {
    navigateTo('/');
    window.setTimeout(() => scrollToSection('contact'), 120);
    return;
  }

  scrollToSection('contact');
}

export function EquipmentRentalPage() {
  return (
    <main className="bg-[#f7f5f0] text-[#102334]">
      <section className="relative isolate overflow-hidden bg-[#071323] text-white">
        <div className="absolute inset-0">
          <img
            src={heavyEquipment}
            alt="Eastern Alliance Company equipment rental fleet"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,13,26,.95)_0%,rgba(4,17,34,.78)_42%,rgba(4,15,29,.25)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071323] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[42rem] max-w-7xl items-end px-5 pb-16 pt-40 sm:px-8 sm:pb-24 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f2b2bd]">
              <span className="h-px w-10 bg-[#c8102e]" />
              Equipment Rental · 01
            </div>
            <h1 className="service-display text-6xl font-bold uppercase leading-[0.86] tracking-tight sm:text-8xl">
              A fleet ready for the work.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              Reliable, well-maintained equipment for lifting, earthmoving, access, power, and transportation across Saudi Arabia.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#102334]/10 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12">
          <div>
            <div className="service-mono mb-4 text-[10px] uppercase tracking-[0.16em] text-[#c8102e]">Our promise</div>
            <h2 className="service-display max-w-md text-5xl font-bold uppercase leading-[0.9] sm:text-6xl">
              The right machine for the critical lift.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-[#344b59] sm:text-xl">
            From heavy lifting and earthmoving to temporary power and site access, our rental fleet is organized around the realities of active industrial work. Tell us what the workfront needs and we will help plan the right equipment mix.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-5 border-b border-[#102334]/15 pb-7 sm:flex-row sm:items-end">
            <div>
              <div className="service-mono mb-3 text-[10px] uppercase tracking-[0.16em] text-[#c8102e]">Available equipment</div>
              <h2 className="service-display text-5xl font-bold uppercase leading-none sm:text-7xl">Built for the workfront.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#60717a]">
              Explore the equipment categories available for project delivery, site support, and industrial operations.
            </p>
          </div>

          <div className="space-y-20">
            {equipmentGroups.map((group, groupIndex) => {
              const Icon = group.icon;

              return (
                <motion.section
                  key={group.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-7 flex items-start gap-4 border-b border-[#102334]/15 pb-5">
                    <span className="service-mono pt-1 text-[10px] text-[#c8102e]">{group.number}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-[#c8102e]" />
                        <h3 className="service-display text-3xl font-semibold uppercase sm:text-4xl">{group.label}</h3>
                      </div>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#60717a]">{group.description}</p>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {group.items.map((item, itemIndex) => (
                      <motion.article
                        key={item.name}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.45, delay: itemIndex * 0.05 }}
                        className="group overflow-hidden border border-[#102334]/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                      >
                        <div className="relative aspect-[1.25] overflow-hidden bg-[#102334]">
                          <img
                            src={item.image}
                            alt={`${item.name} available from Eastern Alliance Company`}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#102334]/70 via-transparent to-transparent" />
                          <span className="service-mono absolute left-4 top-4 bg-white/90 px-2 py-1 text-[10px] text-[#102334]">
                            {String(groupIndex + 1).padStart(2, '0')}.{String(itemIndex + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="flex min-h-[8.5rem] items-start justify-between gap-3 p-5">
                          <div>
                            <h4 className="service-display text-2xl font-semibold uppercase leading-none">{item.name}</h4>
                            <p className="mt-2 text-sm leading-6 text-[#60717a]">{item.detail}</p>
                          </div>
                          <span className="mt-1 h-2 w-2 shrink-0 bg-[#c8102e]" />
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-[#102334]/10 bg-[#102334] py-12 text-white sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8 lg:px-12">
          <div>
            <div className="service-mono mb-3 text-[10px] uppercase tracking-[0.16em] text-[#e0b974]">Equipment availability</div>
            <h2 className="service-display text-4xl font-bold uppercase leading-none sm:text-5xl">Ready for your workfront.</h2>
          </div>
          <button
            type="button"
            onClick={requestAvailability}
            className="inline-flex items-center gap-3 self-start bg-[#c8102e] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#a60d26] sm:self-auto"
          >
            Check availability <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  );
}