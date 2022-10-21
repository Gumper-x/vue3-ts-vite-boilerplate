export function renameKeys<T>(keysMap: Record<string, string>, object: Record<string, unknown>): T {
  return Object.keys(object).reduce((accumulator, key) => {
    const renamedObject = {
      [keysMap[key] || key]: object[key],
    };
    return {
      ...accumulator,
      ...renamedObject,
    };
  }, {}) as T;
}
export function createKeysMap(object: Record<string, unknown>, handler: (key: string) => string): Record<string, string> {
  return Object.assign({}, ...Object.keys(object).map((key) => ({ [key]: handler(key) })));
}
