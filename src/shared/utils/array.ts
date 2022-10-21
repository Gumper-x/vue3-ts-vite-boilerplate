export function rangeArray<T = number>(start: number, end: number, handler?: (number: number) => T): Array<T | number> {
  return Array(end - start + 1)
    .fill(0)
    .map((_, idx) => {
      const number = start + idx;
      if (handler) {
        return handler(number);
      }
      return number;
    });
}
