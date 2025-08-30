import { useState } from "react";
import type { Place } from "../../shared/store/_apiInterfaces";

const MatJipCard = ({ place }: { place: Place }) => {
  const [isBack, setIsBack] = useState<boolean>(false);
  const filpIsBackClassName = isBack ? "rotate-y-180" : "";
  const filpBaseClassName = "transition ease-[cubic-bezier(.01,.81,.09,1.13)]";
  const flipClassName = `${filpBaseClassName} ${filpIsBackClassName}`;

  const handleClick = () => {
    setIsBack((prev) => !prev);
  };
  return (
    <div className={flipClassName} onClick={handleClick}>
      <div className="h-[200px] rounded-md border-1 border-dimdim hover:border-dim p-3 overflow-hidden">
        {JSON.stringify(place)}
      </div>
    </div>
  );
};

export default MatJipCard;
