export interface IOption<T> {
  label?: string;
  value: T;
}

export type IOptions<T> = IOption<T>[];
