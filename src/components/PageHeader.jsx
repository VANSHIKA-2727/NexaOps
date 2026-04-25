import { Link } from 'react-router-dom';

export default function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <div
      style={{
        background: 'var(--bg-dark)',
        paddingTop: '82px',
        paddingBottom: '26px',
        paddingLeft: '32px',
        paddingRight: '32px',
        borderBottom: '1px solid rgba(242,240,236,0.08)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {breadcrumb && (
          <div
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              marginBottom: '12px',
              fontSize: '0.78rem',
              color: 'var(--tx-light-dim)',
            }}
          >
            <Link to="/" style={{ color: 'var(--tx-light-dim)', textDecoration: 'none' }}>
              Home
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--ac)' }}>{breadcrumb}</span>
          </div>
        )}
        <h1
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: 'var(--tx-light)',
            lineHeight: 1.15,
            marginBottom: subtitle ? '8px' : 0,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--tx-light-dim)',
              maxWidth: '560px',
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
