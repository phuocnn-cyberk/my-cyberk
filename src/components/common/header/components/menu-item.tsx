import { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface MenuItemProps extends PropsWithChildren {
  isActive?: boolean;
}

export const MenuItem: FC<MenuItemProps> = ({ children, isActive }) => {
  return (
    <div
      className={cn(
        "px-4 py-2 cursor-pointer text-base transition-colors duration-300 font-light",
        isActive
          ? "text-[#212121]"
          : "text-[#4B4B4B] font-light hover:text-black"
      )}
    >
      {children}
    </div>
  );
};
