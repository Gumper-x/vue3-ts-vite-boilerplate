import { isNullable } from "@/shared/utils";

export function catchString<T>(value: T): NonNullable<T> | string {
  return isNullable(value) ? value : "";
}
