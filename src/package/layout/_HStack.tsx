import type { DivProps } from "./htmlInterfaces";

interface AdditionalHstackProps {
  gap?: number;
}

type HstackProps = DivProps & AdditionalHstackProps;

const Hstack = ({ gap = 3, className, children, ...props }: HstackProps) => {
  return (
    <div {...props} className={`gap-${gap} ${className} flex`}>
      {children}
    </div>
  );
};

export default Hstack;
