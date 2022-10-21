export function isEmpty<T>(value: T): value is Extract<T, null | undefined | []> {
  if (!value) {
    return true;
  }
  if (typeof value === "string" || typeof value === "number") {
    return false;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  return Object.keys(value).length === 0;
}

export function isFloat(value: number): boolean {
  return Number(value) === value && value % 1 !== 0;
}

export function isValidDate(date: Date | string | number): boolean {
  if (typeof date === "string") {
    return Boolean(Date.parse(date));
  }
  return typeof date === "number" || date instanceof Date;
}
export function isString(value: unknown): value is string {
  return typeof value === "string";
}
export function isNumber(value: unknown): value is number {
  return typeof value === "number" && value === value;
}

export const isNullable = <T>(value: T): value is NonNullable<T> => {
  return value !== undefined && value !== null;
};

export function isTouchDevice(): boolean {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0;
}

export function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
  return typeof value === "function";
}
