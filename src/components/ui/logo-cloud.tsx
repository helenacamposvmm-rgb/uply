import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

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
          <div key={logoText} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span
              className="text-lg font-medium text-muted-foreground whitespace-nowrap"
            >
              {logoText}
            </span>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
