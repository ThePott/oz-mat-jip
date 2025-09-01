import type { Place } from "../../shared/store/_apiInterfaces";
import FlipCard from "../../package/flip/FlipCard";
import { makeUrlPlaces } from "../../shared/services/apiUtils";
import useBoundStore from "../../shared/store";
import { makeDistanceString } from "../../shared/utils/distanceUtils";

const MatJipCardBack = ({ place }: { place: Place }) => {
  const myCoords = useBoundStore((state) => state.coords);
  const { lat, lon } = place;
  const coords = { lat, lon };

  const distanceImString = makeDistanceString(myCoords, coords);

  return (
    <FlipCard.Back className="h-full w-full p-3 flex flex-col gap-3">
      <p className="text-center font-semibold">{place.title}</p>
      <p>{place.description}</p>
      <p>{JSON.stringify(coords)}</p>
      <p>{distanceImString}</p>
    </FlipCard.Back>
  );
};

const MatJipCardFront = ({ place }: { place: Place }) => {
  const imageSrc = `${makeUrlPlaces("/")}${place.image.src}`;
  return (
    <FlipCard.Front className="h-full w-full">
      <img
        src={imageSrc}
        alt={place.image.alt}
        className="h-full w-full object-cover"
      />
      <p className="absolute bottom-0 w-full p-2 text-center bg-vivid text-vivid-inverted font-semibold">
        {place.title}
      </p>
    </FlipCard.Front>
  );
};

const MatJipCard = ({ place }: { place: Place }) => {
  return (
    <FlipCard className="h-[200px] overflow-hidden rounded-md border-1 border-dimdim hover:border-dimdim ">
      <MatJipCardBack place={place} />
      <MatJipCardFront place={place} />
    </FlipCard>
  );
};

export default MatJipCard;
