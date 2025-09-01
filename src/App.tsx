import MatJipContent from "./features/matJip/MatJipContent";
import ExpandableSidebar from "./package/layout/_ExpandableSidebar";
import FullScreen from "./package/layout/_FullScreen";
import { Hstack } from "./package/layout";
import { useGetAfterMount } from "./shared/services/servicesHooks";
import useBoundStore from "./shared/store";
import MatJipSkeleton from "./features/matJip/MatJipSkeleton";
import MessageBox from "./shared/components/edgeCases/MesssageBox";

const App = () => {
  const placeArrayResponse = useBoundStore((state) => state.placeArrayResponse);
  useGetAfterMount("/places");

  return (
    <FullScreen>
      <Hstack gap={0} className="w-full h-full overflow-hidden">
        <div className="grow">
          {!placeArrayResponse.isLoading && (
            <MatJipContent placeArray={placeArrayResponse.data ?? []} />
          )}
          {placeArrayResponse.isLoading && <MatJipSkeleton />}
          {placeArrayResponse.isLoading && (
            <MessageBox outerClassName="p-3">
              맛집 정보가 하나도 없어요
            </MessageBox>
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
