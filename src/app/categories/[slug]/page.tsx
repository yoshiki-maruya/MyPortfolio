import PostCard from "@/components/molecules/PostCard";
import { allPosts } from "contentlayer/generated";

export async function generateStaticParams() {
  const categories = [
    ...new Set<string>(allPosts.flatMap((post) => post.tags ?? [])),
  ]
  return categories.map((category) => ({ params: { category } }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = allPosts.filter((post) => post.tags.includes(decodeURI(params.slug)));
  if (!posts.length) throw new Error(`Posts not found for slug: ${params.slug}`);
  return {
    title: `# ${decodeURI(params.slug)} - MyCanvas`,
    keywords: decodeURI(params.slug),
    openGraph: {
      title: `# ${decodeURI(params.slug)} - MyCanvas`,
      type: "website",
      url: `${process.env.WEBSITE_HOST_URL}/categories/${params.slug}`,
    },
  };
}

export default function CategoryLayout({ params }: { params: { slug: string } }) {
  const posts = allPosts.filter((post) => post.tags.includes(decodeURI(params.slug)));

  return (
    <div className="mx-auto max-w-xl px-6 py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Blog</h1>
      <h2 className="mb-4 text-xl font-black"># {`${decodeURI(params.slug)}`}</h2>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}