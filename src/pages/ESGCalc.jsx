import { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitEsgData } from '../api/esg';
import PageHeader from '../components/PageHeader';

const SLIDERS = [
  {
    key: 'energyConsumption',
    label: 'Monthly Energy Consumption',
    unit: 'kWh',
    min: 0, max: 20000, step: 500,
    hint: 'Total energy usage across all facilities and offices per month.',
    band: (v) => v < 3000 ? 'Low — excellent baseline' : v < 10000 ? 'Moderate — optimisation opportunity' : 'High — prioritise efficiency measures',
  },
  {
    key: 'logisticsTrips',
    label: 'Logistics Trips per Month',
    unit: 'trips',
    min: 0, max: 1000, step: 10,
    hint: 'Total inbound and outbound logistics trips, including last-mile delivery.',
    band: (v) => v < 100 ? 'Lean logistics footprint' : v < 500 ? 'Moderate — consider route consolidation' : 'High — route optimisation recommended',
  },
  {
    key: 'supplierDiversity',
    label: 'Supplier Diversity Score',
    unit: '/100',
    min: 0, max: 100, step: 5,
    hint: 'Percentage of spend with diverse or minority-owned suppliers.',
    band: (v) => v >= 60 ? 'Strong diversity program' : v >= 30 ? 'Growing — target 60% or above' : 'Low — expand sourcing diversity',
  },
  {
    key: 'recyclingRate',
    label: 'Waste Recycling Rate',
    unit: '%',
    min: 0, max: 100, step: 5,
    hint: 'Percentage of operational waste diverted from landfill.',
    band: (v) => v >= 70 ? 'Excellent waste diversion' : v >= 40 ? 'Fair — increase diversion targets' : 'Low — establish a recycling program',
  },
];

function ScoreRing({ score }) {
  const r = 50;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(score / 100, 1);
  const clr = score >= 70 ? 'var(--ac-light)' : score >= 40 ? 'var(--ac)' : 'rgba(77,166,232,0.5)';
  return (
    <div style={{ position: 'relative', width: '130px', height: '130px', flexShrink: 0 }}>
      <svg width="130" height="130" style={{ transform: 'rotate(-90deg)', display: 'block' }}>
        <circle cx="65" cy="65" r={r} fill="none" stroke="rgba(77,166,232,0.12)" strokeWidth="9" />
        <circle cx="65" cy="65" r={r} fill="none" stroke={clr} strokeWidth="9"
          strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.9s cubic-bezier(0.22,1,0.36,1)' }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '2rem', fontWeight: 900, color: 'var(--ac)', lineHeight: 1, letterSpacing: '-0.03em' }}>{score}</p>
        <p style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--tx-muted)', marginTop: '3px' }}>/ 100</p>
      </div>
    </div>
  );
}

export default function ESGCalc() {
  const [formData, setFormData] = useState({
    energyConsumption: 5000,
    logisticsTrips: 200,
    supplierDiversity: 50,
    recyclingRate: 60,
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: parseFloat(value) }));
  };

  const calculate = () => {
    const eScore = Math.max(0, 100 - formData.energyConsumption / 100);
    const lScore = Math.max(0, 100 - formData.logisticsTrips / 3);
    const sScore = formData.supplierDiversity;
    const rScore = formData.recyclingRate;
    const total = Math.round(eScore * 0.3 + lScore * 0.2 + sScore * 0.25 + rScore * 0.25);
    const label = total >= 70 ? 'Good' : total >= 40 ? 'Fair' : 'Needs Work';

    const breakdown = [
      { label: 'Energy', score: Math.round(eScore), weight: '30%' },
      { label: 'Logistics', score: Math.round(lScore), weight: '20%' },
      { label: 'Supplier Diversity', score: Math.round(sScore), weight: '25%' },
      { label: 'Recycling', score: Math.round(rScore), weight: '25%' },
    ];

    const recs = [];
    if (eScore < 60) recs.push({ area: 'Energy', text: 'Switch to renewable energy sources and implement efficiency programs across your facilities.' });
    if (lScore < 60) recs.push({ area: 'Logistics', text: 'Optimise delivery routes and consolidate shipments to reduce your transport carbon footprint.' });
    if (sScore < 60) recs.push({ area: 'Diversity', text: 'Expand supplier diversity program and build partnerships with underrepresented businesses.' });
    if (rScore < 60) recs.push({ area: 'Waste', text: 'Establish formal waste-diversion targets and recycling programs with your logistics partners.' });

    setResult({ score: total, label, breakdown, recs: recs.slice(0, 3) });
  };

  const handleSubmit = async () => {
    setLoading(true); setSubmitError(null);
    try { await submitEsgData(formData); setSubmitted(true); }
    catch (err) { setSubmitError('Submission failed. Please try again.'); console.error(err); }
    finally { setLoading(false); }
  };

  return (
    <main>
      <PageHeader
        title="ESG Performance Estimator"
        subtitle="Baseline diagnostic of your supply chain's environmental, social, and governance maturity."
        breadcrumb="ESG Calculator"
      />

      <section style={{ padding: '36px 0 60px', background: 'var(--bg-page)' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 24px' }}>

          {/* Tag row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '26px' }}>
            {['Carbon Footprint', 'Supplier Diversity', 'Logistics Efficiency', 'Waste Management', 'GRI & CDP Standards'].map(tag => (
              <span key={tag} style={{ background: 'var(--ac-tint)', border: '1px solid var(--ac-border)', borderRadius: '999px', padding: '4px 13px', fontSize: '0.74rem', color: 'var(--ac)', fontWeight: 600 }}>{tag}</span>
            ))}
          </div>

          {/* ── INPUT CARD ── */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--sh)', marginBottom: '22px' }}>
            {/* Header */}
            <div style={{ padding: '18px 28px', borderBottom: '1px solid var(--bdr)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-alt)' }}>
              <div>
                <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', fontWeight: 800, color: 'var(--tx-primary)', letterSpacing: '-0.01em' }}>Operational Inputs</h2>
                <p style={{ fontSize: '0.76rem', color: 'var(--tx-muted)', marginTop: '2px' }}>Adjust sliders to reflect your current operational metrics.</p>
              </div>
              <span style={{ fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ac)', background: 'var(--ac-tint)', border: '1px solid var(--ac-border)', padding: '4px 11px', borderRadius: '6px' }}>4 Indicators</span>
            </div>

            {/* Sliders */}
            <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {SLIDERS.map((s) => {
                const val = formData[s.key];
                const pct = ((val - s.min) / (s.max - s.min)) * 100;
                return (
                  <div key={s.key} style={{ background: 'var(--bg-alt)', border: '1px solid var(--bdr)', borderLeft: '3px solid var(--ac)', borderRadius: '10px', padding: '16px 18px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' }}>
                      <div>
                        <p style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--tx-primary)', marginBottom: '2px' }}>{s.label}</p>
                        <p style={{ fontSize: '0.73rem', color: 'var(--tx-muted)', lineHeight: 1.5 }}>{s.hint}</p>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.35rem', fontWeight: 900, color: 'var(--ac)', lineHeight: 1, letterSpacing: '-0.02em' }}>{val}</p>
                        <p style={{ fontSize: '0.62rem', color: 'var(--tx-muted)', marginTop: '2px' }}>{s.unit}</p>
                      </div>
                    </div>
                    <input type="range" name={s.key} min={s.min} max={s.max} step={s.step} value={val}
                      onChange={handleChange}
                      style={{ width: '100%', accentColor: 'var(--ac)', marginBottom: '7px', display: 'block', cursor: 'pointer' }} />
                    <p style={{ fontSize: '0.7rem', color: 'var(--ac-light)', fontWeight: 600 }}>{s.band(val)}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div style={{ padding: '0 28px 28px' }}>
              <button onClick={calculate}
                style={{ width: '100%', padding: '13px', background: 'var(--ac)', color: '#fff', border: 'none', borderRadius: '10px', fontFamily: 'DM Sans, sans-serif', fontSize: '0.95rem', fontWeight: 800, cursor: 'pointer', letterSpacing: '0.01em', boxShadow: 'var(--sh-blue)', transition: 'transform 0.18s, box-shadow 0.18s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(21,101,192,0.42)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--sh-blue)'; }}>
                Calculate ESG Score
              </button>
            </div>
          </div>

          {/* ── RESULTS ── */}
          {result && (
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--sh)' }}>

              {/* Score hero — dark tone */}
              <div style={{ background: 'var(--bg-dark)', borderBottom: '1px solid rgba(77,166,232,0.14)', padding: '28px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center' }}>
                  <ScoreRing score={result.score} />
                  <div style={{ flex: 1, minWidth: '180px' }}>
                    <p style={{ fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ac-light)', marginBottom: '6px' }}>Your ESG Rating</p>
                    <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '2rem', fontWeight: 900, color: 'var(--tx-light)', letterSpacing: '-0.025em', lineHeight: 1, marginBottom: '8px' }}>{result.label}</h2>
                    <p style={{ fontSize: '0.88rem', color: 'var(--tx-light-dim)', lineHeight: 1.65, maxWidth: '360px' }}>
                      {result.score >= 70
                        ? 'Strong performance across key ESG dimensions. Continue improving your leading indicators.'
                        : 'Several areas have room for improvement. Review priority recommendations below.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div style={{ padding: '22px 28px', borderBottom: '1px solid var(--bdr)' }}>
                <p style={{ fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tx-muted)', marginBottom: '14px' }}>Score Breakdown</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                  {result.breakdown.map((sub) => (
                    <div key={sub.label} style={{ background: 'var(--bg-alt)', border: '1px solid var(--bdr)', borderRadius: '10px', padding: '14px 16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <p style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--tx-body)' }}>{sub.label}</p>
                        <span style={{ fontSize: '0.62rem', color: 'var(--tx-muted)' }}>{sub.weight}</span>
                      </div>
                      <div style={{ height: '3px', background: 'var(--bdr-strong)', borderRadius: '999px', marginBottom: '8px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${sub.score}%`, background: 'var(--ac)', borderRadius: '999px' }} />
                      </div>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.3rem', fontWeight: 900, color: 'var(--ac)', letterSpacing: '-0.02em' }}>{sub.score}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              {result.recs.length > 0 && (
                <div style={{ padding: '22px 28px', borderBottom: '1px solid var(--bdr)' }}>
                  <p style={{ fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--tx-muted)', marginBottom: '14px' }}>Priority Recommendations</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {result.recs.map((rec, i) => (
                      <div key={i} style={{ display: 'flex', gap: '14px', background: 'var(--bg-alt)', border: '1px solid var(--bdr)', borderLeft: '3px solid var(--ac)', borderRadius: '10px', padding: '14px 16px', alignItems: 'flex-start' }}>
                        <div style={{ minWidth: '22px', height: '22px', borderRadius: '6px', background: 'var(--ac-tint)', border: '1px solid var(--ac-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.68rem', fontWeight: 800, color: 'var(--ac)', flexShrink: 0, marginTop: '1px' }}>{i + 1}</div>
                        <div>
                          <p style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--ac)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>{rec.area}</p>
                          <p style={{ fontSize: '0.87rem', color: 'var(--tx-body)', lineHeight: 1.65 }}>{rec.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer */}
              <div style={{ padding: '18px 28px', background: 'var(--bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                {submitted ? (
                  <p style={{ fontSize: '0.875rem', color: 'var(--ac-light)', fontWeight: 700 }}>Assessment submitted — our team will follow up shortly.</p>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    {submitError && <p style={{ fontSize: '0.82rem', color: 'var(--ac)' }}>{submitError}</p>}
                    <button onClick={handleSubmit} disabled={loading} className="btn btn-outline" style={{ fontSize: '0.84rem' }}>
                      {loading ? 'Submitting…' : 'Submit Assessment'}
                    </button>
                  </div>
                )}
                <Link to="/contact">
                  <button className="btn btn-primary" style={{ fontSize: '0.84rem' }}>Book a Consultation →</button>
                </Link>
              </div>
            </div>
          )}

          {/* Trust strip */}
          <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {['Free to use', 'No account required', 'GRI & CDP standards', 'Results in under 2 minutes'].map(item => (
              <span key={item} style={{ fontSize: '0.74rem', color: 'var(--tx-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--ac)', flexShrink: 0 }} />{item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
