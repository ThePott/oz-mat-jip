import MatJipContent from "./features/matJip/MatJipContent";
import ExpandableSidebar from "./package/layout/_ExpandableSidebar";
import FullScreen from "./package/layout/_FullScreen";
import { Hstack } from "./package/layout";
import { useGetAfterMount } from "./shared/services/servicesHooks";
import useBoundStore from "./shared/store";

const App = () => {
  const placeArray = useBoundStore((state) => state.placeArray);
  useGetAfterMount("/places");
  return (
    <FullScreen>
      <Hstack gap={0} className="w-full h-full bg-amber-800 overflow-hidden">
        <div className="grow overflow-x-hidden overflow-y-scroll">
          <MatJipContent placeArray={placeArray} />
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
