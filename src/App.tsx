import ExpandableSidebar from "./package/layout/_ExpandableSidebar";
import Hstack from "./package/layout/_HStack";
import { useGetAfterMount } from "./shared/services/servicesHooks";

const App = () => {
  useGetAfterMount("/places");
  return (
    <Hstack>
      <div className="grow">some siiic content here</div>
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
