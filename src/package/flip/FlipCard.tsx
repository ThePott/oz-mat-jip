import { createContext, useContext, useState, type ReactNode } from "react";
import type { DivProps } from "../layout/htmlInterfaces";

interface FlipCardContextProps {
  isShowingBack: boolean;
}
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

const FlipCardContexProvider = ({ children }: { children: ReactNode }) => {
  const [isShowingBack, setIsShowingBack] = useState<boolean>(false);
  return (
    <FlipCardContext.Provider value={{ isShowingBack }}>
      <div onClick={() => setIsShowingBack((prev) => !prev)}>{children}</div>
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
  const baseFlipClassName = "transition backface-hidden absolute w-full h-full";
  const conditionalFlipClassName =
    isShowingBack === isForBack ? "rotate-y-180" : "";
  const flipClassName = `${baseFlipClassName} ${conditionalFlipClassName}`;
  return (
    <div {...props} className={`${flipClassName} ${className}`}>
      {children}
    </div>
  );
};

type FlipCardProps = DivProps;
/** MUST SPECIFY WIDTH, HEIGHT */
const FlipCard = ({ className, children, ...props }: FlipCardProps) => {
  return (
    <FlipCardContexProvider>
      <div {...props} className={`relative ${className}`}>
        {children}
      </div>
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
