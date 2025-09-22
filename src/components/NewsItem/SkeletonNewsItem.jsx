import Skeleton from "@mui/material/Skeleton";

export default function SkeletonNewsItem() {
  return (
    <div className="flex items-center gap-x-4 py-2 border-b border-b-[#eeeeee]">
      <div className="hidden xs:block shrink-0 w-22.5 overflow-hidden rounded-xs">
        <Skeleton variant="rectangular" width={"100%"} height={64} />
      </div>
      <div className="flex-1">
        <h3 className="w-7/10 xs:w-5/10 text-sm ">
          <Skeleton />
        </h3>
        <div className="flex gap-x-1.25 text-xs mt-1">
          <Skeleton width={60} />
          <Skeleton width={56} />
        </div>
        <p className="text-[12.22px] my-1.5">
          <Skeleton variant="rounded" height={24} />
        </p>
      </div>
    </div>
  );
}
