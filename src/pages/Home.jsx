import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ClientTicker from '../components/ClientTicker';
import ServiceCard from '../components/ServiceCard';
import { useInView } from '../hooks/useInView';

const heroTitle = 'Transforming Supply Chains. Driving Sustainable Growth.';

const services = [
  {
    title: 'Supply Chain Management',
    description: 'End-to-end optimisation of supplier networks, planning flow, and resilience for high-growth enterprises.',
    icon: '⌘',
  },
  {
    title: 'Vendor Development',
    description: 'Structured supplier uplift programs that improve quality, cost, delivery reliability, and collaboration.',
    icon: '⇄',
  },
  {
    title: 'Procurement Strategy',
    description: 'Category strategy, negotiation playbooks, and spend visibility built for measurable margin improvement.',
    icon: '◫',
  },
  {
    title: 'Six Sigma Excellence',
    description: 'DMAIC-led process excellence programs that remove waste and increase throughput with discipline.',
    icon: '△',
  },
  {
    title: 'Logistics Solutions',
    description: 'Distribution, warehousing, and route optimisation strategies tuned for service and cost control.',
    icon: '➜',
  },
  {
    title: 'Inventory Optimisation',
    description: 'Demand-led inventory design that protects fill rates while releasing trapped working capital.',
    icon: '◌',
  },
];

const trustedCompanies = ['Tata Group', 'Infosys', 'Mahindra', 'Reliance'];

const stats = [
  { label: 'Projects Delivered', value: 200, suffix: '+' },
  { label: 'Industries Served', value: 15, suffix: '+' },
  { label: 'Avg Cost Reduction', value: 40, suffix: '%' },
  { label: 'Experience', value: 8, suffix: ' Yrs' },
  { label: 'Value Unlocked', value: 500, prefix: '₹', suffix: 'Cr+' },
];

function easeOutCubic(progress) {
  return 1 - (1 - progress) ** 3;
}

function CountUpValue({ value, prefix = '', suffix = '', start }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start) {
      return undefined;
    }

    let frameId;
    const startTime = performance.now();
    const duration = 1500;

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(update);
      }
    };

    frameId = window.requestAnimationFrame(update);
    return () => window.cancelAnimationFrame(frameId);
  }, [start, value]);

  return (
    <span className="animate-countUp">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [statsRef, statsInView] = useInView();
  const [servicesRef, servicesInView] = useInView();

  const heroWords = useMemo(() => heroTitle.split(' '), []);

  return (
    <main className="pt-16">
      <section className="page-hero home-grid relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 hidden h-72 w-72 translate-x-12 -translate-y-10 text-white/20 md:block"
          fill="none"
          viewBox="0 0 320 320"
        >
          <path d="M34 92L226 34M96 180L286 122M144 266L286 208" stroke="currentColor" strokeWidth="2" />
          <circle cx="226" cy="34" r="6" fill="currentColor" />
          <circle cx="286" cy="122" r="6" fill="currentColor" />
          <circle cx="286" cy="208" r="6" fill="currentColor" />
        </svg>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center md:text-left">
            <p className="theme-text-on-dark-muted mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 font-body text-sm uppercase tracking-[0.28em]">
              Procurement. Logistics. ESG. Transformation.
            </p>

            <h1 className="theme-text-on-dark mb-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              {heroWords.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className="hero-word mr-[0.32em] inline-block motion-reduce:opacity-100"
                  style={{ animationDelay: `${index * 100}ms`, opacity: 1 }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p className="theme-text-on-dark-muted mb-8 max-w-2xl font-body text-lg leading-8 sm:text-xl md:mx-0">
              Strategic procurement and supply chain consulting for enterprises that want faster decisions, cleaner operations, and sustainable growth.
            </p>

            <div className="mb-8">
              <p className="theme-text-on-dark-muted mb-4 font-body text-sm font-semibold uppercase tracking-[0.22em]">
                Trusted by leading enterprises
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                {trustedCompanies.map((company) => (
                  <span
                    key={company}
                    className="theme-text-on-dark rounded-full border border-white/20 px-4 py-2 font-body text-sm font-medium"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <Link to="/services" className="w-full sm:w-auto">
                <Button
                  label="Explore Services"
                  variant="outline-white"
                  className="w-full sm:w-auto"
                />
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  label="Book Consultation"
                  variant="primary"
                  className="w-full sm:w-auto"
                  style={{ background: '#fff', color: 'var(--text-primary)', borderColor: '#fff' }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={statsRef}
        className="theme-surface section-card-stack border-y theme-border"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {stats.map((stat, index) => (
              <article
                key={stat.label}
                className={`opacity-0-init rounded-2xl p-6 ${
                  statsInView ? 'animate-fadeInUp' : ''
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  borderLeftWidth: '2px',
                  borderLeftColor: '#1D6FA4',
                  background: 'var(--bg-surface)',
                  borderTop: '1px solid var(--border)',
                  borderRight: '1px solid var(--border)',
                  borderBottom: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <p
                  className="mb-2 font-display text-4xl font-bold"
                  style={{ color: stat.label === 'Avg Cost Reduction' ? 'var(--accent)' : 'var(--text-primary)' }}
                >
                  <CountUpValue
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    start={statsInView}
                  />
                </p>
                <p className="font-body text-sm font-medium theme-text-secondary">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="py-section theme-surface section-card-stack">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.24em] text-accent-600 dark:text-accent-300">
              What We Do
            </p>
            <h2 className="mb-4 font-display text-4xl font-bold theme-text-strong">
              Consulting built for operational clarity and measurable savings
            </h2>
            <p className="font-body text-lg theme-text-secondary">
              We combine strategic sourcing, operational excellence, and supply chain visibility to help leadership teams move faster with less friction.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                isVisible={servicesInView}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="theme-surface-muted py-section section-card-stack">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.24em] text-accent-600 dark:text-accent-300">
              Industries We Serve
            </p>
            <h2 className="mb-4 font-display text-4xl font-bold theme-text-strong">
              Trusted by ambitious Indian enterprises across sectors
            </h2>
            <p className="font-body text-lg theme-text-secondary">
              From manufacturing and automotive to FMCG, pharma, and technology-led operations, our work is designed for scale.
            </p>
          </div>
          <ClientTicker />
        </div>
      </section>

      <section className="py-section section-card-stack" style={{ background: 'var(--bg-strong)' }}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="theme-text-on-dark mb-6 font-display text-4xl font-bold">
            Ready to optimise your operations?
          </h2>
          <p className="theme-text-on-dark-muted mx-auto mb-8 max-w-2xl font-body text-lg">
            Let’s map the biggest cost, resilience, and ESG opportunities across your supply chain.
          </p>
          <Link to="/contact" className="inline-flex">
            <Button
              label="Schedule a Consultation"
              variant="outline-white"
              className="mx-auto"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
