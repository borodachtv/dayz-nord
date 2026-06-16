type ProductSlotProps = {
  image?: string;
  name: string;
  size?: "sm" | "lg";
};

const sizeClass = {
  sm: "h-[50px] w-[50px]",
  lg: "h-[50px] w-[50px]"
} as const;

export function ProductSlot({ image, name, size = "sm" }: ProductSlotProps) {
  const hasOverlay = Boolean(image && !image.includes("dayz-nord-hero"));

  return (
    <div className={`product-slot ${sizeClass[size]}`} aria-label={`${name} image`}>
      {hasOverlay ? <img className="product-slot-item" src={image} alt={name} /> : null}
    </div>
  );
}
