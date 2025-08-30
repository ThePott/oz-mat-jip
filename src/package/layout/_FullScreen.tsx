import type { DivProps } from "./htmlInterfaces";

const FullScreen = ({ children, className, ...props }: DivProps) => {
  return (
    <div
      {...props}
      className={`w-screen h-screen overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default FullScreen;
