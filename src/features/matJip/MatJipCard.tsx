import type { Place } from "../../shared/store/_apiInterfaces";
import FlipCard from "../../package/flip/FlipCard";
import { makeUrlPlaces } from "../../shared/services/apiUtils";

const MatJipCard = ({ place }: { place: Place }) => {
  const imageSrc = `${makeUrlPlaces("/")}${place.image.src}`;
  return (
    <FlipCard className="h-[200px] overflow-hidden rounded-md border-1 border-dimdim hover:border-dimdim ">
      <FlipCard.Back>{JSON.stringify(place)}</FlipCard.Back>
      <FlipCard.Front>
        <img
          src={imageSrc}
          alt={place.image.alt}
          className="h-full w-full object-cover"
        />
      </FlipCard.Front>
    </FlipCard>
  );
};

export default MatJipCard;
