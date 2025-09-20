export default function NewsTitle(props) {
  const { title, pubDate, link, author } = props;

  return (
    <div className="flex justify-between gap-x-4 text-xs p-1 border-b border-b-[#eeeeee]">
      <h4 className="text-[#0D4CDE] line-clamp-1" title={title}>
        <a target="_blank" href={link}>
          {title}
        </a>
      </h4>
      <div className="hidden sm:flex gap-x-1 text-[#7b7b7b]">
        {pubDate && props.hasPubDate && <span>{pubDate.slice(11, 16)}</span>}
        {props.hasAuthor && (
          <>
            {author ? " | " : ""}
            <span className="max-w-25 line-clamp-1">{author}</span>
          </>
        )}
      </div>
    </div>
  );
}
