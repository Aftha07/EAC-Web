import { motion } from 'framer-motion';
import { Construction, FlaskConical, Package, HardHat, Wrench, ShieldCheck, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Construction,
    number: '01',
    tag: 'Equipment',
    title: 'Heavy Equipment Rental',
    description: 'Mobile cranes, boom lifts, forklifts, and specialized machinery for industrial operations.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: FlaskConical,
    number: '02',
    tag: 'Gas & Chemicals',
    title: 'Industrial Gas Supply',
    description: 'Comprehensive gas solutions including argon, nitrogen, oxygen, and specialty gases.',
    image: 'https://images.unsplash.com/photo-1581093196277-9f6e9b964f73?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Package,
    number: '03',
    tag: 'Trading',
    title: 'Material Trading',
    description: 'Industrial materials, steel products, and construction supplies for large-scale projects.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: HardHat,
    number: '04',
    tag: 'Workforce',
    title: 'Manpower Supply',
    description: 'Skilled technical workforce and labor solutions for oil & gas and industrial sectors.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Wrench,
    number: '05',
    tag: 'Maintenance',
    title: 'Shutdown Support',
    description: 'Comprehensive plant shutdown and turnaround maintenance services.',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: ShieldCheck,
    number: '06',
    tag: 'Safety',
    title: 'Safety Materials',
    description: 'Complete range of PPE and safety equipment for industrial environments.',
    image: 'https://images.unsplash.com/photo-1583088580709-2eca337fd9d6?auto=format&fit=crop&w=900&q=80',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-36" style={{ background: '#0d0d0d' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-16 md:mb-20"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px bg-[#C8102E]" />
            <span className="text-[#C8102E] uppercase tracking-[0.25em] text-xs font-semibold">
              What We Do
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-black text-white leading-none"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)' }}
            >
              Our <span className="text-[#C8102E]">Services</span>
            </h2>
            <p className="text-white/45 max-w-md text-sm leading-relaxed md:text-right">
              Comprehensive industrial solutions tailored for the energy sector — delivered with precision and reliability.
            </p>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="group relative overflow-hidden cursor-default"
              style={{ height: '420px' }}
              data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Base gradient overlay — always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/15" />

              {/* Hover overlay — darkens top area */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Red bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 h-[3px] bg-[#C8102E] w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{ zIndex: 10 }}
              />

              {/* Top bar: number + icon */}
              <div className="absolute top-5 left-5 right-5 flex items-start justify-between z-10">
                {/* Category tag */}
                <span className="bg-[#C8102E]/90 text-white text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5">
                  {service.tag}
                </span>

                {/* Number badge */}
                <span
                  className="font-black text-white/15 group-hover:text-white/25 transition-colors duration-500 leading-none select-none"
                  style={{ fontSize: '3.5rem', lineHeight: 1 }}
                >
                  {service.number}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                {/* Icon */}
                <div className="mb-3 flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#C8102E] flex items-center justify-center shrink-0">
                    <service.icon className="w-4.5 h-4.5 text-white" style={{ width: '18px', height: '18px' }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold mb-0 leading-tight transition-all duration-400 group-hover:mb-3"
                  style={{ fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)' }}
                >
                  {service.title}
                </h3>

                {/* Description — slides in on hover */}
                <div className="overflow-hidden">
                  <p
                    className="text-white/65 text-sm leading-relaxed max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                  >
                    {service.description}
                  </p>
                </div>

                {/* Arrow link — appears on hover */}
                <div className="flex items-center gap-1.5 mt-0 max-h-0 overflow-hidden group-hover:max-h-10 group-hover:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <span className="text-[#C8102E] text-xs font-semibold uppercase tracking-[0.18em]">
                    Learn More
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C8102E]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-3 border border-white/8"
        >
          {[
            { value: '6', label: 'Core Services' },
            { value: '500+', label: 'Projects Completed' },
            { value: '15+', label: 'Years of Experience' },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`py-7 text-center ${i < 2 ? 'border-r border-white/8' : ''}`}
            >
              <p className="text-[#C8102E] font-black mb-1" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                {item.value}
              </p>
              <p className="text-white/35 text-xs uppercase tracking-[0.2em]">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
