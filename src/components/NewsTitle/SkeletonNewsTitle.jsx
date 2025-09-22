import Skeleton from "@mui/material/Skeleton";

export default function SkeletonNewsTitle() {
  return (
    <div className="flex justify-between gap-x-4 text-xs p-1 border-b border-b-[#eeeeee]">
      <div className="w-4/5 sm:w-2/3">
        <Skeleton height={18} />
      </div>
      <div className="hidden sm:flex gap-x-1 text-[#7b7b7b]">
        <Skeleton width={60} />
        <Skeleton width={60} />
      </div>
    </div>
  );
}
