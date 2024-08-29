import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import Tag from "../atoms/Tag";

const PostCard = (post: Post) => {
  return (
    <article className="flex flex-col items-start justify-between py-6">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.date}>{format(parseISO(post.date), "LLLL d, yyyy")}</time>
      </div>
      <Link className="link" href={post.url}>
        <div className="group relative">
          <h3 className="mt-2 text-lg font-semibold">
            <p className="relative -z-10">{post.title}</p>
          </h3>
          <p className="relative -z-10 mt-5 line-clamp-3 text-sm leading-4">{post.description}</p>
        </div>
      </Link>
      <div className="relative mt-2 flex gap-2">
        {post.tags.map((tag, idx) => (
          <Tag key={idx} tag={tag} href={`/categories/${tag}`} />
        ))}
      </div>
    </article>
  );
};

export default PostCard;
