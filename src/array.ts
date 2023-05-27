type Length<T extends unknown[]> = T extends { length: infer L } ? L : never;

type Longest<A extends unknown[], B extends unknown[]> = B[Length<A>] extends undefined ? A : B;
