import CenterInRow from "./_CenterInRow";
import type { DivProps } from "./htmlInterfaces";

interface BaseVstackProps {
  gap?: number;
}

interface AdditionalVstackProps {
  center?: boolean;
}

type VstackProps = DivProps & BaseVstackProps & AdditionalVstackProps;

const BaseVstack = ({
  gap = 3,
  className,
  children,
  ...props
}: VstackProps) => {
  return (
    <div {...props} className={`gap-${gap} ${className} flex flex-col`}>
      {children}
    </div>
  );
};

export const Vstack = ({ center, children, ...props }: VstackProps) => {
  if (!center) {
    return <BaseVstack {...props}>{children}</BaseVstack>;
  }

  return (
    <CenterInRow>
      <BaseVstack {...props}>{children}</BaseVstack>
    </CenterInRow>
  );
};
