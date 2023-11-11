import { allPosts } from 'contentlayer/generated'

export default async function sitemap() {
  const posts = allPosts.map((post) => ({
    url: `${process.env.WEBSITE_HOST_URL}${post.url}`,
    lastModified: post.date,
  }))

  const routes = ['', '/about', '/works', '/blog', '/contact'].map((route) => ({
    url: `${process.env.WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}