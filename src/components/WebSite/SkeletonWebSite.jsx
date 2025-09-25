import Skeleton from "@mui/material/Skeleton";

export default function SkeletonWebSite() {
  return (
    <div className="max-w-full w-162.5">
      <div className="max-w-full flex gap-x-2 items-center">
        <div className="max-w-[calc(100%-24px)] flex flex-col">
          <Skeleton className="max-w-6/10" width={150} height={20}></Skeleton>
          <Skeleton className="max-w-8/10" width={200} height={18}></Skeleton>
        </div>
      </div>
      <div>
        <h3 className="relative mt-0.75 pt-1.25">
          <Skeleton className="max-w-9/10" width={300} height={30} />
        </h3>
        <Skeleton className="max-w-full" width={500} height={40}></Skeleton>
      </div>
    </div>
  );
}
