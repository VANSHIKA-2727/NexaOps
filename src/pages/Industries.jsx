const industriesData = [
  {
    name: 'Manufacturing',
    description: 'Optimize production supply chains, reduce lead times, and enhance supplier collaboration. We help manufacturers achieve lean operations and build resilient supply networks.',
    services: ['Supply Chain Optimization', 'Vendor Development'],
  },
  {
    name: 'FMCG',
    description: 'Navigate complex distribution networks and rapid demand fluctuations. ProcureEdge enables FMCG companies to balance availability with cost efficiency.',
    services: ['Logistics & Distribution', 'Inventory Management'],
  },
  {
    name: 'Pharmaceutical',
    description: 'Meet regulatory requirements while optimizing costs in highly regulated supply chains. We ensure compliance without sacrificing efficiency or safety.',
    services: ['Procurement Strategy', 'ESG & Compliance'],
  },
  {
    name: 'Retail',
    description: 'Enhance omnichannel supply chains and improve in-stock positions. Our solutions help retailers reduce markdowns while meeting customer expectations.',
    services: ['Inventory Optimization', 'Logistics Strategy'],
  },
  {
    name: 'Automotive',
    description: 'Support lean manufacturing initiatives and manage complex supplier networks. We optimize procurement for this capital-intensive, quality-critical sector.',
    services: ['Supply Chain Management', 'Six Sigma Excellence'],
  },
  {
    name: 'Agribusiness',
    description: 'Address seasonal demand patterns and manage diverse supplier bases. Our solutions enhance value capture across the agriculture supply chain.',
    services: ['Vendor Development', 'Procurement Strategy'],
  },
];

export default function Industries() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="page-hero py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="page-hero__title font-display text-5xl font-bold mb-4">Industry Solutions</h1>
          <p className="page-hero__copy font-body text-xl">
            Sector-specific expertise addressing your unique challenges
          </p>
        </div>
      </section>

      <section className="py-section section-card-stack">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {industriesData.map((industry, idx) => (
            <div
              key={idx}
              className={`${idx % 2 === 0 ? 'theme-surface' : 'theme-surface-muted'} rounded-[1.75rem] border theme-border px-6`}
            >
              <div className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  {/* Left: Accent Bar + Content */}
                  <div className="md:col-span-2">
                    <div className="flex gap-4 mb-4">
                      <div className="w-1 bg-accent-500 rounded-full"></div>
                      <div className="flex-grow">
                        <h3 className="font-display text-3xl font-bold theme-text-strong mb-4">
                          {industry.name}
                        </h3>
                        <p className="font-body theme-text-muted leading-relaxed mb-6">
                          {industry.description}
                        </p>
                        <div>
                          <p className="font-body text-sm font-semibold theme-text-muted mb-3">
                            Key Services
                          </p>
                          <div className="flex flex-wrap gap-3">
                            {industry.services.map((service, i) => (
                              <span
                                key={i}
                                className="theme-chip font-body text-sm px-4 py-2 rounded-full"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Image Placeholder */}
                  <div className="theme-highlight-panel rounded-[1.25rem] h-64 flex items-center justify-center p-8">
                    <div className="text-center">
                      <p className="font-display text-4xl font-bold theme-text-strong mb-3">{industry.name.slice(0, 3).toUpperCase()}</p>
                      <p className="theme-text-secondary font-body text-sm leading-7">
                        Operational playbooks tailored for supplier performance, flow stability, and procurement resilience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
