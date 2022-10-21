import type { Ref } from "vue";

export type InputModel = Ref<string | number | null | undefined>;
export type SelectItem =
  | {
      label: string | number;
      value: string | number | Date;
      disabled?: boolean;
    }
  | number;
export interface RangeSelectDate {
  from: Date;
  to: Date;
}
