import { Link } from 'react-router-dom';

export default function BlogCard({ title, date, category, excerpt, slug, readTime }) {
  return (
    <div
      className="blog-card"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        borderRadius: '10px',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', gap: '12px' }}>
        <span
          style={{
            background: 'var(--accent-light)',
            color: 'var(--accent)',
            border: '1px solid var(--accent-border)',
            borderRadius: '999px',
            padding: '3px 12px',
            fontSize: '0.72rem',
            fontWeight: '600',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          {category}
        </span>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{date}</span>
      </div>

      <h3
        style={{
          fontFamily: 'var(--display)',
          fontSize: '1rem',
          fontWeight: '700',
          color: 'var(--text-primary)',
          lineHeight: '1.45',
          marginBottom: '10px',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: '0.855rem',
          color: 'var(--text-muted)',
          lineHeight: '1.65',
          flexGrow: 1,
          marginBottom: '20px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {excerpt}
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border)', gap: '12px' }}>
        {readTime && (
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{readTime}</span>
        )}
        <Link
          to={`/blog/${slug}`}
          style={{
            fontSize: '0.85rem',
            fontWeight: '600',
            color: 'var(--accent)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          Read article <span>→</span>
        </Link>
      </div>
    </div>
  );
}
