import Link from "next/link";

export type ITag = {
  tag: string;
  href: string;
};

const Tag: React.FC<ITag> = ({ tag, href }) => {
  return (
    <Link href={href}>
      <div className="rounded-full border-blue-100 bg-blue-200 text-center align-middle text-xs hover:bg-blue-300">
        <p className="px-2">#{tag}</p>
      </div>
    </Link>
  );
};

export default Tag;
