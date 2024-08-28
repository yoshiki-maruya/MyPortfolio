import { allPosts } from "contentlayer/generated";
import blogDates from "@/utils/const/blogDates";

export default async function sitemap() {
  const baseRoutes = ["", "/about", "/works", "/blog", "/contact", "/privacy-policy"];
  const posts = allPosts.map((post) => ({
    url: `${process.env.WEBSITE_HOST_URL}${post.url}`,
    lastModified: post.date,
  }));

  const routes = [
    ...baseRoutes,
    ...blogDates.map(date => `/blog/${date}`)
  ].map((route) => ({
    url: `${process.env.WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
}
