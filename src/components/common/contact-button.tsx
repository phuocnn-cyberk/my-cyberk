import { FC } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactButtonProps {
  text?: string;
  className?: string;
}

export const ContactButton: FC<ContactButtonProps> = ({
  text = "CONTACT US",
  className,
}) => {
  return (
    <Link
      href="https://t.me/cyberk_anderson"
      target="_blank"
      className="inline-block"
    >
      <Button
        className={cn(
          "bg-[#2172E6] text-white text-sm font-normal btn-discover hover:text-black hover:bg-[#2172E6]/90 flex items-center gap-2",
          className
        )}
      >
        {text} <ArrowRight size={20} />
      </Button>
    </Link>
  );
};
