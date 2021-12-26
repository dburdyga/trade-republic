import { Stock } from "@/lib/types/models/Stock";

export type Keys = keyof Stock;
export function stockComparator(
  a: Stock,
  b: Stock,
  key: Keys,
  isAsc: boolean
): number {
  if (typeof a[key] === "string") {
    return isAsc
      ? String(a[key]).localeCompare(String(b[key]))
      : String(b[key]).localeCompare(String(a[key]));
  } else {
    return isAsc
      ? Number(a[key]) - Number(b[key])
      : Number(b[key]) - Number(a[key]);
  }
}
