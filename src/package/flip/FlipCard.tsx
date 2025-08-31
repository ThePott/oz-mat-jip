import { createContext, useContext, type ReactNode } from "react";
import type { DivProps } from "../layout/htmlInterfaces";

type FlipCardContextProps = Required<
  Pick<AdditionalFlipCardProps, "isShowingBack">
>;

const FlipCardContext = createContext<FlipCardContextProps>({
  isShowingBack: false,
});

const useFlipCardContext = () => {
  const context = useContext(FlipCardContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

type FlipCardContextProviderProps = FlipCardContextProps & {
  children: ReactNode;
};

const FlipCardContexProvider = ({
  children,
  ...props
}: FlipCardContextProviderProps) => {
  return (
    <FlipCardContext.Provider value={props}>
      {children}
    </FlipCardContext.Provider>
  );
};

interface AdditionalFlipCardItemProps {
  isForBack?: boolean;
}

type FlipCardItemProps = DivProps & AdditionalFlipCardItemProps;
const FlipCardItem = ({
  isForBack,
  className,
  children,
  ...props
}: FlipCardItemProps) => {
  const { isShowingBack } = useFlipCardContext();
  const baseFlipClassName = "backface-visibility";
  const conditionalFlipClassName =
    isShowingBack === isForBack ? "rotate-y-180" : "";
  const flipClassName = `${baseFlipClassName} ${conditionalFlipClassName}`;
  return (
    <div {...props} className={`${flipClassName} ${className}`}>
      {children}
    </div>
  );
};

interface AdditionalFlipCardProps {
  isShowingBack?: boolean;
}
type FlipCardProps = DivProps & AdditionalFlipCardProps;
const FlipCard = ({
  isShowingBack = false,
  children,
  ...props
}: FlipCardProps) => {
  return (
    <FlipCardContexProvider isShowingBack={isShowingBack}>
      <div {...props}>{children}</div>;
    </FlipCardContexProvider>
  );
};

FlipCard.Front = ({
  children,
  ...props
}: Omit<FlipCardItemProps, "isForBack">) => (
  <FlipCardItem isForBack={false} {...props}>
    {children}
  </FlipCardItem>
);
FlipCard.Back = ({
  children,
  ...props
}: Omit<FlipCardItemProps, "isForBack">) => (
  <FlipCardItem isForBack={true} {...props}>
    {children}
  </FlipCardItem>
);

export default FlipCard;
