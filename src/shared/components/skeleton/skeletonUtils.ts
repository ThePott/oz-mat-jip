import type { FontVariant, SkeletonVariant } from "./skeletonInterfaces";

const fontVariantToPixel: Record<FontVariant, number> = {
  base: 16,
  accent: 20,
  title: 24,
  super: 36,
};

export const makeSkeletonSizeStyle = (
  skeletonVariant: SkeletonVariant,
  fontVariant?: FontVariant,
  heightInPixel?: number,
  widthInPixel?: number,
) => {
  const sizeStyle = {} as React.CSSProperties;

  if (skeletonVariant === "SHORT_TEXT") {
    sizeStyle.width = "500px";
    sizeStyle.height = `${fontVariantToPixel[fontVariant ?? "base"] * 1.5}px`;
    return sizeStyle;
  }

  if (!heightInPixel && !widthInPixel) {
    sizeStyle.flexGrow = 1;
    return sizeStyle;
  }

  sizeStyle.width = widthInPixel ? `${widthInPixel}px` : "100%";
  sizeStyle.height = heightInPixel ? `${heightInPixel}px` : "100%";
  return sizeStyle;
};
