import "./skeletonBgAnimation.css";
import type { FontVariant, SkeletonVariant } from "./skeletonInterfaces";
import { makeSkeletonSizeStyle } from "./skeletonUtils";

interface SkeletonProps {
  skeletonVariant?: SkeletonVariant;
  fontVariant?: FontVariant;

  heightInPixel?: number;
  widthInPixel?: number;
  className?: string;
}

const Skeleton = ({
  skeletonVariant = "BOX",
  fontVariant,
  heightInPixel,
  widthInPixel,
  className,
}: SkeletonProps) => {
  const sizeStyle = makeSkeletonSizeStyle(
    skeletonVariant,
    fontVariant,
    heightInPixel,
    widthInPixel,
  );
  return (
    <div style={sizeStyle} className={`${className} skeleton shrink-0`}></div>
  );
};

export default Skeleton;
