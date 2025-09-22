import Skeleton from "@mui/material/Skeleton";

export default function SkeletonNewsPicture() {
  return (
    <div className="flex flex-col items-center w-1/2">
      <div className="w-31.25 mb-2.5 rounded-xs overflow-hidden">
        <Skeleton variant="rectangular" height={125} />
      </div>
      <Skeleton variant="rounded" width={100} />
    </div>
  );
}
