import { Link } from 'react-router-dom';
import ClientTicker from '../components/ClientTicker';

const services = [
  {
    title: 'Supply Chain Management',
    description: 'End-to-end optimisation of supplier networks, planning flow, and resilience for high-growth enterprises.',
    icon: 'SCM',
  },
  {
    title: 'Vendor Development',
    description: 'Structured supplier uplift programs that improve quality, cost, delivery reliability, and collaboration.',
    icon: 'VD',
  },
  {
    title: 'Procurement Strategy',
    description: 'Category strategy, negotiation playbooks, and spend visibility built for measurable margin improvement.',
    icon: 'PPS',
  },
  {
    title: 'Six Sigma Excellence',
    description: 'DMAIC-led process excellence programs that remove waste and increase throughput with discipline.',
    icon: '6S',
  },
  {
    title: 'Logistics Solutions',
    description: 'Distribution, warehousing, and route optimisation strategies tuned for service and cost control.',
    icon: 'LOG',
  },
  {
    title: 'Inventory Optimisation',
    description: 'Demand-led inventory design that protects fill rates while releasing trapped working capital.',
    icon: 'INV',
  },
];

const whyProcureEdge = [
  {
    heading: 'Deep Sector Knowledge',
    body: "We've worked across manufacturing, FMCG, pharma, retail and auto — bringing sector-specific playbooks, not generic frameworks.",
  },
  {
    heading: 'Data-Driven Decisions',
    body: 'Every engagement starts with spend analytics and benchmarking. Our recommendations are backed by numbers, not intuition.',
  },
  {
    heading: 'End-to-End Ownership',
    body: 'From diagnostic to implementation to capability building — we stay through the entire change, not just the strategy slide.',
  },
];

const heroStats = [
  { value: '200+', label: 'Projects' },
  { value: '₹500Cr+', label: 'Value Delivered' },
  { value: '40%', label: 'Avg Cost Reduction' },
  { value: '8 Yrs', label: 'Industry Depth' },
];

export default function Home() {
  return (
    <main style={{ paddingTop: '64px' }}>
      <section
        style={{
          background: 'var(--bg-dark)',
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '80px',
          // borderBottom: '1px solid var(--bdr)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              'linear-gradient(var(--tx-light) 1px, transparent 1px), linear-gradient(90deg, var(--tx-light) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 32px',
            position: 'relative',
            zIndex: 1,
            width: '100%',
          }}
        >
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--ac)',
              marginBottom: '20px',
            }}
          >
            Strategic Consulting · Supply Chain · ESG
          </p>

          <h1
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
              fontWeight: 1000,
              color: 'var(--tx-light)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              
              maxWidth: '780px',
            }}
          >
            Transforming Supply Chains.
            <br />
            <span style={{ color: 'var(--ac)' }}>Driving Measurable Growth.</span>
          </h1>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--tx-light-dim)',
              lineHeight: 1.7,
              
              maxWidth: '540px',
            }}
          >
            Strategic procurement and supply chain solutions for enterprises seeking competitive advantage and operational excellence across India.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact">
              <button className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
                Book a Free Consultation
              </button>
            </Link>
            <Link to="/case-studies">
              <button className="btn btn-outline-white" style={{  fontSize: '0.9rem' }}>
                View Case Studies →
              </button>
            </Link>
          </div>

          <div style={{ display: 'flex', gap: '32px', marginTop: '56px', flexWrap: 'wrap' }}>
            {heroStats.map((stat) => (
              <div key={stat.value}>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    color: 'var(--tx-light)',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p style={{ fontSize: '0.78rem', color: 'var(--tx-light-dim)', marginTop: '4px', letterSpacing: '0.04em' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'var(--bg-section)', borderBottom: '1px solid var(--bdr)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ marginBottom: '40px' }}>
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 1000,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--ac)',
                marginBottom: '10px',
              }}
            >
              What We Do
            </p>
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                fontWeight: 1000,
                color: 'var(--tx-primary)',
                lineHeight: 1.0,
              }}
            >
              End-to-end procurement & supply chain expertise
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
            {services.map((service) => (
              <Link to="/services" key={service.title} style={{ textDecoration: 'none' }}>
                <div className="theme-card service-card" style={{ padding: '24px', cursor: 'pointer', height: '100%' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'var(--bg-dark)',
                      borderRadius: '7px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--tx-light)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      marginBottom: '16px',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--tx-primary)',
                      marginBottom: '8px',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.855rem', color: 'var(--tx-muted)', lineHeight: 1.65 }}>
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <Link
              to="/services"
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--ac)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '56px 0',
          background: 'var(--bg-alt)',
          borderTop: '1px solid var(--bdr)',
          borderBottom: '1px solid var(--bdr)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', marginBottom: '28px', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--tx-muted)',
              marginBottom: '6px',
            }}
          >
            Trusted by India&apos;s Leading Enterprises
          </p>
        </div>
        <ClientTicker />
        <div style={{ maxWidth: '1200px', margin: '18px auto 0', padding: '0 32px', textAlign: 'center' }}>
          <Link to="/industries" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--ac)' }}>
            Industries we serve →
          </Link>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'var(--bg-section)', borderBottom: '1px solid var(--bdr)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'var(--bdr)' }}>
            {whyProcureEdge.map((item) => (
              <div key={item.heading} style={{ background: 'var(--bg-card)', padding: '36px 28px' }}>
                <div style={{ width: '32px', height: '3px', background: 'var(--ac)', borderRadius: '2px', marginBottom: '20px' }} />
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--tx-primary)',
                    marginBottom: '12px',
                  }}
                >
                  {item.heading}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--tx-muted)', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 32px', background: 'var(--bg-dark)', textAlign: 'center' }}>
        <p
          style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--ac)',
            marginBottom: '12px',
          }}
        >
          Let&apos;s Work Together
        </p>
        <h2
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            fontWeight: 800,
            color: 'var(--tx-light)',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}
        >
          Ready to optimise your operations?
        </h2>
        <p
          style={{
            color: 'var(--tx-light-dim)',
            fontSize: '1rem',
            maxWidth: '480px',
            margin: '0 auto 32px',
          }}
        >
          Map the biggest cost, resilience, and ESG opportunities across your supply chain — in a 30-minute discovery call.
        </p>
        <Link to="/contact">
          <button className="btn btn-outline-white" style={{ padding: '13px 32px', fontSize: '0.95rem' }}>
            Schedule a Consultation
          </button>
        </Link>
      </section>
    </main>
  );
}
