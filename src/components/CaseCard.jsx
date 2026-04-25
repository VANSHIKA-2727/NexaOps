export default function CaseCard({ industry, title, result, summary, isVisible = false, delay = 0 }) {
  return (
    <div
      className={`case-card opacity-0-init ${
        isVisible ? 'animate-fadeInUp' : ''
      }`}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        animationDelay: `${delay}ms`,
      }}
    >
      <span
        style={{
          display: 'inline-block',
          background: 'var(--accent-light)',
          color: 'var(--accent)',
          border: '1px solid var(--accent-border)',
          borderRadius: '999px',
          padding: '3px 12px',
          fontSize: '0.72rem',
          fontWeight: '600',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '16px',
          width: 'fit-content',
        }}
      >
        {industry}
      </span>

      <h3
        style={{
          fontFamily: 'var(--display)',
          fontSize: '1.05rem',
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '12px',
          lineHeight: '1.4',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: '0.875rem',
          color: 'var(--text-muted)',
          lineHeight: '1.65',
          flexGrow: 1,
          marginBottom: '20px',
        }}
      >
        {summary}
      </p>

      <div
        style={{
          paddingTop: '16px',
          borderTop: '1px solid var(--border)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--display)',
            fontSize: '1.4rem',
            fontWeight: '800',
            color: 'var(--accent)',
            letterSpacing: '-0.01em',
          }}
        >
          {result}
        </span>
        <span
          style={{
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            marginLeft: '8px',
            fontWeight: '500',
          }}
        >
          achieved
        </span>
      </div>
    </div>
  );
}
