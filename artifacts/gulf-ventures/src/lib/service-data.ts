import type { LucideIcon } from 'lucide-react';
import {
  Boxes,
  Construction,
  FlaskConical,
  HardHat,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import serviceEquipment from '@assets/generated_images/service-heavy-equipment-reference-inspired.jpg';
import serviceGas from '@assets/generated_images/service-industrial-gas.jpg';
import serviceTrading from '@assets/generated_images/service-material-trading.jpg';
import serviceManpower from '@assets/generated_images/service-manpower.jpg';
import serviceShutdown from '@assets/generated_images/service-shutdown.jpg';
import serviceSafety from '@assets/generated_images/service-safety.jpg';

export type ServiceDetail = {
  slug: string;
  number: string;
  label: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  lead: string;
  description: string;
  image: string;
  icon: LucideIcon;
  stats: { value: string; label: string }[];
  capabilities: string[];
  sectors: string[];
  process: { step: string; title: string; copy: string }[];
};

export const services: ServiceDetail[] = [
  {
    slug: 'heavy-equipment-rental',
    number: '01',
    label: 'Heavy Equipment Rental',
    shortTitle: 'Equipment Rental',
    eyebrow: 'Lift. Move. Deliver.',
    title: 'The right machine for the critical lift.',
    lead: 'Keep your project moving with dependable heavy equipment, prepared for the realities of Saudi industrial sites.',
    description:
      'Eastern Alliance Company provides practical access to cranes, boom lifts, forklifts, generators, and specialist machinery. We help project teams plan the equipment mix, coordinate delivery, and stay ready through changing site conditions.',
    image: serviceEquipment,
    icon: Construction,
    stats: [
      { value: '01', label: 'Equipment planning' },
      { value: '24/7', label: 'Operational support' },
      { value: 'KSA', label: 'Site-ready logistics' },
    ],
    capabilities: [
      'Mobile and rough-terrain cranes',
      'Boom lifts and access platforms',
      'Forklifts and material handling',
      'Generators and supporting equipment',
    ],
    sectors: ['Oil & gas', 'Construction', 'Power & utilities', 'Industrial maintenance'],
    process: [
      { step: '01', title: 'Define the lift', copy: 'We review load, reach, ground conditions, access, and the operating window.' },
      { step: '02', title: 'Build the fleet', copy: 'The equipment plan is matched to the workfront, crew, and delivery sequence.' },
      { step: '03', title: 'Stay operational', copy: 'Site coordination and responsive support keep the machine productive.' },
    ],
  },
  {
    slug: 'industrial-gas-supply',
    number: '02',
    label: 'Industrial Gas Supply',
    shortTitle: 'Industrial Gas',
    eyebrow: 'Pure supply. No surprises.',
    title: 'Industrial gases, delivered with confidence.',
    lead: 'A dependable gas supply for fabrication, testing, maintenance, and process operations across the Kingdom.',
    description:
      'From everyday cylinders to planned site replenishment, our gas supply service is organized around continuity. We coordinate argon, nitrogen, oxygen, and specialty gas requirements with clear communication from request to delivery.',
    image: serviceGas,
    icon: FlaskConical,
    stats: [
      { value: '04+', label: 'Core gas families' },
      { value: 'KSA', label: 'Delivery coverage' },
      { value: 'ON', label: 'Planned replenishment' },
    ],
    capabilities: [
      'Argon, nitrogen, and oxygen',
      'Specialty and process gases',
      'Cylinder supply and exchange',
      'Scheduled project deliveries',
    ],
    sectors: ['Welding & fabrication', 'Petrochemical', 'Healthcare support', 'Plant maintenance'],
    process: [
      { step: '01', title: 'Map consumption', copy: 'We establish gas type, volume, pack size, delivery point, and timing.' },
      { step: '02', title: 'Secure supply', copy: 'Your order is organized against the project schedule, not just the next delivery.' },
      { step: '03', title: 'Replenish on cue', copy: 'Planned drops and clear updates help crews avoid an empty cylinder.' },
    ],
  },
  {
    slug: 'material-trading',
    number: '03',
    label: 'Material Trading',
    shortTitle: 'Material Trading',
    eyebrow: 'Source with certainty.',
    title: 'Materials that keep industry moving.',
    lead: 'Industrial materials and steel products sourced with the discipline your drawings, deadlines, and site teams demand.',
    description:
      'Eastern Alliance Company connects project teams with construction supplies, steel products, and industrial materials through a responsive trading service. We focus on clear specifications, practical sourcing, and dependable movement to site.',
    image: serviceTrading,
    icon: Boxes,
    stats: [
      { value: '01', label: 'Commercial contact' },
      { value: 'SPEC', label: 'Specification-led' },
      { value: 'SITE', label: 'Delivery minded' },
    ],
    capabilities: [
      'Steel and structural products',
      'Construction and industrial supplies',
      'Specification-based sourcing',
      'Project and site deliveries',
    ],
    sectors: ['Civil works', 'Fabrication', 'Infrastructure', 'Energy projects'],
    process: [
      { step: '01', title: 'Read the requirement', copy: 'We turn drawings, lists, and site notes into a clear sourcing brief.' },
      { step: '02', title: 'Source the fit', copy: 'Available materials are checked against the project’s specification and timing.' },
      { step: '03', title: 'Move it forward', copy: 'Commercial clarity and delivery coordination help protect the workfront.' },
    ],
  },
  {
    slug: 'manpower-supply',
    number: '04',
    label: 'Manpower Supply',
    shortTitle: 'Manpower Supply',
    eyebrow: 'Capability on the ground.',
    title: 'Skilled people for critical operations.',
    lead: 'Build the workforce your workfront needs with experienced technical teams and safety-led manpower solutions.',
    description:
      'Our manpower supply service supports oil and gas, construction, and industrial operations with practical workforce planning. We help clients access the right mix of technical capability and site discipline for the duration of the work.',
    image: serviceManpower,
    icon: HardHat,
    stats: [
      { value: 'SKILL', label: 'Role-matched teams' },
      { value: 'SITE', label: 'Field ready' },
      { value: 'KSA', label: 'Local coordination' },
    ],
    capabilities: [
      'Technical and skilled trades',
      'General industrial workforce',
      'Project-based crew planning',
      'Site and HSE coordination',
    ],
    sectors: ['Oil & gas', 'Shutdowns', 'Construction', 'Industrial operations'],
    process: [
      { step: '01', title: 'Define the crew', copy: 'We clarify the trade mix, headcount, shift pattern, and site requirements.' },
      { step: '02', title: 'Match capability', copy: 'Candidate profiles are aligned to the role, environment, and expected output.' },
      { step: '03', title: 'Support the shift', copy: 'We stay close to deployment so the workforce remains useful in the field.' },
    ],
  },
  {
    slug: 'shutdown-support',
    number: '05',
    label: 'Shutdown Support',
    shortTitle: 'Shutdown Support',
    eyebrow: 'Every hour has a consequence.',
    title: 'Turnaround support without compromise.',
    lead: 'Make the maintenance window count with coordinated crews, equipment, materials, and site support for shutdown work.',
    description:
      'Shutdowns demand more than extra hands. Eastern Alliance Company helps bring the moving parts together: workforce, equipment, materials, and safety essentials, coordinated around the schedule and the workfront.',
    image: serviceShutdown,
    icon: Wrench,
    stats: [
      { value: 'T−0', label: 'Schedule focused' },
      { value: '360°', label: 'Support coverage' },
      { value: 'HSE', label: 'Worksite aware' },
    ],
    capabilities: [
      'Turnaround manpower support',
      'Equipment and access solutions',
      'Materials and consumables',
      'Safety and site readiness',
    ],
    sectors: ['Refineries', 'Petrochemical plants', 'Power generation', 'Process facilities'],
    process: [
      { step: '01', title: 'Plan the window', copy: 'We align resources to the shutdown milestones, access plan, and work packs.' },
      { step: '02', title: 'Mobilize cleanly', copy: 'People, equipment, and materials arrive with the sequence—not against it.' },
      { step: '03', title: 'Close the gap', copy: 'Responsive coordination helps teams resolve the practical issues that cost hours.' },
    ],
  },
  {
    slug: 'safety-materials',
    number: '06',
    label: 'Safety Materials',
    shortTitle: 'Safety Materials',
    eyebrow: 'Protection is part of production.',
    title: 'Safety equipment for every worksite.',
    lead: 'Equip your teams with practical PPE and safety materials selected for demanding industrial environments.',
    description:
      'From head protection to high-visibility workwear and site essentials, our safety materials service helps project leaders keep the right protection available where work happens. We support planned requirements and urgent site needs.',
    image: serviceSafety,
    icon: ShieldCheck,
    stats: [
      { value: 'PPE', label: 'Worksite essentials' },
      { value: 'SITE', label: 'Practical selection' },
      { value: 'KSA', label: 'Responsive supply' },
    ],
    capabilities: [
      'Personal protective equipment',
      'High-visibility workwear',
      'Site safety accessories',
      'Planned and urgent supply',
    ],
    sectors: ['Construction', 'Energy', 'Warehousing', 'Industrial maintenance'],
    process: [
      { step: '01', title: 'Understand the risk', copy: 'We start with the work environment, team, task, and site safety requirements.' },
      { step: '02', title: 'Specify the kit', copy: 'The supply list is built around usable protection and practical availability.' },
      { step: '03', title: 'Keep it close', copy: 'Coordinated supply helps teams replace, replenish, and stay equipped.' },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}