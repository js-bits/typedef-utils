/* eslint-disable @typescript-eslint/no-unused-vars, import/extensions, @typescript-eslint/no-namespace */
// INSPIRATION: https://itnext.io/implementing-arithmetic-within-typescripts-type-system-a1ef140a6f6f

/**
 * Type-level math operations
 * @requires TypeScript 4.8+
 */

declare namespace MathUtils {
  /**
   * Returns number by the given string representation
   * @typeParam T - any number
   * @requires TypeScript 4.8+
   * @remarks
   * {@link https://github.com/microsoft/TypeScript/pull/48094 | Related TypeScript issue}
   * @example
   * const intValue: MathUtils.Parse<'123'> = 123;
   * const floatValue: MathUtils.Parse<'-56.78'> = -56.78;
   * const stringArg: MathUtils.Parse<123> = 123;
   */
  type Parse<T extends string | number> = T extends number ? T : T extends `${infer N extends number}` ? N : never;

  /** @ignore */
  type Digits = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

  /** @ignore */
  type Carryings = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  /** @ignore */
  type Units = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  /** @ignore */
  type DigitSums = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    [6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    [7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  ];

  /** @ignore */
  type SplitDigits<
    Num extends string | number,
    A extends Digits[] = []
  > = `${Num}` extends `${infer D extends Digits}${infer X}` ? SplitDigits<X, [D, ...A]> : [...A, '0'];

  /** @ignore */
  type SumDigits<A extends Digits = '0', B extends Digits = '0'> = DigitSums[A extends undefined
    ? '0'
    : A][B extends undefined ? '0' : B];

  /** @ignore */
  type AddString<
    A extends string | number,
    B extends string | number,
    NumA extends Digits[] = SplitDigits<A>,
    NumB extends Digits[] = SplitDigits<B>,
    L extends Digits[] = TupleUtils.Longest<NumA, NumB>
  > = {
    [Index in keyof L]: SumDigits<NumA[Parse<Index>], NumB[Parse<Index>]>;
  };

  /** @ignore */
  type ToNumber<A, Result extends string = '', Carrying extends number = 0> = A extends [
    infer D extends number,
    ...infer Rest extends number[]
  ]
    ? ToNumber<Rest, `${Units[DigitSums[Units[D]][Carrying]]}${Result}`, D extends 9 ? Carrying : Carryings[D]>
    : Result;

  /** @ignore */
  type Normalize<Str extends string> = Str extends `0${infer Num}` ? Normalize<Num> : Str;

  /** @ignore */
  type _Add_<A extends string | number, B extends string | number> = Parse<Normalize<ToNumber<AddString<A, B>>>>;

  /** @ignore */
  type _Multiply_<
    A extends string | number,
    B extends string | number,
    Result extends number = 0,
    I extends number = 0
  > = I extends Parse<A> ? Result : _Multiply_<Parse<A>, B, _Add_<Result, B>, _Add_<I, 1>>;

  /**
   * Addition of two positive integer values represented by either a number or a string format
   * @typeParam A - any positive integer number
   * @typeParam B - any positive integer number
   * @requires TypeScript 4.8+
   * @remarks
   * The operation doesn't have any noticeable limitations
   * @example
   * const smallValue: MathUtils.Add<3, 4> = 7;
   * const bigValue: MathUtils.Add<9999999, 9999999> = 19999998;
   * const stringArgs: MathUtils.Add<'1234567890', '987654321'> = 2222222211;
   */
  type Add<A extends string | number, B extends string | number> = _Add_<A, B>;

  /**
   * Multiplies two positive integer values represented by either a number or a string format
   * @typeParam A - any positive integer number from 0 to 999
   * @typeParam B - any positive integer number
   * @requires TypeScript 4.8+
   * @remarks
   * The first argument can be 999 max because of a [hardcoded limit in TypeScript compiler](https://github.com/microsoft/TypeScript/pull/45711)
   * @example
   * const numberArgs: MathUtils.Multiply<78, 63> = 4914;
   * const stringArgs: MathUtils.Multiply<'999', '999'> = 998001;
   */
  type Multiply<A extends string | number, B extends string | number> = _Multiply_<A, B>;
}
