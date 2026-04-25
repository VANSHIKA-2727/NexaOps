import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { useInView } from '../hooks/useInView';

const servicesData = [
  {
    name: 'Supply Chain Management',
    description:
      'Comprehensive optimisation of your end-to-end supply chain, from sourcing to delivery. We enhance visibility, reduce complexity, and build resilience into your operations.',
    deliverables: ['Supply Chain Audit & Assessment', 'Network Design Optimisation', 'Performance Dashboard Setup'],
    abbr: 'SCM',
    metrics: ['End-to-End Visibility', 'Risk Reduction', 'Cost Optimization'],
  },
  {
    name: 'Vendor Development',
    description:
      'Strategic vendor partnerships that drive quality, innovation, and cost efficiency. We help you build a world-class supplier ecosystem aligned with your business goals.',
    deliverables: ['Supplier Segmentation & Analysis', 'Partnership Strategy Framework', 'Performance Metrics & Monitoring'],
    abbr: 'VD',
    metrics: ['Supplier Segmentation', 'Quality Assurance', 'Long-term Partnerships'],
  },
  {
    name: 'Procurement & Purchase Strategy',
    description:
      'Data-driven procurement strategies tailored to your industry and business model. We unlock savings while maintaining quality and building strategic supplier relationships.',
    deliverables: ['Spend Analysis & Visibility', 'Category Strategy Development', 'RFx Management & Negotiation'],
    abbr: 'PPS',
    metrics: ['Spend Analytics', 'Category Management', 'Negotiation Support'],
  },
  {
    name: 'Six Sigma & Process Excellence',
    description:
      'Eliminate waste, improve quality, and boost profitability through structured process improvement. Our Six Sigma experts guide you through proven methodologies.',
    deliverables: ['Process Mapping & Analysis', 'DMAIC Project Implementation', 'Team Training & Certification'],
    abbr: '6σ',
    metrics: ['DMAIC Framework', 'Defect Elimination', 'Process Control'],
  },
  {
    name: 'Logistics & Distribution',
    description:
      'Optimised logistics networks that balance speed, cost, and customer service. We design distribution strategies that scale with your growth.',
    deliverables: ['Network Optimisation Study', 'Transportation Mode Analysis', 'Warehouse Location Strategy'],
    abbr: 'LOG',
    metrics: ['Network Optimization', 'Mode Selection', 'Last-Mile Delivery'],
  },
  {
    name: 'Inventory Management',
    description:
      'Smart inventory practices that free up working capital while ensuring product availability. We balance carrying costs with service level requirements.',
    deliverables: ['Inventory Optimisation Model', 'Safety Stock Analysis', 'Demand Forecasting Setup'],
    abbr: 'INV',
    metrics: ['Demand Forecasting', 'Safety Stock', 'Working Capital'],
  },
  {
    name: 'ESG & Sustainable Procurement',
    description:
      'Integrate environmental and social responsibility into your supply chain without compromising performance. Build a sustainable competitive advantage.',
    deliverables: ['ESG Risk Assessment', 'Supplier Sustainability Program', 'Impact Measurement Framework'],
    abbr: 'ESG',
    metrics: ['Carbon Footprint', 'Supplier Audits', 'ESG Reporting'],
  },
];

const industrySolutions = [
  {
    industry: 'Manufacturing',
    abbr: 'MFG',
    description:
      'Lean manufacturing, supplier quality programs, and production flow optimisation for OEMs and Tier-1 suppliers.',
  },
  {
    industry: 'FMCG & Retail',
    abbr: 'FMCG',
    description:
      'Demand-driven supply chains, last-mile distribution, and vendor consolidation for consumer goods companies.',
  },
  {
    industry: 'Pharmaceutical',
    abbr: 'RX',
    description:
      'GMP-compliant procurement, cold chain logistics, and regulatory audit readiness for life sciences firms.',
  },
  {
    industry: 'Automotive',
    abbr: 'AUTO',
    description:
      'JIT supply chain, multi-tier supplier management, and cost reduction programs for auto manufacturers.',
  },
  {
    industry: 'Infrastructure',
    abbr: 'INFRA',
    description:
      'Capex procurement strategy, contractor development, and project logistics for large infrastructure projects.',
  },
  {
    industry: 'Chemicals & Energy',
    abbr: 'CHEM',
    description:
      'Bulk procurement, safety-compliant logistics, and ESG-driven supplier programs for process industries.',
  },
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
        {servicesData.map((service, index) => (
          <div key={service.abbr}>
            <section className="py-16">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                  <div
                    className={`opacity-0-init ${index % 2 === 1 ? 'md:order-2' : ''} ${
                      servicesInView ? 'animate-fadeInLeft' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.24em] text-accent-600 dark:text-accent-300">
                      {service.abbr}
                    </p>
                    <h2 className="mb-4 font-display text-3xl font-bold theme-text-strong">
                      {service.name}
                    </h2>
                    <p className="mb-6 font-body text-lg leading-8 theme-text-secondary">
                      {service.description}
                    </p>
                    <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
                      Key Deliverables
                    </h3>
                    <ul className="mb-6 space-y-3 font-body theme-text-secondary">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="text-accent-500">✦</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="inline-flex items-center gap-2 font-body font-semibold text-accent-600 transition-colors hover:text-[var(--text-primary)]">
                      Learn more
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>

                  <div
                    className={`opacity-0-init ${index % 2 === 1 ? 'md:order-1' : ''} ${
                      servicesInView ? 'animate-fadeInRight' : ''
                    }`}
                    style={{ animationDelay: `${index * 100 + 120}ms` }}
                  >
                    <div
                      style={{
                        background: 'var(--accent-light)',
                        border: '1px solid var(--accent-border)',
                        borderRadius: '12px',
                        height: '320px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--display)',
                          fontSize: '3.5rem',
                          fontWeight: '800',
                          color: 'var(--accent)',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {service.abbr}
                      </div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {service.name}
                      </div>
                      <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
                        {service.metrics?.map((metric) => (
                          <span
                            key={metric}
                            style={{
                              background: 'var(--bg-card)',
                              border: '1px solid var(--bdr)',
                              borderRadius: '999px',
                              padding: '4px 14px',
                              fontSize: '0.78rem',
                              color: 'var(--text-secondary)',
                              fontWeight: '500',
                            }}
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {index < servicesData.length - 1 && (
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <hr className="theme-border" />
              </div>
            )}
          </div>
        ))}
      </div>

      <section ref={solutionsRef} className="theme-surface-muted py-16" style={{ borderBottom: '1px solid var(--bdr)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.24em] text-accent-600 dark:text-accent-300">
              Industry Solutions
            </p>
            <h2 className="mb-4 font-display text-4xl font-bold theme-text-strong">
              Sector expertise grounded in operational reality
            </h2>
            <p className="font-body text-lg theme-text-secondary">
              Every engagement is adapted to the regulatory, supplier, and logistics realities of the industries we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industrySolutions.map((solution, index) => (
              <div
                key={solution.industry}
                className={`industry-card opacity-0-init ${
                  solutionsInView ? 'animate-fadeInUp' : ''
                }`}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--bdr)',
                  borderRadius: '10px',
                  padding: '28px 24px',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                  cursor: 'default',
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'var(--accent-light)',
                    border: '1px solid var(--accent-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    letterSpacing: '0.05em',
                    marginBottom: '16px',
                    fontFamily: 'var(--display)',
                  }}
                >
                  {solution.abbr}
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold theme-text-strong">
                  {solution.industry}
                </h3>
                <p className="font-body leading-7 theme-text-secondary">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ textAlign: 'center', padding: '48px 0', borderTop: '1px solid var(--bdr)' }}>
        <p style={{ color: 'var(--tx-muted)', marginBottom: '16px', fontSize: '0.9rem' }}>
          Not sure which service fits your need?
        </p>
        <Link to="/contact">
          <button className="btn btn-primary">Talk to an Expert →</button>
        </Link>
      </div>
    </main>
  );
}
