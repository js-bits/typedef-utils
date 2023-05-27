/* eslint-disable @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars */
declare namespace ArrayUtils {
  type Length<T extends unknown[]> = T extends { length: infer L } ? L : never;

  type Longest<A extends unknown[], B extends unknown[]> = B[Length<A>] extends undefined ? A : B;

  type Append<A extends unknown[], Item, NoEmpty extends boolean = false> = NoEmpty extends true
    ? Item extends ''
      ? A
      : [...A, Item]
    : [...A, Item];
}
