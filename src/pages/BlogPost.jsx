import { Link, useParams } from 'react-router-dom';
import { getBlogBySlug } from '../data/blogs';

export default function BlogPost() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <main className="pt-16 min-h-screen theme-surface-muted">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <p className="font-body theme-text-secondary">Article not found.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16 min-h-screen theme-surface-muted">
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-2 font-body font-semibold text-accent-600 transition-colors hover:text-[var(--text-primary)]"
        >
          ← Back to Insights
        </Link>

        <div className="mb-8 rounded-[2rem] border theme-border bg-[var(--bg-surface)] p-8 shadow-[var(--shadow-sm)]">
          <span className="mb-4 inline-flex rounded-full border px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.18em] theme-chip">
            {blog.category}
          </span>
          <h1 className="mb-3 font-display text-4xl font-bold theme-text-strong md:text-5xl">{blog.title}</h1>
          <p className="theme-text-muted font-body">
            {blog.date} • {blog.readTime}
          </p>
        </div>

        <div className="rounded-[2rem] border theme-border bg-[var(--bg-surface)] p-8 shadow-[var(--shadow-sm)]">
          <p className="mb-8 font-body text-lg leading-8 theme-text-secondary">
            {blog.excerpt}
          </p>
          <div className="space-y-6">
            {blog.body.split('\n\n').map((paragraph) => (
              <p key={paragraph} className="font-body text-lg leading-8 theme-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
