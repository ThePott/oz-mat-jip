import { useState, type MouseEventHandler } from "react";
import { Vstack } from ".";
import type { DivProps } from "./htmlInterfaces";

type SidebarPosition = "LEFT" | "RIGHT";

interface AdditionalProps {
  // doExpand?: boolean;
  position: SidebarPosition;
  gap?: number;
  widthInPixel: number;
}

type ExpandableSidebarProps = DivProps & AdditionalProps;

const FloatingSidebar = ({
  // doExpand,
  className,
  gap,
  position,
  children,
  ...props
}: Omit<ExpandableSidebarProps, "widthInPixel" | "doExpand">) => {
  const positionClassName = position === "LEFT" ? "left-0" : "right-0";
  // const widthClassName = doExpand ? "w-screen" : "w-full";
  return (
    <div
      {...props}
      className={`${className} ${positionClassName} absolute shrink-0 w-full`}
    >
      <Vstack gap={gap}>{children}</Vstack>
    </div>
  );
};

const ExpandableSidebar = ({
  widthInPixel,
  children,
  ...props
}: ExpandableSidebarProps) => {
  const [doExpand, setDoExpand] = useState<boolean>(false);
  const { position } = props;
  const widthStyle = {
    minWidth: doExpand ? "500px" : `${widthInPixel}px`,
    transitionProperty: "min-width",
  };

  const borderPositionClassName =
    position === "LEFT" ? "border-r-1" : "border-l-1";

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    setDoExpand((prev) => !prev);
  };

  return (
    <div
      style={widthStyle}
      className={`${borderPositionClassName} transition h-full overflow-x-hidden overflow-y-scroll relative border-dim`}
    >
      <div onClick={handleClick}>some button</div>
      <FloatingSidebar {...props}>{children}</FloatingSidebar>
      <p>what</p>
    </div>
  );
};

export default ExpandableSidebar;
