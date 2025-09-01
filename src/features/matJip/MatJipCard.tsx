import type { Place } from "../../shared/store/_apiInterfaces";
import FlipCard from "../../package/flip/FlipCard";
import { makeUrlPlaces } from "../../shared/services/apiUtils";

const MatJipCardFront = ({ place }: { place: Place }) => {
  const imageSrc = `${makeUrlPlaces("/")}${place.image.src}`;
  return (
    <FlipCard.Front>
      <div className="ralative h-full w-full">
        <img
          src={imageSrc}
          alt={place.image.alt}
          className="h-full w-full object-cover"
        />
        <p className="absolute bottom-0 w-full p-2 text-center bg-vivid text-vivid-inverted font-semibold">
          {place.title}
        </p>
      </div>
    </FlipCard.Front>
  );
};

const MatJipCard = ({ place }: { place: Place }) => {
  return (
    <FlipCard className="h-[200px] overflow-hidden rounded-md border-1 border-dimdim hover:border-dimdim ">
      <FlipCard.Back>{JSON.stringify(place)}</FlipCard.Back>
      <MatJipCardFront place={place} />
    </FlipCard>
  );
};

export default MatJipCard;
