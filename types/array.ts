/* eslint-disable @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars */

/**
 * Tuples manipulations
 */
declare namespace TupleUtils {
  /**
   * Returns length of the given tuple
   * @typeParam A - any tuple
   * @example
   * const length: TupleUtils.Length<[1, 2, 3, 4, 5]> = 5;
   */
  type Length<A extends unknown[]> = A extends { length: infer L } ? L : never;

  /**
   * Compares two tuples by their length and returns either the longest one of them
   * or the first one if they are the same length
   * @remarks
   * All items of both tuples must be defined in order for the operation to work properly
   * @typeParam A - any tuple without undefined items
   * @typeParam B - any tuple without undefined items
   * @example
   * const longest: TupleUtils.Longest<[1], [1, 2, 3]> = [1, 2, 3];
   */
  type Longest<A extends unknown[], B extends unknown[]> = B[Length<A>] extends undefined ? A : B;

  /**
   * Appends new item to the given tuple.
   * Optionally you can ignore empty strings by specifying the third argument as `true`
   * @typeParam A - any tuple
   * @typeParam Item - any value
   * @typeParam [NoEmpty] - optional flag
   * @example
   * const arr: TupleUtils.Append<[1, 2, 3, 4], 5> = [1, 2, 3, 4, 5];
   */
  type Append<A extends unknown[], Item, NoEmpty extends boolean = false> = NoEmpty extends true
    ? Item extends ''
      ? A
      : [...A, Item]
    : [...A, Item];
}
