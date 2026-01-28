import { cn } from "@/lib/utils";
import { ComponentProps, FunctionComponent } from "react";

export type CardProps = ComponentProps<"div">;

export const Card: FunctionComponent<CardProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "p-6 bg-linear-to-t from-accent/50 via-accent/50 to-accent/30 backdrop-blur-xl border rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
