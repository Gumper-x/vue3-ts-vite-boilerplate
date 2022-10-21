export interface ReboundRepositoryPort {
  get: () => string | null;
  set: (path: string) => void;
  clear: () => void;
}
