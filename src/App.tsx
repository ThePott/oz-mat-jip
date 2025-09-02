import MatJipContent from "./features/matJip/MatJipContent";
import Expandable from "./package/layout/_ExpandableSidebar";
import FullScreen from "./package/layout/_FullScreen";
import { Hstack, Vstack } from "./package/layout";
import { useGetAfterMount } from "./shared/services/servicesHooks";
import useBoundStore from "./shared/store";
import MatJipSkeleton from "./features/matJip/MatJipSkeleton";
import MessageBox from "./shared/components/edgeCases/MesssageBox";
import { useGeolocation } from "./features/geolocation/geolocationHooks";
import MatJipCard from "./features/matJip/MatJipCard";
import { useUpdateFavoriteArray } from "./features/matJip/useUpdateFavoriteArray";
import { useState } from "react";
import CustomButton from "./package/button/CustomButton";

const App = () => {
  const [doExpand, setDoExpand] = useState<boolean>(false);
  const placeArrayResponse = useBoundStore((state) => state.placeArrayResponse);
  const favoritePlaceArray = useBoundStore((state) => state.favoritePlaceArray);

  useGetAfterMount("/places", "/users/places");
  useGeolocation();
  useUpdateFavoriteArray();
  console.log("---- app re rendered");
  return (
    <FullScreen>
      <Hstack gap={0} className="w-full h-full overflow-hidden">
        <div className="grow h-full overflow-hidden">
          {placeArrayResponse.isLoading && <MatJipSkeleton />}
          {!placeArrayResponse.isLoading && placeArrayResponse.error && (
            <MessageBox outerClassName="p-3">
              {placeArrayResponse.error.message}
            </MessageBox>
          )}
          {!placeArrayResponse.isLoading &&
            placeArrayResponse.data &&
            placeArrayResponse.data.places.length === 0 && (
              <MessageBox outerClassName="p-3">
                맛집 정보가 하나도 없어요
              </MessageBox>
            )}
          {!placeArrayResponse.isLoading && !placeArrayResponse.error && (
            <MatJipContent placeArray={placeArrayResponse.data?.places ?? []} />
          )}
        </div>
        <Expandable
          widthInPixel={200}
          expandTo="LEFT"
          doExpand={doExpand}
          className="pt-3 pl-3"
        >
          <Vstack>
            <CustomButton onClick={() => setDoExpand((prev) => !prev)}>
              여닫기
            </CustomButton>
            {favoritePlaceArray.map((place) => (
              <MatJipCard place={place} />
            ))}
          </Vstack>
        </Expandable>
      </Hstack>
    </FullScreen>
  );
};
export default App;
