export type IOmitRespectIndexSignature<T, K extends PropertyKey> = {
  [P in keyof T as Exclude<P, K>]: T[P];
};
