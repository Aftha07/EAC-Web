import { motion } from 'framer-motion';

const clients = [
  'Saudi Aramco',
  'Marafiq',
  'Saipem',
  'SABIC',
  'GE Oil & Gas',
  'KAEFER',
  'Seadrill',
  'GAS Arabian Services',
  'Tasnee',
  'Rowan',
  'Nabors',
  'TETRA',
  'Alkhorayef',
  'Sadara',
  'Transocean',
  'Noble',
  'SANAD',
  'Dalma Energy',
  'Baker Hughes',
  'Precision Drilling',
  'Halliburton',
  'Sipchem',
  'Saudi Arabian Railways (SAR)',
  'JGC',
  'SEPCO',
  "Ma'aden",
  'NEOM',
  'Larsen & Toubro',
  'Saline Water Conversion Corporation',
  'Hyundai Engineering',
  'Anabeeb',
  'Samsung Engineering',
];

export function Clients() {
  // Duplicate array for infinite scroll effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Our Clients
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading organizations across Saudi Arabia's energy and industrial sectors
          </p>
        </motion.div>

        <div className="relative">
          {/* First row - scroll left */}
          <div className="overflow-hidden mb-6">
            <div className="flex gap-6 animate-scroll-left">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client}-${index}`}
                  className="flex-shrink-0 bg-card border-2 border-border px-8 py-4 min-w-[280px] text-center"
                  data-testid={index < clients.length ? `client-${client.toLowerCase().replace(/[^a-z0-9]/g, '-')}` : undefined}
                >
                  <span className="text-lg font-bold text-foreground whitespace-nowrap">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - scroll left (same direction, slightly offset) */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-left" style={{ animationDelay: '-30s' }}>
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client}-${index}-2`}
                  className="flex-shrink-0 bg-card border-2 border-border px-8 py-4 min-w-[280px] text-center"
                >
                  <span className="text-lg font-bold text-foreground whitespace-nowrap">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud to serve major clients in oil & gas, petrochemicals, power generation, 
            and infrastructure development across the Kingdom of Saudi Arabia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
