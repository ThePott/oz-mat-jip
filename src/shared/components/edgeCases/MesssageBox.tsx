import type { ReactNode } from "react";

const MessageBox = ({
  outerClassName,
  className: innerClassName,
  children,
}: {
  outerClassName?: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={`${outerClassName} w-full h-full`}>
      <div
        className={`${innerClassName} w-full h-full flex flex-col justify-center items-center border-1 border-dimdim font-semibold`}
      >
        {children}
      </div>
    </div>
  );
};

export default MessageBox;
