import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const industriesData = [
  {
    name: 'Manufacturing',
    description: 'Optimize production supply chains, reduce lead times, and enhance supplier collaboration. We help manufacturers achieve lean operations and build resilient supply networks.',
    services: ['Supply Chain Optimization', 'Vendor Development'],
  },
  {
    name: 'FMCG',
    description: 'Navigate complex distribution networks and rapid demand fluctuations. ProcureEdge enables FMCG companies to balance availability with cost efficiency.',
    services: ['Logistics & Distribution', 'Inventory Management'],
  },
  {
    name: 'Pharmaceutical',
    description: 'Meet regulatory requirements while optimizing costs in highly regulated supply chains. We ensure compliance without sacrificing efficiency or safety.',
    services: ['Procurement Strategy', 'ESG & Compliance'],
  },
  {
    name: 'Retail',
    description: 'Enhance omnichannel supply chains and improve in-stock positions. Our solutions help retailers reduce markdowns while meeting customer expectations.',
    services: ['Inventory Optimization', 'Logistics Strategy'],
  },
  {
    name: 'Automotive',
    description: 'Support lean manufacturing initiatives and manage complex supplier networks. We optimize procurement for this capital-intensive, quality-critical sector.',
    services: ['Supply Chain Management', 'Six Sigma Excellence'],
  },
  {
    name: 'Agribusiness',
    description: 'Address seasonal demand patterns and manage diverse supplier bases. Our solutions enhance value capture across the agriculture supply chain.',
    services: ['Vendor Development', 'Procurement Strategy'],
  },
];

export default function Industries() {
  return (
    <main>
      <PageHeader
        title="Industry Solutions"
        subtitle="Sector-specific expertise addressing your unique operational challenges."
        breadcrumb="Industries"
      />
      <section style={{ padding: '48px 32px', background: 'var(--bg-section)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '18px', marginBottom: '32px' }}>
            {industriesData.map((industry) => (
              <div key={industry.name} style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)', borderRadius: '10px', padding: '28px 24px' }}>
                <div style={{ width: '32px', height: '3px', background: 'var(--ac)', borderRadius: '2px', marginBottom: '16px' }} />
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--tx-primary)', marginBottom: '10px' }}>{industry.name}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--tx-body)', lineHeight: 1.7, marginBottom: '16px' }}>{industry.description}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                  {industry.services.map((service) => (
                    <span key={service} className="theme-chip" style={{ fontSize: '0.72rem' }}>
                      {service}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                  <Link to="/services" className="theme-chip">Services</Link>
                  <Link to="/contact" style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--ac)' }}>
                    Get started →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/contact">
              <button className="btn btn-primary">Discuss Your Industry →</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
