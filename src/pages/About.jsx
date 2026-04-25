import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const teamMembers = [
  {
    name: 'Vanshika Dhawan',
    role: 'Chief Executive Officer',
    bio: 'Former VP Supply Chain leader driving large-scale procurement transformation across multi-site operations.',
  },
  {
    name: 'Aarvee Wadhwa',
    role: 'Head of Strategy',
    bio: 'Strategy and savings architect focused on cost governance, sourcing excellence, and operating model design.',
  },
  {
    name: 'Saara Jagdale',
    role: 'Lead Consultant',
    bio: 'Six Sigma specialist helping manufacturers improve throughput, quality stability, and plant performance.',
  },
  {
    name: 'Tanishka Mane',
    role: 'Lead Consultant',
    bio: 'Consultant focused on ESG-linked procurement, supplier maturity programs, and logistics optimisation.',
  },
];

const values = [
  {
    name: 'Integrity',
    description: 'Transparent partnerships built on trust, clear governance, and accountable execution.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M12 3l7 3v5c0 4.4-2.8 8.4-7 10-4.2-1.6-7-5.6-7-10V6l7-3Z" />
        <path d="m9.5 11.5 1.7 1.7 3.7-4" />
      </svg>
    ),
  },
  {
    name: 'Innovation',
    description: 'We combine process discipline with modern tools to unlock faster, smarter supply chain decisions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8.4 14.5A6 6 0 1 1 15.6 14.5c-.8.7-1.3 1.4-1.6 2.5h-4c-.3-1.1-.8-1.8-1.6-2.5Z" />
      </svg>
    ),
  },
  {
    name: 'Excellence',
    description: 'Every engagement is built around measurable outcomes, rigorous delivery, and sustained results.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="m12 3.8 2.3 4.66 5.14.75-3.72 3.63.88 5.13L12 15.66 7.4 18l.88-5.03L4.56 9.2l5.14-.75L12 3.8Z" />
      </svg>
    ),
  },
  {
    name: 'Sustainability',
    description: 'We help clients scale responsibly with resilient supplier ecosystems and pragmatic ESG action.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path d="M5 14c0-5 5-9 13-9 0 8-4 13-9 13-2.2 0-4-1.8-4-4Z" />
        <path d="M9 15c2.5-3.5 5.8-5.8 10-7" />
      </svg>
    ),
  },
];

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export default function About() {
  const [visionRef, visionInView] = useInView();
  const [teamRef, teamInView] = useInView();
  const [valuesRef, valuesInView] = useInView();

  return (
    <main className="pt-16">
      <section className="page-hero py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="theme-text-on-dark mb-4 font-display text-5xl font-bold">About ProcureEdge</h1>
          <div className="theme-text-on-dark-muted flex gap-2 font-body">
            <Link to="/" className="transition-colors hover:text-[var(--text-on-dark)]">
              Home
            </Link>
            <span>/</span>
            <span>About</span>
          </div>
        </div>
      </section>

      <section ref={visionRef} className="theme-surface py-section section-card-stack">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div className={`opacity-0-init ${visionInView ? 'animate-fadeInLeft' : ''}`}>
              <p style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>
                Our Vision
              </p>
              <h2 style={{ fontFamily: 'var(--display)', fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px', lineHeight: '1.3' }}>
                Redefining how enterprises approach procurement
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', fontSize: '0.95rem' }}>
                To be the trusted partner transforming how enterprises approach procurement and supply chain management. We envision a world where data-driven decision-making and sustainable practices are the norm.
              </p>
            </div>

            <div className={`opacity-0-init ${visionInView ? 'animate-fadeInRight' : ''}`}>
              <div style={{ background: 'var(--accent-light)', border: '1px solid var(--accent-border)', borderRadius: '12px', padding: '32px' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>
                  Our Mission
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.75', fontSize: '0.95rem', marginBottom: '24px' }}>
                  We empower enterprises through strategic procurement and supply chain consulting. By combining deep industry expertise with innovative methodologies, we help our clients reduce costs, mitigate risks, and achieve sustainable competitive advantage.
                </p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {['200+ Clients', '8 Years', '₹500Cr+ Savings'].map((metric, index) => (
                    <span
                      key={metric}
                      className={`opacity-0-init ${
                        visionInView ? 'animate-fadeInUp' : ''
                      }`}
                      style={{
                        animationDelay: `${200 + index * 120}ms`,
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-strong)',
                        borderRadius: '999px',
                        padding: '5px 14px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
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

      <section ref={teamRef} className="theme-surface-muted py-section section-card-stack">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.24em] text-accent-600 dark:text-accent-300">
              Meet the Team
            </p>
            <h2 className="mb-4 font-display text-4xl font-bold theme-text-strong">
              Leadership with operational depth
            </h2>
            <p className="font-body text-lg theme-text-secondary">
              Experienced operators and consultants shaping procurement, manufacturing, and ESG outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <article
                key={member.name}
                className={`opacity-0-init group rounded-3xl p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:[border-top-color:#1D6FA4] hover:[border-top-width:2px] ${
                  teamInView ? 'animate-fadeInUp' : ''
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full font-display text-2xl font-bold"
                  style={{ background: 'var(--text-primary)', color: 'var(--text-on-dark)' }}
                >
                  {getInitials(member.name)}
                </div>
                <h3 className="mb-2 font-display text-xl font-bold theme-text-strong">
                  {member.name}
                </h3>
                <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.18em] text-accent-600">
                  {member.role}
                </p>
                <p className="font-body leading-7 theme-text-muted">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="py-section section-card-stack" style={{ background: 'var(--bg-strong)' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <article
                key={value.name}
                className={`opacity-0-init group rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm ${
                  valuesInView ? 'animate-fadeInUp' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-white/30"
                  style={{ background: 'var(--accent)', color: 'var(--text-on-dark)' }}
                >
                  {value.icon}
                </div>
                <h3 className="value-title theme-text-on-dark mx-auto mb-3 inline-block font-display text-xl font-bold">
                  {value.name}
                </h3>
                <p className="theme-text-on-dark-muted font-body text-sm leading-7">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
