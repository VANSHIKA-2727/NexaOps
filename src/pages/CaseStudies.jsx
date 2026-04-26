import { useState } from 'react';
import { Link } from 'react-router-dom';
import CaseCard from '../components/CaseCard';
import PageHeader from '../components/PageHeader';
import { useInView } from '../hooks/useInView';

const caseStudiesData = [
  {
    industry: 'Manufacturing',
    title: 'Global Automotive Supplier Optimization',
    result: '32% Cost Reduction',
    summary: 'Streamlined procurement across 40+ suppliers. Established tiered vendor strategy and negotiated long-term agreements.',
  },
  {
    industry: 'FMCG',
    title: 'Distribution Network Redesign',
    result: '25% Logistics Savings',
    summary: 'Optimized warehouse locations and transportation modes. Improved delivery speed while reducing operational costs.',
  },
  {
    industry: 'Pharmaceutical',
    title: 'Supply Chain Compliance Program',
    result: '100% Audit Pass',
    summary: 'Implemented regulatory compliance framework and supplier quality program. Zero non-conformances in external audits.',
  },
  {
    industry: 'Retail',
    title: 'Inventory Optimization Initiative',
    result: '18% Working Capital Released',
    summary: 'Deployed demand-driven inventory model across 200+ SKUs. Improved in-stock rates by 8% while reducing holding costs.',
  },
  {
    industry: 'Manufacturing',
    title: 'Supplier Development Program',
    result: '40% Quality Improvement',
    summary: 'Partnered with top 20 suppliers on Six Sigma projects. Reduced defect rates and improved on-time delivery to 99.2%.',
  },
  {
    industry: 'Pharma',
    title: 'Procurement Digital Transformation',
    result: '35% Process Efficiency Gain',
    summary: 'Automated procurement workflows and sourcing. Reduced cycle time from 45 to 25 days for routine purchases.',
  },
];

const filters = ['All', 'Manufacturing', 'FMCG', 'Pharma', 'Retail'];

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [casesRef, casesInView] = useInView();
  const [methodRef, methodInView] = useInView();

  const filteredCases = activeFilter === 'All'
    ? caseStudiesData
    : caseStudiesData.filter(c => c.industry.includes(activeFilter));

  return (
    <main>
      <PageHeader
        title="Success Stories"
        subtitle="Real results from enterprises transforming their operations with NexaOps."
        breadcrumb="Case Studies"
      />

      <section style={{ background: 'var(--bg-section)', borderBottom: '1px solid var(--bdr)', padding: '16px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '7px 20px',
                  borderRadius: '999px',
                  border: '1.5px solid',
                  fontSize: '0.83rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: activeFilter === filter ? 'var(--ac)' : 'transparent',
                  color: activeFilter === filter ? '#ffffff' : 'var(--tx-muted)',
                  borderColor: activeFilter === filter ? 'var(--ac)' : 'var(--bdr-strong)',
                  boxShadow: activeFilter === filter ? 'var(--sh-blue)' : 'none',
                }}
                onMouseEnter={e => { if (activeFilter !== filter) { e.currentTarget.style.borderColor = 'var(--ac)'; e.currentTarget.style.color = 'var(--ac)'; } }}
                onMouseLeave={e => { if (activeFilter !== filter) { e.currentTarget.style.borderColor = 'var(--bdr-strong)'; e.currentTarget.style.color = 'var(--tx-muted)'; } }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={casesRef} className="py-12 theme-surface-muted" style={{ borderBottom: '1px solid var(--bdr)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCases.map((caseStudy, idx) => (
              <CaseCard
                key={idx}
                industry={caseStudy.industry}
                title={caseStudy.title}
                result={caseStudy.result}
                summary={caseStudy.summary}
                isVisible={casesInView}
                delay={idx * 100}
              />
            ))}
          </div>
          <div style={{ textAlign: 'center', padding: '32px 0 0' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.18rem', fontWeight: 700, color: 'var(--tx-primary)', marginBottom: '10px' }}>
              Want results like these?
            </p>
            <Link to="/contact">
              <button className="btn btn-primary">Start a Conversation →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Methodology Strip */}
      <section ref={methodRef} className="theme-surface border-y theme-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold theme-text-strong mb-8 text-center">
            Our Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                name: 'Assess',
                description: 'Deep-dive diagnostics of your current state, challenges, and opportunities.',
              },
              {
                step: '02',
                name: 'Design',
                description: 'Co-create future-state solutions aligned with your strategic objectives.',
              },
              {
                step: '03',
                name: 'Implement',
                description: 'Execute change initiatives with embedded capabilities and knowledge transfer.',
              },
              {
                step: '04',
                name: 'Measure',
                description: 'Track adoption and results with continuous optimization and support.',
              },
            ].map((phase, idx) => (
              <div
                key={idx}
                className={`opacity-0-init text-center ${methodInView ? 'animate-fadeInUp' : ''}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <p className="font-display text-4xl font-bold text-accent-500 mb-2">
                  {phase.step}
                </p>
                <h3 className="font-display text-lg font-bold theme-text-strong mb-2">
                  {phase.name}
                </h3>
                <p className="font-body theme-text-secondary text-sm">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
