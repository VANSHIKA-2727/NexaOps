import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
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

const whyNexaOps = [
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

/* ── Intersection Observer hook for scroll reveal ── */
function useScrollReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ── Individual animated section wrapper ── */
function Reveal({ children, delay = 0, direction = 'up', className = '', style = {} }) {
  const ref = useScrollReveal();
  const dirMap = {
    up: 'translateY(32px)',
    left: 'translateX(-28px)',
    right: 'translateX(28px)',
    none: 'none',
  };
  return (
    <div
      ref={ref}
      className={`reveal-el ${className}`}
      style={{
        opacity: 0,
        transform: dirMap[direction],
        transition: `opacity 0.62s ease ${delay}ms, transform 0.62s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  /* hero entrance animation refs */
  const badgeRef = useRef(null);
  const h1Ref = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    /* Inject revealed style once */
    if (!document.getElementById('reveal-style')) {
      const s = document.createElement('style');
      s.id = 'reveal-style';
      s.textContent = `.reveal-el.revealed { opacity: 1 !important; transform: none !important; }`;
      document.head.appendChild(s);
    }

    /* Hero stagger on mount */
    const els = [badgeRef, h1Ref, subRef, ctaRef, statsRef];
    els.forEach((r, i) => {
      if (!r.current) return;
      r.current.style.opacity = '0';
      r.current.style.transform = 'translateY(28px)';
      r.current.style.transition = `opacity 0.6s ease ${i * 110}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 110}ms`;
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (r.current) {
            r.current.style.opacity = '1';
            r.current.style.transform = 'none';
          }
        }, 60 + i * 110);
      });
    });
  }, []);

  return (
    <main style={{ paddingTop: '64px' }}>

      {/* ─── HERO ─── */}
      <section
        style={{
          background: 'var(--bg-dark)',
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '48px',
          paddingBottom: '48px',
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.045,
            backgroundImage:
              'linear-gradient(var(--tx-light) 1px, transparent 1px), linear-gradient(90deg, var(--tx-light) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          }}
        />

        {/* Glow orb */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(29,111,164,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
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
            ref={badgeRef}
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--ac)',
              marginBottom: '16px',
            }}
          >
            Strategic Consulting · Supply Chain · ESG
          </p>

          <h1
            ref={h1Ref}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
              fontWeight: 1000,
              color: 'var(--tx-light)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              maxWidth: '780px',
              marginBottom: '20px',
            }}
          >
            Transforming Supply Chains.
            <br />
            <span style={{ color: 'var(--ac)' }}>Driving Measurable Growth.</span>
          </h1>

          <p
            ref={subRef}
            style={{
              fontSize: '1.05rem',
              color: 'var(--tx-light-dim)',
              lineHeight: 1.7,
              maxWidth: '520px',
              marginBottom: '28px',
            }}
          >
            Strategic procurement and supply chain solutions for enterprises seeking competitive advantage and operational excellence across India.
          </p>

          <div ref={ctaRef} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/contact">
              <button className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
                Book a Free Consultation
              </button>
            </Link>
            <Link to="/case-studies">
              <button className="btn btn-outline-white" style={{ fontSize: '0.9rem' }}>
                View Case Studies →
              </button>
            </Link>
          </div>

          <div ref={statsRef} style={{ display: 'flex', gap: '32px', marginTop: '44px', flexWrap: 'wrap' }}>
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
                <p style={{ fontSize: '0.78rem', color: 'var(--tx-light-dim)', marginTop: '3px', letterSpacing: '0.04em' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section style={{ padding: '56px 0', background: 'var(--bg-section)', borderBottom: '1px solid var(--bdr)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <Reveal direction="up">
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 1000,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--ac)',
                marginBottom: '8px',
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
                marginBottom: '32px',
              }}
            >
              End-to-end procurement &amp; supply chain expertise
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
            {services.map((service, i) => (
              <Reveal key={service.title} direction="up" delay={i * 70}>
                <Link to="/services" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="theme-card service-card" style={{ padding: '22px', cursor: 'pointer', height: '100%' }}>
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
                        marginBottom: '14px',
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
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" delay={200}>
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
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
                  transition: 'gap 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                onMouseLeave={e => e.currentTarget.style.gap = '6px'}
              >
                View all services →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CLIENT TICKER ─── */}
      <section
        style={{
          padding: '40px 0',
          background: 'var(--bg-alt)',
          borderTop: '1px solid var(--bdr)',
          borderBottom: '1px solid var(--bdr)',
        }}
      >
        <Reveal direction="up">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', marginBottom: '20px', textAlign: 'center' }}>
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--tx-muted)',
              }}
            >
              Trusted by India&apos;s Leading Enterprises
            </p>
          </div>
        </Reveal>
        <ClientTicker />
        <Reveal direction="up" delay={100}>
          <div style={{ maxWidth: '1200px', margin: '16px auto 0', padding: '0 32px', textAlign: 'center' }}>
            <Link to="/industries" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--ac)' }}>
              Industries we serve →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ─── WHY NEXAOPS ─── */}
      <section style={{ padding: '56px 0', background: 'var(--bg-section)', borderBottom: '1px solid var(--bdr)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <Reveal direction="up">
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 1000,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--ac)',
                marginBottom: '8px',
              }}
            >
              Why NexaOps
            </p>
            <h2
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                fontWeight: 1000,
                color: 'var(--tx-primary)',
                lineHeight: 1.1,
                marginBottom: '28px',
              }}
            >
              Built differently. Proven in the field.
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'var(--bdr)' }}>
            {whyNexaOps.map((item, i) => (
              <Reveal key={item.heading} direction="up" delay={i * 90}>
                <div style={{ background: 'var(--bg-card)', padding: '32px 26px', height: '100%' }}>
                  <div style={{ width: '32px', height: '3px', background: 'var(--ac)', borderRadius: '2px', marginBottom: '16px' }} />
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--tx-primary)',
                      marginBottom: '10px',
                    }}
                  >
                    {item.heading}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--tx-muted)', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: '56px 32px', background: 'var(--bg-dark)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-30%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '500px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(29,111,164,0.14) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <Reveal direction="up">
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--ac)',
              marginBottom: '10px',
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
              marginBottom: '14px',
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
              margin: '0 auto 24px',
            }}
          >
            Map the biggest cost, resilience, and ESG opportunities across your supply chain — in a 30-minute discovery call.
          </p>
          <Link to="/contact">
            <button className="btn btn-outline-white" style={{ padding: '13px 32px', fontSize: '0.95rem' }}>
              Schedule a Consultation
            </button>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
