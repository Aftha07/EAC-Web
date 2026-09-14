import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Boxes, Construction, Truck, Wrench, Zap } from 'lucide-react';
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
import mobileCranes from '@assets/gulf-ventures/MC.png';
import crawlerCranes from '@assets/gulf-ventures/CC.png';
import roughTerrainCranes from '@assets/gulf-ventures/RT.png';
import flatbedTrailers from '@assets/gulf-ventures/FB.png';
import excavators from '@assets/gulf-ventures/EXC.png';
import wheelLoaders from '@assets/gulf-ventures/Ex.png';
import backhoeLoaders from '@assets/gulf-ventures/BH.png';
import skidSteers from '@assets/gulf-ventures/bob.png';
import dozers from '@assets/gulf-ventures/DZ.png';
import gradersRollers from '@assets/gulf-ventures/RL.png';
import roughTerrainForklifts from '@assets/gulf-ventures/RTB.png';
import dumpTrucks from '@assets/gulf-ventures/DT.png';
import pickupsDynaTrucks from '@assets/gulf-ventures/PK.png';
import buses from '@assets/gulf-ventures/bus.png';
import trailers from '@assets/gulf-ventures/TL.png';
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
      { name: 'Mobile Cranes', detail: 'Multiple capacities and configurations', image: mobileCranes },
      { name: 'Crawler Cranes', detail: 'Stable lifting for demanding ground conditions', image: crawlerCranes },
      { name: 'Rough Terrain Cranes', detail: 'Mobile lifting across active sites', image: roughTerrainCranes },
      { name: 'Flatbed Trailers & Low Beds', detail: 'Equipment mobilization and heavy transport', image: flatbedTrailers },
    ],
  },
  {
    number: '02',
    label: 'Earthmoving equipment',
    description: 'Reliable machines for excavation, grading, loading, and site preparation.',
    icon: Boxes,
    items: [
      { name: 'Excavators', detail: 'Digging, trenching, and material handling', image: excavators },
      { name: 'Wheel Loaders', detail: 'High-output loading and stockpile movement', image: wheelLoaders },
      { name: 'Backhoe Loaders', detail: 'Versatile excavation and utility work', image: backhoeLoaders },
      { name: 'Skid Steers & Bobcats', detail: 'Compact power for tight workfronts', image: skidSteers },
      { name: 'Dozers', detail: 'Pushing, spreading, and site preparation', image: dozers },
      { name: 'Graders & Rollers', detail: 'Precise grading and ground compaction', image: gradersRollers },
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
      { name: 'Rough Terrain Forklifts', detail: 'Handling across uneven outdoor sites', image: roughTerrainForklifts },
      { name: 'Manlifts', detail: 'Safe access for elevated work', image: boomLift },
    ],
  },
  {
    number: '05',
    label: 'Transportation equipment',
    description: 'Movement support for people, materials, equipment, and project logistics.',
    icon: Truck,
    items: [
      { name: 'Dump Trucks', detail: 'Bulk material movement and site support', image: dumpTrucks },
      { name: 'Pickups & Dyna Trucks', detail: 'Flexible daily project transport', image: pickupsDynaTrucks },
      { name: 'Buses', detail: 'Workforce and site transportation', image: buses },
      { name: 'Trailers', detail: 'Equipment and material delivery support', image: trailers },
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

function returnToServices() {
  if (window.location.pathname !== '/') {
    navigateTo('/');
    window.setTimeout(() => scrollToSection('services'), 120);
    return;
  }

  scrollToSection('services');
}

export function EquipmentRentalPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 120);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-[#102334] text-white">
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

        <div className="relative mx-auto flex min-h-[42rem] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24 lg:px-12">
          <button
            type="button"
            onClick={returnToServices}
            aria-label="Return to all services"
            title="Return to all services"
            style={isScrolled ? undefined : { top: '8.5rem' }}
            className={`group z-40 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/75 transition-all hover:text-white ${
              isScrolled
                ? 'fixed left-5 top-28 h-10 w-10 justify-center bg-[#102334]/85 sm:left-8 lg:left-12'
                : 'absolute left-5 sm:left-8 lg:left-12'
            }`}
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5 group-hover:text-[#c8102e]" />
            <span className={`transition-all group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#f2b2bd] group-hover:to-[#c8102e] group-hover:bg-clip-text group-hover:text-transparent ${isScrolled ? 'sr-only' : ''}`}>
              View all services
            </span>
          </button>
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

      <section className="border-b border-white/15 bg-[#102334] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12">
          <div>
            <div className="service-mono mb-4 text-[10px] uppercase tracking-[0.16em] text-[#c8102e]">Our promise</div>
            <h2 className="service-display max-w-md text-5xl font-bold uppercase leading-[0.9] text-white sm:text-6xl">
              The right machine for the critical lift.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
            From heavy lifting and earthmoving to temporary power and site access, our rental fleet is organized around the realities of active industrial work. Tell us what the workfront needs and we will help plan the right equipment mix.
          </p>
        </div>
      </section>

      <section className="bg-[#102334] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-5 border-b border-white/15 pb-7 sm:flex-row sm:items-end">
            <div>
              <div className="service-mono mb-3 text-[10px] uppercase tracking-[0.16em] text-[#c8102e]">Available equipment</div>
              <h2 className="service-display text-5xl font-bold uppercase leading-none text-white sm:text-7xl">Built for the workfront.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/60">
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
                  <div className="mb-7 flex items-start gap-4 border-b border-white/15 pb-5">
                    <span className="service-mono pt-1 text-[10px] text-[#c8102e]">{group.number}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-[#c8102e]" />
                        <h3 className="service-display text-3xl font-semibold uppercase text-white sm:text-4xl">{group.label}</h3>
                      </div>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">{group.description}</p>
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
                        className="group overflow-hidden border border-white/20 bg-[#102334] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c8102e] hover:shadow-[0_18px_35px_rgba(0,0,0,.28)]"
                      >
                        <div className="relative aspect-[1.25] overflow-hidden bg-[#102334]">
                          <img
                            src={item.image}
                            alt={`${item.name} available from Eastern Alliance Company`}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1722]/85 via-transparent to-transparent" />
                          <span className="service-mono absolute left-4 top-4 bg-[#c8102e] px-2 py-1 text-[10px] text-white">
                            {String(groupIndex + 1).padStart(2, '0')}.{String(itemIndex + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="flex min-h-[8.5rem] items-start justify-between gap-3 p-5">
                          <div>
                            <h4 className="service-display text-2xl font-semibold uppercase leading-none text-white">{item.name}</h4>
                            <p className="mt-2 text-sm leading-6 text-white/60">{item.detail}</p>
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