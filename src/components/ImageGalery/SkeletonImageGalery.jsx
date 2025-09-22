import Skeleton from "@mui/material/Skeleton";

export default function SkeletonImageGalery() {
  return (
    <div
      className="flex-1"
      style={{
        flexBasis: 220,
        maxWidth: 350
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
