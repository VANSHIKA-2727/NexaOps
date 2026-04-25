import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import PageHeader from '../components/PageHeader';
import { staticBlogs } from '../data/blogs';

export default function Blog() {
  const recentPosts = staticBlogs.slice(0, 3);

  return (
    <main>
      <PageHeader
        title="Insights & Articles"
        subtitle="Expert perspectives on procurement, supply chain, and business transformation."
        breadcrumb="Blog"
      />

      <section className="theme-surface-muted py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <aside className="lg:col-span-1">
              <div className="theme-card rounded-3xl p-6 mb-6">
                <h3 className="mb-4 font-display text-lg font-bold theme-text-strong">
                  Categories
                </h3>
                <ul className="space-y-2 font-body theme-text-secondary">
                  {['Strategy', 'Procurement', 'Supply Chain', 'Sustainability', 'Six Sigma'].map((category) => (
                    <li key={category} className="rounded-full border theme-border px-4 py-2">
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="theme-card rounded-3xl p-6">
                <h3 className="mb-4 font-display text-lg font-bold theme-text-strong">
                  Recent Posts
                </h3>
                <ul className="space-y-3 font-body text-sm theme-text-secondary">
                  {recentPosts.map((post) => (
                    <li key={post.slug} className="border-b theme-border pb-3 last:border-b-0 last:pb-0">
                      <Link to={`/blog/${post.slug}`} className="font-semibold theme-text-strong transition-colors hover:text-[var(--ac)]">
                        {post.title}
                      </Link>
                      <p className="mt-1 theme-text-muted">{post.readTime}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {staticBlogs.map((blog) => (
                  <BlogCard
                    key={blog.slug}
                    title={blog.title}
                    date={blog.date}
                    category={blog.category}
                    excerpt={blog.excerpt}
                    slug={blog.slug}
                    readTime={blog.readTime}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
