import { useState } from 'react';
import { Link } from 'react-router-dom';

const engagements = [
  { project: 'Supply Chain Audit — Acme Corp', service: 'Supply Chain Management', status: 'In Progress', date: 'Mar 15, 2025' },
  { project: 'Vendor Optimization — TechForce', service: 'Vendor Development', status: 'In Progress', date: 'Feb 01, 2025' },
  { project: 'Procurement Strategy — Global Industries', service: 'Procurement Strategy', status: 'Completed', date: 'Dec 10, 2024' },
  { project: 'Six Sigma Initiative — Manufacturing Plus', service: 'Process Excellence', status: 'Scheduled', date: 'May 01, 2025' },
  { project: 'ESG Assessment — Retail Solutions', service: 'ESG & Sustainability', status: 'In Progress', date: 'Mar 20, 2025' },
];

const statusStyle = {
  'In Progress': { bg: 'rgba(29,111,164,0.1)', color: '#1D6FA4' },
  Completed: { bg: 'rgba(29,111,164,0.12)', color: '#155d8a' },
  Scheduled: { bg: 'rgba(11,31,58,0.08)', color: '#5A6B7A' },
};

function ESGCalculator() {
  const [inputs, setInputs] = useState({ energy: 5000, trips: 200, diversity: 50, recycling: 60 });
  const [result, setResult] = useState(null);

  const update = (key, value) => setInputs((previous) => ({ ...previous, [key]: Number(value) }));

  const calculate = () => {
    const energyScore = Math.max(0, 100 - inputs.energy / 100);
    const tripScore = Math.max(0, 100 - inputs.trips / 3);
    const total = Math.round(energyScore * 0.3 + tripScore * 0.2 + inputs.diversity * 0.25 + inputs.recycling * 0.25);
    const rating = total >= 70 ? 'Good' : total >= 40 ? 'Fair' : 'Needs Work';
    const recommendations = [];

    if (energyScore < 60) recommendations.push('Switch to renewable energy sources and audit high-consumption assets.');
    if (tripScore < 60) recommendations.push('Consolidate shipments and optimise delivery routes to reduce trip count.');
    if (inputs.diversity < 50) recommendations.push('Expand supplier diversity program — target 60%+ diverse spend.');
    if (inputs.recycling < 50) recommendations.push('Establish formal waste-diversion targets with your logistics partners.');

    setResult({ total, rating, recs: recommendations.slice(0, 3) });
  };

  const sliders = [
    { key: 'energy', label: 'Monthly Energy Consumption', unit: 'kWh', min: 0, max: 20000, step: 500, value: inputs.energy },
    { key: 'trips', label: 'Logistics Trips / Month', unit: 'trips', min: 0, max: 1000, step: 10, value: inputs.trips },
    { key: 'diversity', label: 'Supplier Diversity Score', unit: '/100', min: 0, max: 100, step: 5, value: inputs.diversity },
    { key: 'recycling', label: 'Waste Recycling Rate', unit: '%', min: 0, max: 100, step: 5, value: inputs.recycling },
  ];

  return (
    <div>
      <p style={{ fontSize: '0.875rem', color: 'var(--tx-muted)', marginBottom: '32px', lineHeight: 1.65 }}>
        Adjust the sliders to reflect your operations. Your ESG score updates instantly and provides actionable recommendations.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginBottom: '28px' }}>
        {sliders.map((slider) => (
          <div key={slider.key}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--tx-body)' }}>{slider.label}</label>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ac)' }}>{slider.value} {slider.unit}</span>
            </div>
            <input
              type="range"
              min={slider.min}
              max={slider.max}
              step={slider.step}
              value={slider.value}
              onChange={(event) => update(slider.key, event.target.value)}
              style={{ width: '100%', accentColor: 'var(--ac)' }}
            />
          </div>
        ))}
      </div>

      <button onClick={calculate} className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
        Calculate ESG Score
      </button>

      {result && (
        <div style={{ marginTop: '28px', padding: '28px', background: 'var(--ac-tint)', border: '1px solid var(--ac-border)', borderRadius: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '3.2rem', fontWeight: 800, color: 'var(--ac)', lineHeight: 1 }}>{result.total}</p>
              <p style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--tx-muted)', marginTop: '4px' }}>ESG Score</p>
            </div>
            <div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.3rem', fontWeight: 700, color: 'var(--tx-primary)', marginBottom: '4px' }}>{result.rating}</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--tx-muted)' }}>Out of 100 — based on your inputs</p>
            </div>
          </div>
          {result.recs.length > 0 && (
            <>
              <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--tx-muted)', marginBottom: '12px' }}>
                Recommendations
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {result.recs.map((recommendation) => (
                  <li key={recommendation} style={{ fontSize: '0.855rem', color: 'var(--tx-body)', paddingLeft: '16px', borderLeft: '2px solid var(--ac)', lineHeight: 1.6 }}>
                    {recommendation}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const [tab, setTab] = useState('overview');

  const statCards = [
    { label: 'Active Projects', value: '3', icon: 'AP' },
    { label: 'Pending Reports', value: '1', icon: 'PR' },
    { label: 'ESG Score', value: '74', icon: 'ESG' },
    { label: 'Next Meeting', value: 'Apr 28', icon: 'MTG' },
  ];

  const tabs = [
    { key: 'overview', label: 'Engagements' },
    { key: 'esg', label: 'ESG Calculator' },
    { key: 'actions', label: 'Quick Actions' },
  ];

  const actions = [
    { label: 'Book a Consultation', sub: 'Speak with a supply chain expert', path: '/contact', cta: 'Schedule Now' },
    { label: 'Browse Services', sub: 'Explore our full capability set', path: '/services', cta: 'View Services' },
    { label: 'Read Case Studies', sub: "See results we've delivered", path: '/case-studies', cta: 'View Stories' },
  ];

  return (
    <main style={{ background: 'var(--bg-page)', minHeight: '100vh', paddingTop: '64px' }}>
      <div style={{ background: 'var(--bg-dark)', padding: '32px', paddingTop: '40px', borderBottom: '1px solid rgba(242,240,236,0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ac)', marginBottom: '6px' }}>Client Portal</p>
          <h1 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '2rem', fontWeight: 800, color: 'var(--tx-light)', marginBottom: '4px' }}>Welcome back, Rahul S.</h1>
          <p style={{ color: 'var(--tx-light-dim)', fontSize: '0.9rem' }}>Here&apos;s a snapshot of your active engagements and performance metrics.</p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {statCards.map((card) => (
            <div key={card.label} style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)', borderRadius: '10px', padding: '20px 22px' }}>
              <div style={{ width: '34px', height: '34px', background: 'var(--ac-tint)', border: '1px solid var(--ac-border)', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.62rem', fontWeight: 800, color: 'var(--ac)', letterSpacing: '0.03em', marginBottom: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                {card.icon}
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--tx-muted)', marginBottom: '4px' }}>{card.label}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.8rem', fontWeight: 800, color: 'var(--tx-primary)', lineHeight: 1 }}>{card.value}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '4px', background: 'var(--bg-alt)', borderRadius: '8px', padding: '4px', marginBottom: '28px', width: 'fit-content' }}>
          {tabs.map((item) => (
            <button
              key={item.key}
              onClick={() => setTab(item.key)}
              style={{
                padding: '8px 18px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
                background: tab === item.key ? 'var(--bg-card)' : 'transparent',
                color: tab === item.key ? 'var(--tx-primary)' : 'var(--tx-muted)',
                boxShadow: tab === item.key ? 'var(--sh-sm)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {tab === 'overview' && (
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--bdr)' }}>
              <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--tx-primary)' }}>Active Engagements</h2>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-alt)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--tx-muted)' }}>
                    <th style={{ padding: '12px 24px', textAlign: 'left', fontWeight: 700 }}>Project</th>
                    <th style={{ padding: '12px 24px', textAlign: 'left', fontWeight: 700 }}>Service</th>
                    <th style={{ padding: '12px 24px', textAlign: 'left', fontWeight: 700 }}>Status</th>
                    <th style={{ padding: '12px 24px', textAlign: 'left', fontWeight: 700 }}>Started</th>
                  </tr>
                </thead>
                <tbody>
                  {engagements.map((engagement) => (
                    <tr key={engagement.project} style={{ borderBottom: '1px solid var(--bdr)', fontSize: '0.875rem' }}>
                      <td style={{ padding: '16px 24px', color: 'var(--tx-primary)', fontWeight: 500 }}>{engagement.project}</td>
                      <td style={{ padding: '16px 24px', color: 'var(--tx-muted)' }}>{engagement.service}</td>
                      <td style={{ padding: '16px 24px' }}>
                        <span style={{ background: statusStyle[engagement.status].bg, color: statusStyle[engagement.status].color, padding: '3px 12px', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 600 }}>
                          {engagement.status}
                        </span>
                      </td>
                      <td style={{ padding: '16px 24px', color: 'var(--tx-muted)' }}>{engagement.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === 'esg' && (
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)', borderRadius: '10px', padding: '28px 32px' }}>
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: 'var(--tx-primary)', marginBottom: '4px' }}>ESG Performance Estimator</h2>
            <ESGCalculator />
          </div>
        )}

        {tab === 'actions' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {actions.map((action) => (
              <div key={action.label} style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)', borderRadius: '10px', padding: '24px' }}>
                <div style={{ width: '32px', height: '3px', background: 'var(--ac)', borderRadius: '2px', marginBottom: '16px' }} />
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--tx-primary)', marginBottom: '8px' }}>{action.label}</h3>
                <p style={{ fontSize: '0.845rem', color: 'var(--tx-muted)', marginBottom: '20px', lineHeight: 1.6 }}>{action.sub}</p>
                <Link to={action.path}>
                  <button className="btn btn-outline" style={{ fontSize: '0.82rem', padding: '7px 16px' }}>{action.cta} →</button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
