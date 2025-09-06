import Skeleton from "@mui/material/Skeleton";

export default function ImageGalery(props) {
  const {
    position,
    thumbnailWidth,
    thumbnailHeight,
    thumbnailUrl,
    googleUrl,
    title,
    link,
    source,
    loading = false,
  } = props;

  const aspectRatio = thumbnailWidth / thumbnailHeight;
  const dynamicWidth = aspectRatio * 180;

  return loading === false ? (
    <div
      key={position}
      className="flex grow shrink"
      style={{
        maxWidth: thumbnailWidth,
        flexBasis: dynamicWidth,
      }}
    >
      <div className="hover:*:first:shadow-[0_2px_12px_0_rgba(0,0,0,.3)] w-full">
        <div className="rounded-xl bg-[#f7f7f7] overflow-hidden transition-shadow w-full h-45">
          <a className="flex items-center w-full h-full" href={googleUrl}>
            <img
              loading="lazy"
              className="object-cover object-top w-full h-full"
              src={thumbnailUrl}
              alt={title}
              width={thumbnailWidth}
              height={thumbnailHeight}
              style={{ maxHeight: thumbnailHeight }}
            />
          </a>
        </div>
        <div className="mt-2 mx-1 mb-0.5">
          <a href={link} className="hover:*:first:underline">
            <span className="text-xs text-[#5e5e5e]">{source}</span>
            <p className="text-sm text-[#474747] line-clamp-1">{title}</p>
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div
      className="flex grow"
      style={{
        maxWidth: 280,
        flexBasis: 200,
        maxHeight: 228,
      }}
    >
      <div className="w-full h-full">
        <Skeleton height={180} className="rounded-xl" />
        <div className="mt-2 mx-1 mb-0.5">
          <Skeleton width={84} height={18} />
          <Skeleton height={20} />
        </div>
      </div>
    </div>
  );
}