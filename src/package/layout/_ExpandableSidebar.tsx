import Vstack from "./_VStack";

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
  widthInPixel,
  className,
  gap,
  position,
  children,
  ...props
}: ExpandableSidebarProps) => {
  const positionClassName = position === "LEFT" ? "left-0" : "right-0";
  const widthClassName = doExpand ? "w-screen" : `w-[${widthInPixel}px]`;
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
  return (
    <div className={`h-full min-w-[${widthInPixel}px] relative bg-amber-100`}>
      {/* <FloatingSidebar {...props}>{children}</FloatingSidebar> */}
      <p>what</p>
    </div>
  );
};

export default ExpandableSidebar;
