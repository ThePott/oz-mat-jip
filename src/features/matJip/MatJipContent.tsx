import type { Place } from "../../shared/store/_apiInterfaces";
import MatJipCard from "./MatJipCard";

const MatJipContent = ({ placeArray }: { placeArray: Place[] }) => {
  return (
    <div className="h-full overflow-x-hidden overflow-y-scroll grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 pt-3 pl-3">
      {placeArray.map((place) => (
        <MatJipCard key={place.id} place={place} />
      ))}
    </div>
  );
};

export default MatJipContent;
