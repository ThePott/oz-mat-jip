import Skeleton from "../../shared/components/skeleton/Skeleton";

const MatJipSkeleton = () => {
  const justIndexArray = Array.from({ length: 30 }, (_, index) => index);
  return (
    <div className="overflow-hidden grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 pt-3 px-3">
      {justIndexArray.map((index) => (
        <Skeleton key={index} heightInPixel={200} className="rounded-md" />
      ))}
    </div>
  );
};

export default MatJipSkeleton;
