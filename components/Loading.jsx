/** @format */

import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[150px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-[250px]" />
          <Skeleton className="h-6 w-[200px]" />
        </div>
      </div>
    </>
  );
};

export default Loading;
