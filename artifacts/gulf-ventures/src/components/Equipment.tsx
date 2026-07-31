import { motion } from 'framer-motion';
import { Construction, TrendingUp, Forklift, Zap, Wind, Wrench, Lightbulb, Boxes, Radio } from 'lucide-react';

const equipment = [
  {
    icon: Construction,
    title: 'Mobile Cranes',
    spec: 'Various capacities and configurations',
  },
  {
    icon: TrendingUp,
    title: 'Boom Lifts',
    spec: 'Articulating and telescopic models',
  },
  {
    icon: Boxes,
    title: 'Scissor Lifts',
    spec: 'Electric and diesel options',
  },
  {
    icon: Forklift,
    title: 'Forklifts',
    spec: 'Up to 10-ton capacity',
  },
  {
    icon: Radio,
    title: 'Telehandlers',
    spec: 'Multi-purpose material handlers',
  },
  {
    icon: Zap,
    title: 'Generators',
    spec: 'From 20 kVA to 500+ kVA',
  },
  {
    icon: Wind,
    title: 'Air Compressors',
    spec: 'Portable and stationary units',
  },
  {
    icon: Wrench,
    title: 'Welding Machines',
    spec: 'Arc, MIG, and TIG welders',
  },
  {
    icon: Lightbulb,
    title: 'Light Towers',
    spec: 'Mobile and trailer-mounted',
  },
];

export function Equipment() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Equipment Fleet
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern, well-maintained equipment ready for deployment
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-background border-2 border-border p-6 group hover:border-primary transition-colors"
              data-testid={`equipment-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.spec}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
