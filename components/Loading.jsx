/** @format */

import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[250px] w-[300px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-[300px]" />
          <Skeleton className="h-6 w-[300px]" />
        </div>
      </div>
    </>
  );
};

export default Loading;
