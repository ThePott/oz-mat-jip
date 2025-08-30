import type { DivProps } from "../layout/htmlInterfaces";

interface AdditionalFlipCardItemProps {
  isFront?: boolean;
}

type FlipCardItemProps = DivProps & AdditionalFlipCardItemProps;
const FlipCardItem = ({
  isFront,
  className,
  children,
  ...props
}: FlipCardItemProps) => {
  // const
  return (
    <div {...props} className={`${className}`}>
      {children}
    </div>
  );
};

// interface AdditionalFlipCardProps {
//     isShowingFront
// }
const FlipCard = ({ children, ...props }: DivProps) => {
  return <div {...props}>{children}</div>;
};

export default FlipCard;
