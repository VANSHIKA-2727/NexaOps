import BlogCard from '../components/BlogCard';
import { staticBlogs } from '../data/blogs';

export default function Blog() {
  const recentPosts = staticBlogs.slice(0, 3);

  return (
    <main className="pt-16">
      <section className="page-hero py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="page-hero__title mb-4 font-display text-5xl font-bold">Insights & Articles</h1>
          <p className="page-hero__copy font-body text-xl">
            Expert perspectives on procurement, supply chain, Six Sigma, and ESG-led transformation.
          </p>
        </div>
      </section>

      <section className="theme-surface-muted py-section section-card-stack">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <aside className="lg:col-span-1">
              <div className="theme-card rounded-3xl p-6 mb-8">
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
                <ul className="space-y-4 font-body text-sm theme-text-secondary">
                  {recentPosts.map((post) => (
                    <li key={post.slug} className="border-b theme-border pb-4 last:border-b-0 last:pb-0">
                      <p className="font-semibold theme-text-strong">{post.title}</p>
                      <p className="mt-1 theme-text-muted">{post.readTime}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
