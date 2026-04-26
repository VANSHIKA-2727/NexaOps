import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThreeBackground from '../components/ThreeBackground';

const engagements = [
  { project: 'Supply Chain Audit — Acme Corp',             service: 'Supply Chain Management', status: 'In Progress', date: 'Mar 15, 2025', progress: 65  },
  { project: 'Vendor Optimization — TechForce',            service: 'Vendor Development',      status: 'In Progress', date: 'Feb 01, 2025', progress: 40  },
  { project: 'Procurement Strategy — Global Industries',   service: 'Procurement Strategy',    status: 'Completed',   date: 'Dec 10, 2024', progress: 100 },
  { project: 'Six Sigma Initiative — Manufacturing Plus',  service: 'Process Excellence',      status: 'Scheduled',   date: 'May 01, 2025', progress: 0   },
  { project: 'ESG Assessment — Retail Solutions',          service: 'ESG & Sustainability',    status: 'In Progress', date: 'Mar 20, 2025', progress: 55  },
];

/* Dual-tone only: all statuses use shades of blue */
const STATUS = {
  'In Progress': { bg: 'rgba(21,101,192,0.12)', color: 'var(--ac)',       border: 'rgba(21,101,192,0.25)' },
  'Completed':   { bg: 'rgba(21,101,192,0.22)', color: 'var(--ac-light)', border: 'rgba(21,101,192,0.4)'  },
  'Scheduled':   { bg: 'rgba(11,31,58,0.18)',   color: 'var(--tx-muted)', border: 'rgba(77,100,140,0.25)' },
};

const STAT_CARDS = [
  { label: 'Active Projects', value: '3',      meta: '+1 this month'      },
  { label: 'Pending Reports', value: '1',      meta: 'Due in 3 days'      },
  { label: 'ESG Score',       value: '74/100', meta: '+6 vs last quarter' },
  { label: 'Next Meeting',    value: 'Apr 28', meta: 'In 2 days'          },
];

const ACTIONS = [
  { num: '01', label: 'Book a Consultation', sub: 'Speak with a supply chain expert — free 30-minute session.',    path: '/contact',      cta: 'Schedule Now'  },
  { num: '02', label: 'Browse Services',     sub: 'Explore our full capability set across 7 service areas.',       path: '/services',     cta: 'View Services' },
  { num: '03', label: 'Read Case Studies',   sub: 'Real results we have delivered across sectors and geographies.', path: '/case-studies', cta: 'View Stories'  },
];

const TABS = [
  { key: 'overview', label: 'Engagements'    },
  { key: 'esg',      label: 'ESG Calculator' },
  { key: 'actions',  label: 'Quick Actions'  },
];

export default function Dashboard() {
  const [tab, setTab] = useState('overview');

  return (
    <main style={{ background: 'var(--bg-page)', minHeight: '100vh', paddingTop: '64px' }}>

      {/* ── HEADER with Three.js ── */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-dark)', borderBottom: '1px solid rgba(77,166,232,0.1)', padding: '40px 32px 36px' }}>
        <ThreeBackground particleCount={55} color="#1565c0" opacity={0.3} speed={0.55} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(77,166,232,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(77,166,232,0.045) 1px, transparent 1px)', backgroundSize: '56px 56px', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <p style={{ fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ac-light)', marginBottom: '8px' }}>Client Portal</p>
            <h1 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: 'var(--tx-light)', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '6px' }}>Welcome back, Rahul S.</h1>
            <p style={{ color: 'var(--tx-light-dim)', fontSize: '0.88rem', lineHeight: 1.6 }}>Snapshot of your active engagements and performance metrics.</p>
          </div>

          {/* Book Consultation — header CTA */}
          <Link to="/contact">
            <button style={{ background: 'var(--ac)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '11px 24px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', letterSpacing: '0.01em', boxShadow: 'var(--sh-blue)', transition: 'transform 0.18s ease, box-shadow 0.18s ease', whiteSpace: 'nowrap' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(21,101,192,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--sh-blue)'; }}>
              Book Free Consultation
            </button>
          </Link>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '28px 32px' }}>

        {/* STAT CARDS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '20px' }}>
          {STAT_CARDS.map((card) => (
            <div key={card.label}
              style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)', borderRadius: '12px', padding: '20px 22px', borderLeft: '3px solid var(--ac)', transition: 'transform 0.18s, box-shadow 0.18s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--sh)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--tx-muted)', marginBottom: '10px' }}>{card.label}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.9rem', fontWeight: 900, color: 'var(--tx-primary)', letterSpacing: '-0.025em', lineHeight: 1, marginBottom: '8px' }}>{card.value}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--ac)', flexShrink: 0 }} />
                <p style={{ fontSize: '0.72rem', color: 'var(--tx-muted)', fontWeight: 500 }}>{card.meta}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FREE CONSULTATION BANNER */}
        <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-dark)', border: '1px solid rgba(77,166,232,0.2)', borderLeft: '4px solid var(--ac)', borderRadius: '12px', padding: '22px 28px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          {/* Subtle grid inside banner */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(77,166,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(77,166,232,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none', borderRadius: '12px' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ac-light)', marginBottom: '5px' }}>Limited Availability This Week</p>
            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.1rem', fontWeight: 900, color: 'var(--tx-light)', letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: '4px' }}>Book a Free Consultation</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--tx-light-dim)', lineHeight: 1.6 }}>30 minutes with a supply chain expert — no commitment required.</p>
          </div>
          <Link to="/contact" style={{ position: 'relative', zIndex: 1 }}>
            <button style={{ background: 'var(--ac)', color: '#fff', border: 'none', borderRadius: '9px', padding: '11px 24px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', boxShadow: 'var(--sh-blue)', transition: 'transform 0.18s, box-shadow 0.18s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(21,101,192,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--sh-blue)'; }}>
              Schedule Now →
            </button>
          </Link>
        </div>

        {/* TABS */}
        <div style={{ display: 'flex', gap: '2px', background: 'var(--bg-alt)', border: '1px solid var(--bdr)', borderRadius: '10px', padding: '4px', marginBottom: '20px', width: 'fit-content' }}>
          {TABS.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)}
              style={{ padding: '8px 22px', borderRadius: '7px', border: 'none', cursor: 'pointer', fontSize: '0.84rem', fontWeight: 600, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.01em', transition: 'all 0.15s ease', background: tab === t.key ? 'var(--ac)' : 'transparent', color: tab === t.key ? '#fff' : 'var(--tx-muted)', boxShadow: tab === t.key ? 'var(--sh-blue)' : 'none' }}>
              {t.label}
            </button>
          ))}
        </div>

        {/* ── ENGAGEMENTS ── */}
        {tab === 'overview' && (
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)', borderRadius: '14px', overflow: 'hidden', boxShadow: 'var(--sh-sm)' }}>
            <div style={{ padding: '18px 26px', borderBottom: '1px solid var(--bdr)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontWeight: 800, color: 'var(--tx-primary)', letterSpacing: '-0.01em' }}>Active Engagements</h2>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--ac)', background: 'var(--ac-tint)', border: '1px solid var(--ac-border)', padding: '3px 10px', borderRadius: '6px', letterSpacing: '0.06em' }}>{engagements.length} PROJECTS</span>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-alt)', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--tx-muted)' }}>
                    {['Project', 'Service', 'Progress', 'Status', 'Started'].map((h) => (
                      <th key={h} style={{ padding: '11px 24px', textAlign: 'left', fontWeight: 700 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {engagements.map((eng) => (
                    <tr key={eng.project}
                      style={{ borderBottom: '1px solid var(--bdr)', fontSize: '0.865rem', transition: 'background 0.12s' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-alt)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                      <td style={{ padding: '15px 24px', color: 'var(--tx-primary)', fontWeight: 600 }}>{eng.project}</td>
                      <td style={{ padding: '15px 24px', color: 'var(--tx-muted)', whiteSpace: 'nowrap' }}>{eng.service}</td>
                      <td style={{ padding: '15px 24px', minWidth: '140px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                          <div style={{ flex: 1, height: '4px', background: 'var(--bg-alt)', borderRadius: '999px', overflow: 'hidden', border: '1px solid var(--bdr)' }}>
                            <div style={{ height: '100%', width: `${eng.progress}%`, background: 'var(--ac)', borderRadius: '999px', transition: 'width 0.7s cubic-bezier(0.22,1,0.36,1)' }} />
                          </div>
                          <span style={{ fontSize: '0.7rem', color: 'var(--ac)', fontWeight: 700, minWidth: '30px' }}>{eng.progress}%</span>
                        </div>
                      </td>
                      <td style={{ padding: '15px 24px' }}>
                        <span style={{ background: STATUS[eng.status].bg, color: STATUS[eng.status].color, border: `1px solid ${STATUS[eng.status].border}`, padding: '3px 12px', borderRadius: '999px', fontSize: '0.73rem', fontWeight: 700, letterSpacing: '0.03em' }}>
                          {eng.status}
                        </span>
                      </td>
                      <td style={{ padding: '15px 24px', color: 'var(--tx-muted)', whiteSpace: 'nowrap' }}>{eng.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── ESG ── */}
        {tab === 'esg' && (
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)', borderRadius: '14px', overflow: 'hidden', boxShadow: 'var(--sh-sm)' }}>
            <div style={{ background: 'var(--bg-dark)', borderBottom: '1px solid rgba(77,166,232,0.12)', padding: '36px 40px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(77,166,232,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(77,166,232,0.045) 1px, transparent 1px)', backgroundSize: '48px 48px', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ac-light)', marginBottom: '8px' }}>Free Assessment Tool</p>
                <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', fontWeight: 900, color: 'var(--tx-light)', letterSpacing: '-0.02em', marginBottom: '10px' }}>ESG Performance Estimator</h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--tx-light-dim)', maxWidth: '520px', lineHeight: 1.65, marginBottom: '24px' }}>
                  Calculate your supply chain ESG score across energy, logistics, supplier diversity, and waste — with prioritised improvement recommendations.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                  {['Carbon Footprint', 'Supplier Audits', 'Energy Efficiency', 'Circular Economy'].map(tag => (
                    <span key={tag} style={{ background: 'rgba(77,166,232,0.1)', border: '1px solid rgba(77,166,232,0.22)', borderRadius: '999px', padding: '4px 13px', fontSize: '0.75rem', color: 'var(--ac-light)', fontWeight: 600 }}>{tag}</span>
                  ))}
                </div>
                <Link to="/esg-calculator">
                  <button style={{ background: 'var(--ac)', color: '#fff', border: 'none', borderRadius: '9px', padding: '12px 28px', fontFamily: 'DM Sans, sans-serif', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer', boxShadow: 'var(--sh-blue)', transition: 'transform 0.18s, box-shadow 0.18s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(21,101,192,0.45)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--sh-blue)'; }}>
                    Open ESG Calculator →
                  </button>
                </Link>
              </div>
            </div>
            <div style={{ padding: '16px 40px', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {['Free to use', 'No sign-up required', 'Results in under 2 minutes', 'GRI & CDP standards'].map(item => (
                <span key={item} style={{ fontSize: '0.76rem', color: 'var(--tx-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--ac)', flexShrink: 0 }} />{item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── QUICK ACTIONS ── */}
        {tab === 'actions' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            {ACTIONS.map((action) => (
              <div key={action.label}
                style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)', borderTop: '3px solid var(--ac)', borderRadius: '14px', padding: '28px', transition: 'transform 0.18s, box-shadow 0.18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--sh-blue)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                <p style={{ fontSize: '0.64rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ac)', marginBottom: '10px' }}>{action.num}</p>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: 'var(--tx-primary)', marginBottom: '8px', letterSpacing: '-0.01em' }}>{action.label}</h3>
                <p style={{ fontSize: '0.855rem', color: 'var(--tx-muted)', marginBottom: '22px', lineHeight: 1.65 }}>{action.sub}</p>
                <Link to={action.path}>
                  <button className="btn btn-primary" style={{ fontSize: '0.84rem', padding: '9px 20px' }}>{action.cta} →</button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
