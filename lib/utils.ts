import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function sanitizeProps<T extends object>(props: T): T {
  return Object.fromEntries(
    Object.entries(props).filter(
      ([key]) =>
        !key.startsWith("fdprocessedid") &&
        !key.startsWith("data-ext") &&
        !key.startsWith("_")
    )
  ) as T
}
