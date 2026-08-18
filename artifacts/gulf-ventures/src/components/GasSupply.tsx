import { motion } from 'framer-motion';
import { FlaskConical, Truck } from 'lucide-react';
import gasCylinders from '@assets/generated_images/gas-cylinders.jpg';
import gasBulkStorage from '@assets/generated_images/gas-bulk-storage.jpg';
import gasDelivery from '@assets/generated_images/gas-delivery.jpg';

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
    <section id="gas-supply" className="py-20 md:py-32 bg-card text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Industrial Gas Supply
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete range of industrial gases and delivery solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 relative overflow-hidden border-2 border-border bg-background shadow-sm">
                <img
                  src={gasCylinders}
                  alt="Color-coded industrial gas cylinders"
                  className="h-72 md:h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-5 pb-5 pt-16">
                  <p className="text-white font-bold text-lg">Certified cylinder supply</p>
                  <p className="text-white/75 text-sm">Reliable gases for every industrial application</p>
                </div>
              </div>
              <div className="relative overflow-hidden border-2 border-border bg-background shadow-sm">
                <img
                  src={gasBulkStorage}
                  alt="Bulk industrial gas storage tank"
                  className="h-40 md:h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/65 px-4 py-3">
                  <p className="text-white font-semibold text-sm">Bulk storage</p>
                </div>
              </div>
              <div className="relative overflow-hidden border-2 border-border bg-background shadow-sm">
                <img
                  src={gasDelivery}
                  alt="Industrial gas delivery truck"
                  className="h-40 md:h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/65 px-4 py-3">
                  <p className="text-white font-semibold text-sm">Site delivery</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-2 border-border bg-background p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <FlaskConical className="w-8 h-8 text-primary" />
                <h3 className="text-2xl md:text-3xl font-bold">Available Gases</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {gases.map((gas, index) => (
                  <motion.div
                    key={gas}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border-l-2 border-primary bg-card pl-4 py-2.5"
                    data-testid={`gas-${gas.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    <span className="font-medium">{gas}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 border-2 border-border bg-background p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <Truck className="w-8 h-8 text-primary" />
                <h3 className="text-2xl md:text-3xl font-bold">Delivery Services</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {deliveryServices.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border-l-2 border-primary bg-card pl-4 py-2.5"
                    data-testid={`delivery-${service.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
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
