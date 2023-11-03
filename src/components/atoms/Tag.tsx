export type ITag = {
  tag: string;
};

const Tag: React.FC<ITag> = ({ tag }) => {
  return (
    <div className="rounded-full border-blue-100 bg-blue-200 text-center align-middle text-xs">
      <p className="px-2">#{tag}</p>
    </div>
  );
};

export default Tag;
