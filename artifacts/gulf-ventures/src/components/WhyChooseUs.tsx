import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Shield, DollarSign, Zap, Clock, Headphones, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: 'Reliable Equipment',
    description: 'Well-maintained, modern fleet ready for immediate deployment',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Skilled professionals with deep industry expertise',
  },
  {
    icon: Award,
    title: 'Quality Service',
    description: 'Consistent excellence in every project we undertake',
  },
  {
    icon: Shield,
    title: 'Safety Commitment',
    description: 'Uncompromising safety standards and protocols',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Cost-effective solutions without compromising quality',
  },
  {
    icon: Zap,
    title: 'Fast Response',
    description: 'Quick mobilization and deployment capabilities',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Meeting deadlines and project schedules consistently',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock technical and operational assistance',
  },
  {
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
    description: 'Building long-term partnerships through trust and results',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Why Choose Eastern Alliance Company
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for industrial excellence
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-card border-2 border-border p-6 group hover:border-primary transition-colors"
              data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
