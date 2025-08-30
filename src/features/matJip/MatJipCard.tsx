import type { Place } from "../../shared/store/_apiInterfaces";

const MatJipCard = ({ place }: { place: Place }) => {
  return (
    <div className="h-[200px] rounded-md border-1 border-dimdim hover:border-dim p-3 overflow-hidden">
      {JSON.stringify(place)}
    </div>
  );
};

export default MatJipCard;
