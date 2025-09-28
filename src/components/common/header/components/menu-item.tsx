import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

export const MenuItem: FC<MenuItemProps> = ({
  children,
  isActive,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "px-4 py-2 cursor-pointer text-sm transition-colors duration-300 flex items-center",
        isActive
          ? "text-[#212121]"
          : "text-[#4B4B4B] font-extralight hover:text-black",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
