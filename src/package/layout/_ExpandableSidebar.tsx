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
      className={`bg-red-400 ${positionClassName} ${widthClassName} absolute shrink-0 ${className}`}
    >
      <Vstack gap={gap}>{children}</Vstack>
    </div>
  );
};

const ExpandableSidebar = ({ children, ...props }: ExpandableSidebarProps) => {
  const { widthInPixel } = props;
  const widthStyle = {
    minWidth: `${widthInPixel}px`,
  };
  return (
    <div style={widthStyle} className={`h-full min-w-[px] relative`}>
      <FloatingSidebar {...props}>{children}</FloatingSidebar>
      <p>what</p>
    </div>
  );
};

export default ExpandableSidebar;
