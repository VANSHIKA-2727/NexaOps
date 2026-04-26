import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ClientTicker from '../components/ClientTicker';
import ThreeBackground from '../components/ThreeBackground';

const services = [
  { title: 'Supply Chain Management', description: 'End-to-end optimisation of supplier networks, planning flow, and resilience for high-growth enterprises.', icon: 'SCM' },
  { title: 'Vendor Development', description: 'Structured supplier uplift programs that improve quality, cost, delivery reliability, and collaboration.', icon: 'VD' },
  { title: 'Procurement Strategy', description: 'Category strategy, negotiation playbooks, and spend visibility built for measurable margin improvement.', icon: 'PPS' },
  { title: 'Six Sigma Excellence', description: 'DMAIC-led process excellence programs that remove waste and increase throughput with discipline.', icon: '6S' },
  { title: 'Logistics Solutions', description: 'Distribution, warehousing, and route optimisation strategies tuned for service and cost control.', icon: 'LOG' },
  { title: 'Inventory Optimisation', description: 'Demand-led inventory design that protects fill rates while releasing trapped working capital.', icon: 'INV' },
];

const whyNexaOps = [
  { heading: 'Deep Sector Knowledge', body: "We've worked across manufacturing, FMCG, pharma, retail and auto — bringing sector-specific playbooks, not generic frameworks." },
  { heading: 'Data-Driven Decisions', body: 'Every engagement starts with spend analytics and benchmarking. Our recommendations are backed by numbers, not intuition.' },
  { heading: 'End-to-End Ownership', body: 'From diagnostic to implementation to capability building — we stay through the entire change, not just the strategy slide.' },
];

const heroStats = [
  { value: 200, suffix: '+', label: 'Projects' },
  { value: 500, prefix: '₹', suffix: 'Cr+', label: 'Value Delivered' },
  { value: 40, suffix: '%', label: 'Avg Cost Reduction' },
  { value: 8, suffix: ' Yrs', label: 'Industry Depth' },
];

const WORDS = ['Supply Chains.', 'Operations.', 'Procurement.', 'Businesses.'];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx];
    let delay = deleting ? speed / 2 : speed;
    if (!deleting && charIdx === current.length) delay = pause;
    const t = setTimeout(() => {
      if (!deleting && charIdx === current.length) { setDeleting(true); return; }
      if (deleting && charIdx === 0) { setDeleting(false); setWordIdx((w) => (w + 1) % words.length); return; }
      setCharIdx((c) => c + (deleting ? -1 : 1));
      setDisplay(current.slice(0, charIdx + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);
  return display;
}

function useCounter(target, duration = 1400, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCounter({ stat, active }) {
  const count = useCounter(stat.value, 1400, active);
  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '2rem', fontWeight: 900, color: 'var(--tx-light)', lineHeight: 1, letterSpacing: '-0.02em' }}>
        {stat.prefix || ''}{count}{stat.suffix}
      </p>
      <p style={{ fontSize: '0.74rem', color: 'var(--ac-light)', marginTop: '4px', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>{stat.label}</p>
    </div>
  );
}

function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('revealed'); obs.unobserve(el); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, direction = 'up', style = {} }) {
  const ref = useScrollReveal();
  const dirMap = { up: 'translateY(30px)', left: 'translateX(-24px)', right: 'translateX(24px)', none: 'none' };
  return (
    <div ref={ref} className="reveal-el" style={{ opacity: 0, transform: dirMap[direction], transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

export default function Home() {
  const typeText = useTypewriter(WORDS);
  const [statsActive, setStatsActive] = useState(false);
  const statsRef = useRef(null);
  const heroRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (!document.getElementById('reveal-style')) {
      const s = document.createElement('style');
      s.id = 'reveal-style';
      s.textContent = `.reveal-el.revealed{opacity:1!important;transform:none!important}`;
      document.head.appendChild(s);
    }
    heroRefs.forEach((r, i) => {
      if (!r.current) return;
      r.current.style.opacity = '0'; r.current.style.transform = 'translateY(22px)';
      r.current.style.transition = `opacity 0.55s ease ${i * 110}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${i * 110}ms`;
      setTimeout(() => { if (r.current) { r.current.style.opacity = '1'; r.current.style.transform = 'none'; } }, 100 + i * 110);
    });
  }, []);

  useEffect(() => {
    const el = statsRef.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStatsActive(true); obs.unobserve(el); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <main style={{ paddingTop: '64px' }}>

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(160deg, var(--bg-dark) 0%, var(--navy-deep) 100%)', minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '40px 0' }}>
        
        {/* Three.js particle network */}
        <ThreeBackground particleCount={130} color="#2979ff" opacity={0.5} speed={0.8} />

        {/* Grid overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(77,166,232,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(77,166,232,0.07) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

        {/* Glow orbs */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,101,192,0.25) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '-8%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,137,123,0.12) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1, width: '100%' }}>
          <div ref={heroRefs[0]}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(21,101,192,0.15)', border: '1px solid rgba(77,166,232,0.25)', borderRadius: '999px', padding: '4px 14px', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ac-light)', marginBottom: '20px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--ac-light)', animation: 'pulse-dot 2s ease infinite' }} />
              Strategic Consulting · Supply Chain · ESG
            </span>
          </div>

          <h1 ref={heroRefs[1]} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(2.6rem, 5.5vw, 4.6rem)', fontWeight: 900, color: 'var(--tx-light)', lineHeight: 1.08, letterSpacing: '-0.03em', maxWidth: '820px', marginBottom: '20px' }}>
            Transforming{' '}
            <span style={{ color: 'var(--ac-light)' }}>
              {typeText}<span style={{ display: 'inline-block', width: '3px', height: '0.85em', background: 'var(--ac-light)', marginLeft: '3px', verticalAlign: 'middle', borderRadius: '2px', animation: 'blink 1s step-end infinite' }} />
            </span>
            <br />
            <span style={{ background: 'linear-gradient(90deg, var(--tx-light) 0%, var(--ac-light) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Driving Measurable Growth.</span>
          </h1>

          <p ref={heroRefs[2]} style={{ fontSize: '1.08rem', color: 'var(--tx-light-dim)', lineHeight: 1.72, maxWidth: '520px', marginBottom: '28px' }}>
            Strategic procurement and supply chain solutions for enterprises seeking competitive advantage and operational excellence across India.
          </p>

          <div ref={heroRefs[3]} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/contact">
              <button className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '11px 26px' }}>Book a Free Consultation</button>
            </Link>
            <Link to="/case-studies">
              <button className="btn btn-outline-white" style={{ fontSize: '0.9rem', padding: '11px 26px' }}>View Case Studies →</button>
            </Link>
          </div>

          {/* Stats row */}
          <div ref={statsRef} style={{ display: 'flex', gap: '0', marginTop: '48px', flexWrap: 'wrap', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)', border: '1px solid rgba(77,166,232,0.15)', borderRadius: '16px', padding: '20px 32px', width: 'fit-content' }}>
            {heroStats.map((stat, i) => (
              <div key={stat.label} style={{ display: 'flex', alignItems: 'stretch' }}>
                <StatCounter stat={stat} active={statsActive} />
                {i < heroStats.length - 1 && <div style={{ width: '1px', background: 'rgba(77,166,232,0.18)', margin: '0 28px' }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding: '52px 0', background: 'var(--bg-section)', borderBottom: '1px solid var(--bdr)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <Reveal>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ac)', marginBottom: '6px' }}>What We Do</p>
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 900, color: 'var(--tx-primary)', lineHeight: 1.08, marginBottom: '28px', letterSpacing: '-0.02em' }}>
              End-to-end procurement &amp; supply chain expertise
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {services.map((service, i) => (
              <Reveal key={service.title} direction="up" delay={i * 65}>
                <Link to="/services" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="theme-card service-card" style={{ padding: '28px', cursor: 'pointer', height: '100%', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'var(--ac)', opacity: 0, transition: 'opacity 0.3s' }} className="card-accent-line" />
                    <div style={{ width: '42px', height: '42px', background: 'var(--ac-tint)', border: '1px solid var(--ac-border)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ac)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.04em', marginBottom: '16px', fontFamily: 'DM Sans, sans-serif' }}>
                      {service.icon}
                    </div>
                    <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--tx-primary)', marginBottom: '8px' }}>{service.title}</h3>
                    <p style={{ fontSize: '0.855rem', color: 'var(--tx-muted)', lineHeight: 1.65 }}>{service.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <div style={{ marginTop: '22px', textAlign: 'center' }}>
              <Link to="/services" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--ac)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'gap 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.gap = '10px'} onMouseLeave={e => e.currentTarget.style.gap = '6px'}>
                View all services →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CLIENT TICKER ── */}
      <section style={{ padding: '32px 0', background: 'var(--bg-alt)', borderBottom: '1px solid var(--bdr)' }}>
        <Reveal>
          <p style={{ textAlign: 'center', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--tx-muted)', marginBottom: '18px' }}>
            Trusted by India&apos;s Leading Enterprises
          </p>
        </Reveal>
        <ClientTicker />
        <Reveal delay={80}>
          <div style={{ textAlign: 'center', marginTop: '14px' }}>
            <Link to="/industries" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--ac)' }}>Industries we serve →</Link>
          </div>
        </Reveal>
      </section>

      {/* ── WHY NEXAOPS ── */}
      <section style={{ padding: '52px 0', background: 'var(--bg-section)', borderBottom: '1px solid var(--bdr)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <Reveal>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ac)', marginBottom: '6px' }}>Why NexaOps</p>
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 900, color: 'var(--tx-primary)', lineHeight: 1.1, marginBottom: '28px', letterSpacing: '-0.02em' }}>
              Built differently. Proven in the field.
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
            {whyNexaOps.map((item, i) => (
              <Reveal key={item.heading} direction="up" delay={i * 90}>
                <div className="theme-card" style={{ padding: '28px 24px', height: '100%', borderTop: '3px solid var(--ac)', borderRadius: '12px' }}>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--tx-primary)', marginBottom: '10px' }}>{item.heading}</h3>
                  <p style={{ fontSize: '0.87rem', color: 'var(--tx-muted)', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '56px 32px', background: 'linear-gradient(135deg, var(--bg-dark) 0%, var(--navy-deep) 100%)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <ThreeBackground particleCount={60} color="#2979ff" opacity={0.3} speed={0.5} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(77,166,232,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(77,166,232,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ac-light)', marginBottom: '10px' }}>Let&apos;s Work Together</p>
            <h2 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: 'var(--tx-light)', marginBottom: '14px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              Ready to optimise your operations?
            </h2>
            <p style={{ color: 'var(--tx-light-dim)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 26px' }}>
              Map the biggest cost, resilience, and ESG opportunities across your supply chain — in a 30-minute discovery call.
            </p>
            <Link to="/contact">
              <button className="btn btn-primary" style={{ padding: '13px 34px', fontSize: '0.95rem' }}>Schedule a Consultation</button>
            </Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.4)} }
        .service-card:hover .card-accent-line { opacity: 1 !important; }
      `}</style>
    </main>
  );
}
