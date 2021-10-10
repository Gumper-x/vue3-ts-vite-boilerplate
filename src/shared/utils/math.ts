export function random(min: number, max: number = min): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function isEven(value: number): boolean {
  return value % 2 === 0;
}
