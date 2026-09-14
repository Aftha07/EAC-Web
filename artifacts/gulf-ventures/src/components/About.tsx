import { motion } from 'framer-motion';
import { Shield, Award, Target, Users } from 'lucide-react';
import aboutImage from '@assets/gulf-ventures/hero-bg.jpg';

const values = [
  {
    icon: Shield,
    title: 'Safety',
    description: 'Uncompromising standards in every operation.',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Disciplined delivery built around best practice.',
  },
  {
    icon: Target,
    title: 'Integrity',
    description: 'Clear communication and accountable execution.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Reliable support that strengthens your worksite.',
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 text-white md:py-28"
      style={{ backgroundColor: '#101c27' }}
    >
      <img
        src={aboutImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,22,32,.98)_0%,rgba(10,22,32,.88)_42%,rgba(10,22,32,.62)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,22,32,.98)_0%,rgba(10,22,32,.25)_58%,rgba(10,22,32,.85)_100%)]" />
      <div className="absolute left-0 top-0 h-full w-16 bg-white/5 [clip-path:polygon(0_0,100%_0,35%_100%,0_100%)] md:w-28" />
      <div className="absolute bottom-0 right-0 h-2/3 w-24 bg-[#C8102E]/25 [clip-path:polygon(100%_0,100%_100%,0_100%)] md:w-40" />
      <div className="absolute left-0 top-0 h-1 w-32 bg-[#C8102E] md:w-56" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-5 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#C8102E]" style={{ color: '#C8102E' }}>
              About Eastern Alliance Company
            </p>
            <h2
              className="max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: '#ffffff' }}
            >
              Built for the work
              <span className="block text-[#C8102E]" style={{ color: '#C8102E' }}>that keeps industry moving.</span>
            </h2>
          </div>
          <p className="max-w-sm border-l border-white/30 pl-5 text-sm leading-7 text-white/75" style={{ color: 'rgba(255,255,255,.78)' }}>
            A dependable industrial partner for energy, construction, and infrastructure projects across Saudi Arabia.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative min-h-[420px] overflow-hidden border border-white/60 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,.35)]"
          >
            <img
              src={aboutImage}
              alt="Eastern Alliance Company industrial operations"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101c27]/85 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
              <div className="mb-3 h-1 w-14 bg-[#C8102E]" />
              <p className="max-w-md text-lg font-semibold leading-7 text-white" style={{ color: '#ffffff' }}>
                Practical capability. Professional standards. Results your project can rely on.
              </p>
            </div>
          </motion.div>

          <div className="min-w-0 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="grid min-w-0 gap-8 border-b border-white/30 pb-8 sm:grid-cols-2"
            >
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]" style={{ color: '#C8102E' }}>Our mission</p>
                <p className="text-sm leading-7 text-white/75" style={{ color: 'rgba(255,255,255,.78)' }}>
                  To deliver reliable, innovative industrial solutions across Saudi Arabia&apos;s energy sector through disciplined execution and strong partnerships.
                </p>
              </div>
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]" style={{ color: '#C8102E' }}>Our vision</p>
                <p className="text-sm leading-7 text-white/75" style={{ color: 'rgba(255,255,255,.78)' }}>
                  To be the region&apos;s most trusted industrial partner, setting the benchmark for safety, quality, and operational excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="pt-8"
            >
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/70" style={{ color: 'rgba(255,255,255,.75)' }}>What guides us</p>
              <div className="grid grid-cols-2 gap-x-5 gap-y-7">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-3">
                    <value.icon className="mt-1 h-5 w-5 shrink-0 text-[#C8102E]" />
                    <div>
                      <h3 className="mb-1 text-sm font-bold uppercase tracking-wide text-white" style={{ color: '#ffffff' }}>{value.title}</h3>
                      <p className="text-xs leading-5 text-white/65" style={{ color: 'rgba(255,255,255,.7)' }}>{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
