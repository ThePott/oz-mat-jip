import { useState, type MouseEventHandler } from "react";
import { Vstack } from ".";
import type { DivProps } from "./htmlInterfaces";
import CustomButton from "../button/CustomButton";

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

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    setDoExpand((prev) => !prev);
  };

  return (
    <div
      style={widthStyle}
      className={`${borderPositionClassName} transition h-full overflow-x-hidden overflow-y-scroll relative border-dim`}
    >
      <div className="w-full flex justify-end pt-3">
        <CustomButton onClick={handleClick}>
          {doExpand ? "닫기" : "열기"}
        </CustomButton>
      </div>
      <FloatingSidebar {...props}>{children}</FloatingSidebar>
    </div>
  );
};

export default ExpandableSidebar;
