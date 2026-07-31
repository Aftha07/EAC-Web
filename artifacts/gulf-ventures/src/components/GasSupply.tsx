import { motion } from 'framer-motion';
import { FlaskConical, Truck } from 'lucide-react';

const gases = [
  'Argon',
  'Nitrogen',
  'Oxygen',
  'Carbon Dioxide (CO₂)',
  'Acetylene',
  'Helium',
  'Hydrogen',
  'Compressed Air',
  'Specialty Calibration Gases',
  'Mixed Shielding Gases',
];

const deliveryServices = [
  'Cylinder Supply',
  'Gas Refilling',
  'Bulk Supply',
  'Cluster Supply',
  'Industrial Projects',
  'Site Delivery',
];

export function GasSupply() {
  return (
    <section className="py-20 md:py-32 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Industrial Gas Supply
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Complete range of industrial gases and delivery solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FlaskConical className="w-8 h-8 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold">Available Gases</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {gases.map((gas, index) => (
                <motion.div
                  key={gas}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border-l-2 border-primary pl-4 py-2"
                  data-testid={`gas-${gas.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  <span className="text-lg font-medium">{gas}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Truck className="w-8 h-8 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold">Delivery Services</h3>
            </div>
            <div className="space-y-4">
              {deliveryServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border-l-2 border-primary pl-4 py-2"
                  data-testid={`delivery-${service.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span className="text-lg font-medium">{service}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-6 border-2 border-primary/50 bg-primary/10"
            >
              <p className="text-white/90 leading-relaxed">
                We provide comprehensive gas supply solutions for oil & gas operations, 
                manufacturing facilities, and industrial projects across Saudi Arabia. 
                All gases meet international quality standards with certified testing and documentation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
