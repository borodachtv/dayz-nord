type ProductSlotProps = {
  image?: string;
  name: string;
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "h-[50px] w-[50px]",
  md: "h-40 w-40",
  lg: "h-56 w-56 sm:h-64 sm:w-64"
} as const;

export function ProductSlot({ image, name, size = "sm" }: ProductSlotProps) {
  const hasOverlay = Boolean(image && !image.includes("dayz-nord-hero"));

  return (
    <div className={`product-slot ${sizeClass[size]}`} aria-label={`${name} image`}>
      {hasOverlay ? <img className="product-slot-item" src={image} alt={name} /> : null}
    </div>
  );
}
