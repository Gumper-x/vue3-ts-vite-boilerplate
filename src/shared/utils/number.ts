export function getDigit(number: number): string {
  return number.toString().split(".")[1] || "";
}

export function subFloat(number: number, value: number): string {
  return getDigit(number)?.length > value ? number.toFixed(value) : number.toString();
}
