const companies = [
  'Zomato',
  'Bajaj Auto',
  'Tata Motors',
  'Infosys',
  'Mahindra',
  'Asian Paints',
  'Hindustan Unilever',
  'Reliance Industries',
  'Wipro',
  'ITC Limited',
  'Sun Pharma',
  'Maruti Suzuki',
];

export default function ClientTicker() {
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="client-ticker-mask overflow-hidden rounded-3xl border theme-border bg-[var(--bg-card)] py-4 shadow-sm">
      <div className="client-ticker-track flex min-w-max whitespace-nowrap hover:[animation-play-state:paused] motion-reduce:animate-none">
        {duplicatedCompanies.map((company, index) => (
          <span
            key={`${company}-${index}`}
            className="mx-3 inline-flex items-center whitespace-nowrap rounded-full border px-5 py-2 font-body text-[0.85rem] font-semibold shadow-sm"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--bdr-strong)',
              color: 'var(--tx-primary)',
            }}
          >
            {company}
          </span>
        ))}
      </div>
    </div>
  );
}
