import { Vstack } from ".";

type SidebarPosition = "LEFT" | "RIGHT";

interface AdditionalProps {
  doExpand?: boolean;
  position: SidebarPosition;
  gap?: number;
  widthInPixel: number;
}

type BaseProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type ExpandableSidebarProps = BaseProps & AdditionalProps;

const FloatingSidebar = ({
  doExpand,
  className,
  gap,
  position,
  children,
  ...props
}: Omit<ExpandableSidebarProps, "widthInPixel">) => {
  const positionClassName = position === "LEFT" ? "left-0" : "right-0";
  const widthClassName = doExpand ? "w-screen" : "w-full";
  return (
    <div
      {...props}
      className={`${className} ${positionClassName} ${widthClassName} absolute shrink-0`}
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
  const { position } = props;
  const widthStyle = {
    minWidth: `${widthInPixel}px`,
  };

  const borderPositionClassName =
    position === "LEFT" ? "border-r-1" : "border-l-1";

  return (
    <div
      style={widthStyle}
      className={`${borderPositionClassName} h-full overflow-x-hidden overflow-y-scroll relative border-dim`}
    >
      <FloatingSidebar {...props}>{children}</FloatingSidebar>
      <p>what</p>
    </div>
  );
};

export default ExpandableSidebar;
