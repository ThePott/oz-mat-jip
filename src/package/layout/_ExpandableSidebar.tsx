import type { DivProps } from "./htmlInterfaces";

type ExpandTo = "LEFT" | "RIGHT";

interface AdditionalProps {
  doExpand?: boolean;
  expandTo: ExpandTo;
  widthInPixel: number;
}

type ExpandableProps = DivProps & AdditionalProps;

const FloatingSidebar = ({
  doExpand,
  className,
  expandTo,
  widthInPixel,
  children,
  ...props
}: ExpandableProps) => {
  const positionClassName = expandTo === "LEFT" ? "right-0" : "left -0";

  const borderPositionClassName =
    expandTo === "LEFT" ? "border-l-1" : "border-r-1";
  const widthStyle = {
    width: doExpand ? "500px" : `${widthInPixel}px`,
    transitionProperty: "width",
  };

  return (
    <div
      style={widthStyle}
      {...props}
      className={`${className} ${positionClassName} ${borderPositionClassName} border-dim h-full transition absolute shrink-0 overflow-y-scroll z-20 bg-bg`}
    >
      {children}
    </div>
  );
};

const Expandable = ({ children, ...props }: ExpandableProps) => {
  const { widthInPixel } = props;
  const widthStyle = {
    minWidth: `${widthInPixel}px`,
  };

  return (
    <div style={widthStyle} className={`h-full relative`}>
      <FloatingSidebar {...props}>{children}</FloatingSidebar>
    </div>
  );
};

export default Expandable;
