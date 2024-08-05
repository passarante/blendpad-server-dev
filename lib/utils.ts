import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatNumber = (num: number) => {
  const formattedNumber = num.toLocaleString()

  return formattedNumber.replaceAll(',', ' ')
}

export const truncateAddress = (address: `0x${string}` | undefined) => {
  return address
    ? `${address.slice(0, 7)}...${address.slice(-7, -1)}${address.slice(-1)}`
    : ''
}

