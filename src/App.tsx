import MatJipContent from "./features/matJip/MatJipContent";
import ExpandableSidebar from "./package/layout/_ExpandableSidebar";
import Hstack from "./package/layout/_HStack";
import { useGetAfterMount } from "./shared/services/servicesHooks";
import useBoundStore from "./shared/store";

const App = () => {
  const placeArray = useBoundStore((state) => state.placeArray);
  useGetAfterMount("/places");
  return (
    <Hstack>
      <div className="grow">
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
  );
};
export default App;
