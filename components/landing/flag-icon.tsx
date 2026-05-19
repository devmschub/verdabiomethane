import Image from "next/image"
import { cn } from "@/lib/utils"

interface FlagIconProps {
  src: string
  alt: string
  className?: string
}

export function FlagIcon({ src, alt, className }: FlagIconProps) {
  return (
    <span
      className={cn(
        "relative inline-block h-4 w-6 shrink-0 overflow-hidden rounded-sm ring-1 ring-black/10",
        className,
      )}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="24px" />
    </span>
  )
}
