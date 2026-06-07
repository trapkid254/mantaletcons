// ═══════════════════════════════════════════════════════
//  MANTELET CONSULTANTS — Shared Data Store
//  All public site content lives here and is managed
//  via the admin portal. Uses localStorage for persistence.
// ═══════════════════════════════════════════════════════

const MANTALET_DATA_KEY = 'mantelet_site_data';

const DEFAULT_DATA = {
  // ── HERO ──────────────────────────────────────────────
  hero: {
    eyebrow: 'RICS Aligned · Est. 2010',
    headline1: 'Professional',
    headline2: 'Quantity Surveying',
    headline3: '& Construction',
    headline4: 'Consultancy',
    subtext: 'Delivering precision cost management, rigorous financial oversight, and project excellence for private and public sector clients across East Africa and beyond.',
    btn1Text: 'View Our Projects',
    btn2Text: 'Contact Us',
    bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&auto=format&fit=crop&q=55',
    bgType: 'image',
    bgSource: 'url'
  },

  // ── STATISTICS ────────────────────────────────────────
  stats: [
    { id: 's1', value: 15, suffix: '+', label: 'Years of Excellence', desc: 'Consistent delivery across commercial, residential & infrastructure' },
    { id: 's2', value: 320, suffix: '+', label: 'Projects Completed', desc: 'From feasibility through to final account settlement' },
    { id: 's3', value: 98, suffix: '%', label: 'Client Satisfaction Rate', desc: 'Independently measured across all project engagements' },
    { id: 's4', value: 12, suffix: '', label: 'Countries Served', desc: 'Active presence across the East African region and beyond' }
  ],

  // ── ABOUT ─────────────────────────────────────────────
  about: {
    tagline: 'About Mantelet',
    heading: 'Trusted Expertise in Quantity Surveying',
    para1: 'Mantelet Consultants is an elite quantity surveying and project management firm committed to delivering outstanding cost management and project advisory services. We combine deep technical expertise with strategic insight to support clients at every stage — from inception to final account.',
    para2: 'Our multidisciplinary team of seasoned quantity surveyors, cost managers, and project administrators understands the complexity of modern construction and infrastructure projects across all sectors.',
    values: [
      'RICS-aligned professional standards and ethics',
      'Independent, transparent cost advice at every project phase',
      'Full lifecycle project consultancy and administration',
      'Proven track record across public and private sectors'
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop&q=70',
    badgeNumber: '15+',
    badgeText: 'Years of Excellence'
  },

  // ── SERVICES ──────────────────────────────────────────
  services: [
    { id: 'sv1', number: '01', name: 'Cost Estimation', desc: 'Accurate, evidence-based estimates from early feasibility through detailed pre-tender, benchmarked against industry standards and current market rates.', icon: 'file-text' },
    { id: 'sv2', number: '02', name: 'Budget Planning', desc: 'Strategic budget development and financial planning frameworks that safeguard your capital investment throughout all construction and development phases.', icon: 'dollar' },
    { id: 'sv3', number: '03', name: 'Tender Documentation', desc: 'Bills of Quantities, specification writing, and comprehensive tender packages ensuring competitive, transparent and legally sound procurement processes.', icon: 'clipboard' },
    { id: 'sv4', number: '04', name: 'Cost Control', desc: 'Rigorous real-time cost monitoring, change management, variation analysis, and financial reporting to keep your project firmly within approved budget.', icon: 'bar-chart' },
    { id: 'sv5', number: '05', name: 'Project Management', desc: 'End-to-end project management with comprehensive programme planning, stakeholder coordination, and quality assurance from mobilisation to practical completion.', icon: 'monitor' },
    { id: 'sv6', number: '06', name: 'Contract Administration', desc: 'Expert JCT/FIDIC/NEC contract administration, claims evaluation, dispute resolution, and final account settlement to safeguard your commercial position.', icon: 'shield' }
  ],

  // ── PROJECTS ──────────────────────────────────────────
  projects: [
    { id: 'p1', name: 'Westlands Plaza Complex', category: 'commercial', location: 'Nairobi, Kenya', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&auto=format&fit=crop&q=60', desc: 'Full quantity surveying and cost management for a 26,000m² mixed-use development comprising Grade A office, retail, and residential units valued at KES 3.2B.', catLabel: 'Mixed-Use Development', featured: true, mediaType: 'image', mediaSource: 'url' },
    { id: 'p2', name: 'Thika Road Corridor', category: 'infrastructure', location: 'Kiambu County, Kenya', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=60', desc: 'Cost management and contract administration for a major road rehabilitation and drainage infrastructure project across 42km.', catLabel: 'Infrastructure', featured: false, mediaType: 'image', mediaSource: 'url' },
    { id: 'p3', name: 'Runda Estate Residences', category: 'residential', location: 'Nairobi, Kenya', image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop&q=60', desc: 'Comprehensive QS for a luxury gated estate of 48 high-specification units, concept budget through final account.', catLabel: 'Luxury Residential', featured: false, mediaType: 'image', mediaSource: 'url' },
    { id: 'p4', name: 'Upper Hill Business Park', category: 'commercial', location: 'Nairobi, Kenya', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60', desc: 'Tender documentation and post-contract management for a 12-storey Grade A commercial tower, KES 1.8B contract value.', catLabel: 'Commercial Office', featured: false, mediaType: 'image', mediaSource: 'url' },
    { id: 'p5', name: 'Coastal Hospital Extension', category: 'commercial', location: 'Mombasa, Kenya', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60', desc: 'Specialist QS for a complex healthcare facility expansion with intricate MEP cost coordination and medical equipment planning.', catLabel: 'Healthcare', featured: false, mediaType: 'image', mediaSource: 'url' },
    { id: 'p6', name: 'Kigali Serena Refurbishment', category: 'commercial', location: 'Kigali, Rwanda', image: 'https://images.unsplash.com/photo-1606836576983-8b458e75221d?w=800&auto=format&fit=crop&q=60', desc: 'Full QS and cost management for a five-star hotel refurbishment across 340 rooms, restaurants, and all public areas.', catLabel: 'Hospitality', featured: false, mediaType: 'image', mediaSource: 'url' }
  ],

  // ── TESTIMONIALS ──────────────────────────────────────
  testimonials: [
    { id: 't1', initials: 'JM', name: 'James Mwangi', role: 'CEO, Apex Properties Ltd · Nairobi', rating: 5, quote: 'Mantelet brought exceptional clarity to a project that had previously suffered from cost overruns. Their precision and proactive cost management saved us significantly and instilled genuine confidence in our board throughout the delivery.' },
    { id: 't2', initials: 'SK', name: 'Dr. Sarah Kamau', role: 'Director, Medstar Healthcare Group', rating: 5, quote: 'Working with Mantelet on our hospital expansion was a genuinely seamless experience. Their technical knowledge of healthcare construction costs is unmatched, and their contract administration kept our contractors fully accountable.' },
    { id: 't3', initials: 'RO', name: 'Robert Ochieng', role: 'MD, Horizon Developments · Kampala', rating: 5, quote: 'The professionalism Mantelet demonstrated is rarely encountered in this market. Their BOQ preparation was meticulous and their engagement during the tender process generated genuinely competitive outcomes for our development.' }
  ],

  // ── CONTACT ───────────────────────────────────────────
  contact: {
    address: 'Spur Mall, Kimbo along Thika Super Highway\nNairobi, Kenya',
    phone1: '+254724411574',
    phone2: '+254724411574',
    email1: 'info@mantelet.co.ke',
    email2: 'projects@mantelet.co.ke',
    hours: 'Monday – Friday: 8:00 AM – 5:30 PM\nSaturday: 9:00 AM – 1:00 PM',
    linkedin: '#',
    facebook: '#',
    instagram: '#',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.2!2d36.79!3d-1.268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f67df%3A0xd3a09e7bfc7ce29d!2sSpur%20Mall%2C%20Kimbo!5e0!3m2!1sen!2ske!4v1609459200000!5m2!1sen!2ske'
  },

  // ── META ──────────────────────────────────────────────
  meta: {
    companyName: 'Mantelet Consultants',
    tagline: 'Precision. Transparency. Excellence.',
    footerDesc: 'Professional quantity surveying and project management delivering precision, transparency, and measurable value across East Africa and beyond.',
    estYear: '2010',
    ratingScore: '4.9',
    ratingCount: '86',
    clients: ['Kenya Airports Authority', 'Safaricom PLC', 'Kenya Power', 'NHBF', 'Radisson Hotels', 'Knight Frank']
  }
};

// ── DATA HELPERS ───────────────────────────────────────
function getData() {
  try {
    const stored = localStorage.getItem(MANTALET_DATA_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Deep merge to pick up any new default keys
      return deepMerge(DEFAULT_DATA, parsed);
    }
  } catch(e) { console.warn('Data parse error, using defaults', e); }
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function saveData(data) {
  try {
    localStorage.setItem(MANTALET_DATA_KEY, JSON.stringify(data));
    return true;
  } catch(e) {
    console.error('Save failed', e);
    return false;
  }
}

function resetData() {
  localStorage.removeItem(MANTALET_DATA_KEY);
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function deepMerge(defaults, overrides) {
  const result = JSON.parse(JSON.stringify(defaults));
  for (const key in overrides) {
    if (overrides[key] !== null && typeof overrides[key] === 'object' && !Array.isArray(overrides[key])) {
      result[key] = deepMerge(result[key] || {}, overrides[key]);
    } else {
      result[key] = overrides[key];
    }
  }
  return result;
}

function generateId(prefix) {
  return prefix + '_' + Date.now() + '_' + Math.random().toString(36).substr(2,6);
}
