import type { MouseEvent } from "react";
import HeartIcon from "./HeartIcon";

interface HeartButtonProps {
  isOn: boolean;
  toggler: () => void;
  outerClassName?: string;
  innerClassName?: string;
}
const HeartButton = ({
  isOn,
  toggler,
  outerClassName,
  innerClassName,
}: HeartButtonProps) => {
  const handleClick = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    event.stopPropagation();
    toggler();
  };
  return (
    <div
      onClick={handleClick}
      className={`${outerClassName ? outerClassName : ""} absolute z-10 p-3 top-0 right-0`}
    >
      <HeartIcon isOn={isOn} className={innerClassName} />
    </div>
  );
};

export default HeartButton;
