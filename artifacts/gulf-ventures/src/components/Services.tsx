import { motion } from 'framer-motion';
import { Construction, FlaskConical, Package, HardHat, Wrench, ShieldCheck } from 'lucide-react';
import serviceEquipment from '@assets/gulf-ventures/service-equipment.jpg';
import serviceGas from '@assets/gulf-ventures/service-gas.jpg';
import serviceTrading from '@assets/gulf-ventures/service-trading.jpg';
import serviceManpower from '@assets/gulf-ventures/service-manpower.jpg';
import serviceShutdown from '@assets/gulf-ventures/service-shutdown.jpg';
import serviceSafety from '@assets/gulf-ventures/service-safety.jpg';

const services = [
  {
    icon: Construction,
    title: 'Heavy Equipment Rental',
    description: 'Mobile cranes, boom lifts, forklifts, and specialized machinery for industrial operations.',
    image: serviceEquipment,
  },
  {
    icon: FlaskConical,
    title: 'Industrial Gas Supply',
    description: 'Comprehensive gas solutions including argon, nitrogen, oxygen, and specialty gases.',
    image: serviceGas,
  },
  {
    icon: Package,
    title: 'Material Trading',
    description: 'Industrial materials, steel products, and construction supplies for large-scale projects.',
    image: serviceTrading,
  },
  {
    icon: HardHat,
    title: 'Manpower Supply',
    description: 'Skilled technical workforce and labor solutions for oil & gas and industrial sectors.',
    image: serviceManpower,
  },
  {
    icon: Wrench,
    title: 'Shutdown Support',
    description: 'Comprehensive plant shutdown and turnaround maintenance services.',
    image: serviceShutdown,
  },
  {
    icon: ShieldCheck,
    title: 'Safety Materials',
    description: 'Complete range of PPE and safety equipment for industrial environments.',
    image: serviceSafety,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive industrial solutions tailored for the energy sector
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-card border-2 border-border hover:border-primary transition-all"
              data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-14 h-14 bg-primary flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
