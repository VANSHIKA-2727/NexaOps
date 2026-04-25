import { useMemo, useState } from 'react';

const initialCalculatorState = {
  freightKm: 18000,
  supplierVisits: 16,
  localSupplierPct: 62,
  loadFactor: 74,
};

export default function Dashboard() {
  const userName = 'Rahul S.';
  const [calculatorInput, setCalculatorInput] = useState(initialCalculatorState);
  const [score, setScore] = useState(74);

  const statCards = [
    { label: 'Active Projects', value: '3', icon: '📊' },
    { label: 'Pending Reports', value: '1', icon: '📋' },
    { label: 'ESG Score', value: '74', icon: '🌐' },
    { label: 'Next Meeting', value: 'Apr 28', icon: '📅' },
  ];

  const engagements = [
    {
      project: 'Supply Chain Audit - Acme Corp',
      service: 'Supply Chain Management',
      status: 'In Progress',
      startDate: 'Mar 15, 2025',
    },
    {
      project: 'Vendor Optimisation - TechForce',
      service: 'Vendor Development',
      status: 'In Progress',
      startDate: 'Feb 01, 2025',
    },
    {
      project: 'Procurement Strategy - Global Industries',
      service: 'Procurement Strategy',
      status: 'Completed',
      startDate: 'Dec 10, 2024',
    },
    {
      project: 'Six Sigma Initiative - Manufacturing Plus',
      service: 'Process Excellence',
      status: 'Scheduled',
      startDate: 'May 01, 2025',
    },
    {
      project: 'ESG Assessment - Retail Solutions',
      service: 'ESG & Sustainability',
      status: 'In Progress',
      startDate: 'Mar 20, 2025',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'theme-status-completed';
      case 'In Progress':
        return 'theme-status-progress';
      case 'Scheduled':
        return 'theme-status-scheduled';
      default:
        return 'theme-status-default';
    }
  };

  const scoreMeta = useMemo(() => {
    if (score >= 80) {
      return {
        label: 'Excellent',
        stroke: '#1D6FA4',
        textColor: 'var(--accent)',
      };
    }

    if (score >= 60) {
      return {
        label: 'Good',
        stroke: '#2A85BC',
        textColor: '#2A85BC',
      };
    }

    if (score >= 40) {
      return {
        label: 'Needs Improvement',
        stroke: '#35577D',
        textColor: 'var(--text-secondary)',
      };
    }

    return {
      label: 'Critical',
      stroke: '#0B1F3A',
      textColor: 'var(--text-primary)',
    };
  }, [score]);

  const recommendations = useMemo(() => {
    const tips = [];

    if (calculatorInput.freightKm > 25000) {
      tips.push('Reduce annual freight exposure by consolidating lane planning and rebalancing distribution hubs.');
    }
    if (calculatorInput.localSupplierPct < 50) {
      tips.push('Expand local supplier coverage to lower logistics emissions and improve response time.');
    }
    if (calculatorInput.supplierVisits > 18) {
      tips.push('Shift routine supplier reviews to remote governance and reserve travel for critical interventions.');
    }
    if (calculatorInput.loadFactor < 70) {
      tips.push('Improve truck load factor through shipment consolidation and route scheduling discipline.');
    }

    return tips.slice(0, 3).length > 0
      ? tips.slice(0, 3)
      : [
          'Maintain the current supplier mix and keep improving local sourcing maturity.',
          'Continue optimising freight routes to preserve carbon efficiency gains.',
          'Track load factor weekly so transport efficiency stays visible to operations teams.',
        ];
  }, [calculatorInput]);

  const circumference = 2 * Math.PI * 54;
  const dashOffset = circumference - (score / 100) * circumference;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCalculatorInput((current) => ({
      ...current,
      [name]: Number(value),
    }));
  };

  const handleCalculate = () => {
    const nextScore = 100
      - calculatorInput.freightKm / 1000
      + calculatorInput.localSupplierPct * 0.3
      - calculatorInput.supplierVisits * 0.5
      + calculatorInput.loadFactor * 0.2;

    setScore(Math.max(0, Math.min(100, Math.round(nextScore))));
  };

  return (
    <main className="min-h-screen pt-16 theme-surface-muted">
      <section className="theme-surface section-card-stack border-b theme-border">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="mb-2 font-display text-4xl font-bold theme-text-strong">
            Client Portal
          </h1>
          <p className="font-body text-lg theme-text-secondary">
            Welcome, {userName}
          </p>
        </div>
      </section>

      <section className="section-card-stack py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {statCards.map((card) => (
              <article
                key={card.label}
                className="theme-card rounded-3xl p-6 transition-shadow duration-300 hover:shadow-md"
              >
                <div className="mb-3 flex items-start justify-between">
                  <span className="text-3xl">{card.icon}</span>
                </div>
                <p className="mb-2 font-body text-sm theme-text-secondary">{card.label}</p>
                <p className="font-display text-3xl font-bold theme-text-strong">{card.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card-stack pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="theme-card overflow-hidden rounded-3xl">
            <div className="border-b theme-border px-6 py-6">
              <h2 className="font-display text-2xl font-bold theme-text-strong">
                Recent Engagements
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="theme-table-head border-b theme-border">
                    <th className="px-6 py-4 text-left font-body font-semibold theme-text-secondary">
                      Project Name
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold theme-text-secondary">
                      Service
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold theme-text-secondary">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left font-body font-semibold theme-text-secondary">
                      Start Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {engagements.map((engagement) => (
                    <tr key={engagement.project} className="theme-table-row border-b theme-border">
                      <td className="px-6 py-4 font-body theme-text-strong">{engagement.project}</td>
                      <td className="px-6 py-4 font-body theme-text-secondary">{engagement.service}</td>
                      <td className="px-6 py-4">
                        <span className={`font-body text-sm font-semibold ${getStatusColor(engagement.status)}`}>
                          {engagement.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-body theme-text-secondary">{engagement.startDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card-stack pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="theme-card rounded-[2rem] p-8">
              <div className="mb-8">
                <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.24em] text-accent-600 dark:text-accent-300">
                  ESG Supply Chain Report
                </p>
                <h2 className="font-display text-3xl font-bold theme-text-strong">
                  ESG Carbon Calculator
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="freightKm" className="mb-2 block font-body font-medium theme-text-secondary">
                    Annual freight distance (km)
                  </label>
                  <input
                    id="freightKm"
                    name="freightKm"
                    type="number"
                    value={calculatorInput.freightKm}
                    onChange={handleChange}
                    className="theme-input w-full rounded-xl px-4 py-3 font-body"
                  />
                </div>

                <div>
                  <label htmlFor="supplierVisits" className="mb-2 block font-body font-medium theme-text-secondary">
                    Supplier visits per year
                  </label>
                  <input
                    id="supplierVisits"
                    name="supplierVisits"
                    type="number"
                    value={calculatorInput.supplierVisits}
                    onChange={handleChange}
                    className="theme-input w-full rounded-xl px-4 py-3 font-body"
                  />
                </div>

                <div className="md:col-span-2">
                  <div className="mb-2 flex items-center justify-between font-body font-medium theme-text-secondary">
                    <label htmlFor="localSupplierPct">Local supplier mix</label>
                    <span>{calculatorInput.localSupplierPct}% local</span>
                  </div>
                  <input
                    id="localSupplierPct"
                    name="localSupplierPct"
                    type="range"
                    min="0"
                    max="100"
                    value={calculatorInput.localSupplierPct}
                    onChange={handleChange}
                    className="theme-range h-2 w-full cursor-pointer appearance-none rounded-full"
                  />
                </div>

                <div className="md:col-span-2">
                  <div className="mb-2 flex items-center justify-between font-body font-medium theme-text-secondary">
                    <label htmlFor="loadFactor">Average truck load factor</label>
                    <span>{calculatorInput.loadFactor}%</span>
                  </div>
                  <input
                    id="loadFactor"
                    name="loadFactor"
                    type="range"
                    min="0"
                    max="100"
                    value={calculatorInput.loadFactor}
                    onChange={handleChange}
                    className="theme-range h-2 w-full cursor-pointer appearance-none rounded-full"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={handleCalculate}
                className="btn btn-primary mt-8"
              >
                Calculate ESG Score
              </button>
            </div>

            <div className="theme-card rounded-[2rem] p-8">
              <div className="flex flex-col items-center text-center">
                <svg viewBox="0 0 140 140" className="mb-6 h-44 w-44">
                  <circle cx="70" cy="70" r="54" fill="none" stroke="rgba(29,111,164,0.12)" strokeWidth="10" />
                  <circle
                    cx="70"
                    cy="70"
                    r="54"
                    fill="none"
                    stroke={scoreMeta.stroke}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    transform="rotate(-90 70 70)"
                  />
                  <text
                    x="50%"
                    y="48%"
                    textAnchor="middle"
                    style={{ fill: 'var(--text-primary)', fontFamily: 'var(--display)', fontSize: '1.6rem', fontWeight: 700 }}
                  >
                    {score}
                  </text>
                  <text
                    x="50%"
                    y="63%"
                    textAnchor="middle"
                    style={{ fill: 'var(--accent)', fontFamily: 'var(--sans)', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}
                  >
                    ESG Score
                  </text>
                </svg>

                <p className="mb-2 font-display text-2xl font-bold" style={{ color: scoreMeta.textColor }}>
                  {scoreMeta.label}
                </p>
                <p className="mb-8 font-body theme-text-secondary">
                  Simulated score based on logistics intensity, supplier proximity, visits, and truck utilisation.
                </p>

                <div
                  className="w-full rounded-[1.5rem] p-6 text-left"
                  style={{ background: 'var(--accent-light)', border: '1px solid var(--accent-border)' }}
                >
                  <h3 className="mb-4 font-display text-xl font-bold theme-text-strong">
                    Improvement recommendations
                  </h3>
                  <ul className="space-y-3">
                    {recommendations.map((recommendation) => (
                      <li key={recommendation} className="flex gap-3 font-body leading-7 theme-text-secondary">
                        <span className="text-accent-500">→</span>
                        <span>{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
