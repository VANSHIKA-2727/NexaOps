import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { useInView } from '../hooks/useInView';

/* Realistic Unsplash images — no API key needed */
const IMGS = {
  SCM: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format&fit=crop',
  VD:  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop',
  PPS: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
  SIX: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
  LOG: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format&fit=crop',
  INV: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&auto=format&fit=crop',
  ESG: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80&auto=format&fit=crop',
};

const servicesData = [
  {
    name: 'Supply Chain Management',
    description: 'Comprehensive optimisation of your end-to-end supply chain, from sourcing to delivery. We enhance visibility, reduce complexity, and build resilience into your operations.',
    deliverables: ['Supply Chain Audit & Assessment', 'Network Design Optimisation', 'Performance Dashboard Setup'],
    abbr: 'SCM', metrics: ['End-to-End Visibility', 'Risk Reduction', 'Cost Optimization'], img: IMGS.SCM,
  },
  {
    name: 'Vendor Development',
    description: 'Strategic vendor partnerships that drive quality, innovation, and cost efficiency. We help you build a world-class supplier ecosystem aligned with your business goals.',
    deliverables: ['Supplier Segmentation & Analysis', 'Partnership Strategy Framework', 'Performance Metrics & Monitoring'],
    abbr: 'VD', metrics: ['Supplier Segmentation', 'Quality Assurance', 'Long-term Partnerships'], img: IMGS.VD,
  },
  {
    name: 'Procurement & Purchase Strategy',
    description: 'Data-driven procurement strategies tailored to your industry. We unlock savings while maintaining quality and building strategic supplier relationships.',
    deliverables: ['Spend Analysis & Visibility', 'Category Strategy Development', 'RFx Management & Negotiation'],
    abbr: 'PPS', metrics: ['Spend Analytics', 'Category Management', 'Negotiation Support'], img: IMGS.PPS,
  },
  {
    name: 'Six Sigma & Process Excellence',
    description: 'Eliminate waste, improve quality, and boost profitability through structured process improvement using proven methodologies.',
    deliverables: ['Process Mapping & Analysis', 'DMAIC Project Implementation', 'Team Training & Certification'],
    abbr: '6σ', metrics: ['DMAIC Framework', 'Defect Elimination', 'Process Control'], img: IMGS.SIX,
  },
  {
    name: 'Logistics & Distribution',
    description: 'Optimised logistics networks that balance speed, cost, and customer service. We design distribution strategies that scale with your growth.',
    deliverables: ['Network Optimisation Study', 'Transportation Mode Analysis', 'Warehouse Location Strategy'],
    abbr: 'LOG', metrics: ['Network Optimization', 'Mode Selection', 'Last-Mile Delivery'], img: IMGS.LOG,
  },
  {
    name: 'Inventory Management',
    description: 'Smart inventory practices that free up working capital while ensuring product availability, balancing carrying costs with service level requirements.',
    deliverables: ['Inventory Optimisation Model', 'Safety Stock Analysis', 'Demand Forecasting Setup'],
    abbr: 'INV', metrics: ['Demand Forecasting', 'Safety Stock', 'Working Capital'], img: IMGS.INV,
  },
  {
    name: 'ESG & Sustainable Procurement',
    description: 'Integrate environmental and social responsibility into your supply chain without compromising performance. Build a sustainable competitive advantage.',
    deliverables: ['ESG Risk Assessment', 'Supplier Sustainability Program', 'Impact Measurement Framework'],
    abbr: 'ESG', metrics: ['Carbon Footprint', 'Supplier Audits', 'ESG Reporting'], img: IMGS.ESG,
  },
];

const industrySolutions = [
  { industry: 'Manufacturing', abbr: 'MFG', description: 'Lean manufacturing, supplier quality programs, and production flow optimisation for OEMs and Tier-1 suppliers.' },
  { industry: 'FMCG & Retail', abbr: 'FMCG', description: 'Demand-driven supply chains, last-mile distribution, and vendor consolidation for consumer goods companies.' },
  { industry: 'Pharmaceutical', abbr: 'RX', description: 'GMP-compliant procurement, cold chain logistics, and regulatory audit readiness for life sciences firms.' },
  { industry: 'Automotive', abbr: 'AUTO', description: 'JIT supply chain, multi-tier supplier management, and cost reduction programs for auto manufacturers.' },
  { industry: 'Infrastructure', abbr: 'INFRA', description: 'Capex procurement strategy, contractor development, and project logistics for large infrastructure projects.' },
  { industry: 'Chemicals & Energy', abbr: 'CHEM', description: 'Bulk procurement, safety-compliant logistics, and ESG-driven supplier programs for process industries.' },
];

export default function Services() {
  const [servicesRef, servicesInView] = useInView();
  const [solutionsRef, solutionsInView] = useInView();

  return (
    <main>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive procurement and supply chain solutions tailored to your strategic objectives."
        breadcrumb="Services"
      />

      <div ref={servicesRef} className="theme-surface" style={{ borderBottom: '1px solid var(--bdr)' }}>
        {servicesData.map((svc, index) => (
          <div key={svc.abbr}>
            <section style={{ padding: '52px 0' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}
                  className="svc-grid">
                  {/* TEXT */}
                  <div
                    className={`opacity-0-init ${index % 2 === 1 ? 'svc-order-2' : ''} ${servicesInView ? 'animate-fadeInLeft' : ''}`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--ac-tint)', border: '1px solid var(--ac-border)', borderRadius: '6px', padding: '3px 10px', marginBottom: '14px' }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ac)' }}>{svc.abbr}</span>
                    </div>
                    <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 900, color: 'var(--tx-primary)', marginBottom: '14px', lineHeight: 1.12, letterSpacing: '-0.02em' }}>
                      {svc.name}
                    </h2>
                    <p style={{ fontSize: '1rem', lineHeight: 1.72, color: 'var(--tx-body)', marginBottom: '22px' }}>
                      {svc.description}
                    </p>
                    <p style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ac)', marginBottom: '12px' }}>Key Deliverables</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                      {svc.deliverables.map((item) => (
                        <li key={item} style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: 'var(--tx-body)', alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--ac)', marginTop: '2px', flexShrink: 0, fontSize: '1rem' }}>✦</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.9rem', color: 'var(--ac)', textDecoration: 'none', transition: 'gap 0.2s ease' }}
                      onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                      onMouseLeave={e => e.currentTarget.style.gap = '6px'}>
                      Get Started →
                    </Link>
                  </div>

                  {/* IMAGE */}
                  <div
                    className={`opacity-0-init ${index % 2 === 1 ? 'svc-order-1' : ''} ${servicesInView ? 'animate-fadeInRight' : ''}`}
                    style={{ animationDelay: `${index * 80 + 100}ms` }}
                  >
                    <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(8,23,46,0.18)', border: '1px solid var(--bdr)' }}>
                      {/* accent bar */}
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, var(--ac), var(--ac-light))', zIndex: 2 }} />
                      <img
                        src={svc.img}
                        alt={svc.name}
                        loading="lazy"
                        style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                      />
                      {/* overlay badge */}
                      <div style={{ position: 'absolute', bottom: '14px', left: '14px', background: 'rgba(8,23,46,0.82)', backdropFilter: 'blur(12px)', border: '1px solid rgba(77,166,232,0.25)', borderRadius: '8px', padding: '8px 14px', zIndex: 2, display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {svc.metrics.map((m) => (
                          <span key={m} style={{ fontSize: '0.7rem', color: 'var(--ac-light)', fontWeight: 600, letterSpacing: '0.04em' }}>{m}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {index < servicesData.length - 1 && (
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
                <hr style={{ border: 'none', borderTop: '1px solid var(--bdr)' }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Industry Solutions */}
      <section ref={solutionsRef} className="theme-surface-muted" style={{ padding: '52px 0', borderBottom: '1px solid var(--bdr)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto 36px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ac)', marginBottom: '8px' }}>Industry Solutions</p>
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: 'var(--tx-primary)', marginBottom: '10px', lineHeight: 1.12, letterSpacing: '-0.02em' }}>
              Sector expertise grounded in operational reality
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--tx-body)', lineHeight: 1.7 }}>Every engagement is adapted to the regulatory, supplier, and logistics realities of the industries we serve.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            {industrySolutions.map((sol, index) => (
              <div
                key={sol.industry}
                className={`industry-card opacity-0-init ${solutionsInView ? 'animate-fadeInUp' : ''}`}
                style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)', borderRadius: '12px', padding: '24px', transition: 'box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease', animationDelay: `${index * 70}ms` }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--ac-tint), var(--ac-border))', border: '1px solid var(--ac-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 800, color: 'var(--ac)', letterSpacing: '0.05em', marginBottom: '14px' }}>
                  {sol.abbr}
                </div>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--tx-primary)', marginBottom: '8px' }}>{sol.industry}</h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--tx-body)' }}>{sol.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ textAlign: 'center', padding: '36px 0' }}>
        <p style={{ color: 'var(--tx-muted)', marginBottom: '14px', fontSize: '0.9rem' }}>Not sure which service fits your need?</p>
        <Link to="/contact"><button className="btn btn-primary">Talk to an Expert →</button></Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .svc-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .svc-order-1 { order: 1 !important; }
          .svc-order-2 { order: 2 !important; }
        }
      `}</style>
    </main>
  );
}
