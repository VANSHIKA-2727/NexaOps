export default function ServiceCard({ title, description, icon, isVisible = false, delay = 0 }) {
  return (
    <article
      className={`service-card opacity-0-init h-full ${
        isVisible ? 'animate-fadeInUp' : ''
      }`}
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        padding: '28px 24px',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease',
        height: '100%',
        animationDelay: `${delay}ms`,
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          background: 'var(--text-primary)',
          color: 'var(--text-on-dark)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '700',
          fontSize: '0.75rem',
          marginBottom: '18px',
          fontFamily: 'var(--display)',
          letterSpacing: '0.03em',
        }}
      >
        {icon}
      </div>

      <h3 style={{ fontFamily: 'var(--display)', fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '10px' }}>
        {title}
      </h3>

      <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
        {description}
      </p>
    </article>
  );
}
