import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const teamMembers = [
  { name: 'Vanshika Dhawan', role: 'Chief Executive Officer', bio: 'Former VP Supply Chain at Fortune 500. 20+ years in global procurement and operations.' },
  { name: 'Aarvee Wadhwa', role: 'Head of Strategy', bio: 'MBA from ISB. Specialist in cost reduction and process optimization across sectors.' },
  { name: 'Saara Jagdale', role: 'Lead Consultant', bio: 'Six Sigma Black Belt. Expert in manufacturing excellence and lean methodologies.' },
  { name: 'Tanishka Mane', role: 'Lead Consultant', bio: 'Six Sigma Black Belt. Expert in manufacturing excellence and lean methodologies.' },
];

const values = [
  { name: 'Integrity', desc: 'Transparent partnerships built on trust and ethical practices.' },
  { name: 'Innovation', desc: 'Forward-thinking solutions that leverage emerging technologies.' },
  { name: 'Excellence', desc: 'Uncompromising commitment to quality and measurable results.' },
  { name: 'Sustainability', desc: 'Creating value while driving positive environmental impact.' },
];

export default function About() {
  return (
    <main>
      <PageHeader
        title="About ProcureEdge"
        subtitle="The team and values behind India's procurement transformation partner."
        breadcrumb="About"
      />

      <section style={{ padding: '64px 32px', background: 'var(--bg-section)', borderBottom: '1px solid var(--bdr)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ac)', marginBottom: '10px' }}>Our Vision</p>
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.9rem', fontWeight: 700, color: 'var(--tx-primary)', lineHeight: 1.25, marginBottom: '16px' }}>
              Redefining how enterprises approach procurement
            </h2>
            <p style={{ color: 'var(--tx-muted)', lineHeight: 1.75, fontSize: '0.935rem' }}>
              To be the trusted partner transforming how enterprises approach procurement and supply chain management — a world where data-driven decision-making and sustainable practices are the norm.
            </p>
          </div>
          <div style={{ background: 'var(--ac-tint)', border: '1px solid var(--ac-border)', borderRadius: '12px', padding: '32px' }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ac)', marginBottom: '10px' }}>Our Mission</p>
            <p style={{ color: 'var(--tx-body)', lineHeight: 1.75, fontSize: '0.935rem', marginBottom: '24px' }}>
              We empower enterprises through strategic procurement and supply chain consulting — combining deep industry expertise with innovative methodologies to reduce costs, mitigate risks, and achieve sustainable advantage.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['200+ Clients', '8 Years', '₹500Cr+ Savings'].map((metric) => (
                <span key={metric} style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr-strong)', borderRadius: '999px', padding: '5px 14px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--tx-primary)' }}>
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 32px', background: 'var(--bg-alt)', borderBottom: '1px solid var(--bdr)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '36px' }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ac)', marginBottom: '8px' }}>Meet the Team</p>
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '2rem', fontWeight: 700, color: 'var(--tx-primary)', marginBottom: '8px' }}>Leadership with operational depth</h2>
            <p style={{ color: 'var(--tx-muted)', fontSize: '0.9rem' }}>Experienced operators and consultants shaping procurement, manufacturing, and ESG outcomes.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px' }}>
            {teamMembers.map((member) => {
              const initials = member.name.split(' ').map((name) => name[0]).join('').slice(0, 2);
              return (
                <div key={member.name} style={{ background: 'var(--bg-card)', border: '1px solid var(--bdr)', borderRadius: '10px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '0.85rem', fontWeight: 800, color: 'var(--tx-light)', fontFamily: 'DM Sans, sans-serif' }}>
                    {initials}
                  </div>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: 'var(--tx-primary)', marginBottom: '4px' }}>{member.name}</h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--ac)', fontWeight: 600, marginBottom: '10px' }}>{member.role}</p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--tx-muted)', lineHeight: 1.65 }}>{member.bio}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '64px 32px', background: 'var(--bg-dark)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
          {values.map((value, index) => (
            <div key={value.name} style={{ padding: '36px 28px', background: index % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent' }}>
              <div style={{ width: '32px', height: '3px', background: 'var(--ac)', borderRadius: '2px', marginBottom: '18px' }} />
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--tx-light)', marginBottom: '10px' }}>{value.name}</h3>
              <p style={{ fontSize: '0.855rem', color: 'var(--tx-light-dim)', lineHeight: 1.7 }}>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '32px 5px', background: 'var(--bg-section)', textAlign: 'center' }}>
        <p style={{ color: 'var(--tx-muted)' }}>Ready to work with us?</p>
        <Link to="/contact">
          <button className="btn btn-primary" style={{ padding: '12px 28px' }}>Book a Consultation →</button>
        </Link>
      </section>
    </main>
  );
}
