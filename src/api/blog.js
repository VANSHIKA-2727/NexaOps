import { getBlogBySlug, staticBlogs } from '../data/blogs';

export const fetchBlogs = async () => ({ data: staticBlogs });

export const fetchBlogBySlug = async (slug) => ({ data: getBlogBySlug(slug) });
