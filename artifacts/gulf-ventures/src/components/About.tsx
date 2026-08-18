import { motion } from 'framer-motion';
import { Shield, Award, Target, Users } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Safety',
    description: 'Uncompromising commitment to safety standards and protocols in every operation.',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Delivering excellence through rigorous quality control and industry best practices.',
  },
  {
    icon: Target,
    title: 'Integrity',
    description: 'Operating with transparency, honesty, and ethical business practices.',
  },
  {
    icon: Users,
    title: 'Customer Satisfaction',
    description: 'Building lasting partnerships through reliable service and results.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            About Eastern Alliance Company
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To deliver reliable, innovative industrial solutions across Saudi Arabia's energy sector, 
              supporting our clients' operational excellence through superior equipment, materials, and services. 
              We are committed to maintaining the highest standards of safety, quality, and professionalism 
              in every project we undertake.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be recognized as the most trusted and reliable industrial partner in the region, 
              known for our unwavering commitment to safety, quality, and customer satisfaction. 
              We aspire to set the industry benchmark for operational excellence and innovation 
              in industrial contracting and support services.
            </p>
          </motion.div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground"
          >
            Our Core Values
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background border-2 border-border p-8 text-center group hover:border-primary transition-colors"
                data-testid={`value-card-${value.title.toLowerCase()}`}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
