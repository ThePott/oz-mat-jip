import MatJipContent from "./features/matJip/MatJipContent";
import ExpandableSidebar from "./package/layout/_ExpandableSidebar";
import FullScreen from "./package/layout/_FullScreen";
import { Hstack } from "./package/layout";
import { useGetAfterMount } from "./shared/services/servicesHooks";
import useBoundStore from "./shared/store";
import MatJipSkeleton from "./features/matJip/MatJipSkeleton";
import MessageBox from "./shared/components/edgeCases/MesssageBox";
import { useGeolocation } from "./features/geolocation/geolocationHooks";

const App = () => {
  const placeArrayResponse = useBoundStore((state) => state.placeArrayResponse);

  useGetAfterMount("/places");
  useGeolocation();
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
        <ExpandableSidebar widthInPixel={200} position="RIGHT">
          <p className="border-1 border-dimdim hover:border-dim">
            sidebar content
          </p>
          <p className="border-1 border-dimdim hover:border-dim">
            sidebar content
          </p>
          <p className="border-1 border-dimdim hover:border-dim">
            sidebar content
          </p>
          <p className="border-1 border-dimdim hover:border-dim">
            sidebar content
          </p>
          <p className="border-1 border-dimdim hover:border-dim">
            sidebar content
          </p>
          <p className="border-1 border-dimdim hover:border-dim">
            sidebar content
          </p>
        </ExpandableSidebar>
      </Hstack>
    </FullScreen>
  );
};
export default App;
