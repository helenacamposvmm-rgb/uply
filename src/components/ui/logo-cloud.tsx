import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: string[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={42} speed={80} speedOnHover={25}>
        {logos.map((logoText) => (
          <span
            key={logoText}
            className="text-lg font-medium text-muted-foreground whitespace-nowrap"
          >
            {logoText}
          </span>
        ))}
      </InfiniteSlider>
    </div>
  );
}
