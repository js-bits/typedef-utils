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
        [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
        ],
        [
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11
        ],
        [
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12
        ],
        [
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13
        ],
        [
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14
        ],
        [
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15
        ],
        [
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16
        ],
        [
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17
        ],
        [
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18
        ]
    ];
    /** @ignore */
    type SplitDigits<Num extends string | number, A extends Digits[] = []> = `${Num}` extends `${infer D extends Digits}${infer X}` ? SplitDigits<X, [D, ...A]> : [...A, '0'];
    /** @ignore */
    type SumDigits<A extends Digits = '0', B extends Digits = '0'> = DigitSums[A extends undefined ? '0' : A][B extends undefined ? '0' : B];
    /** @ignore */
    type AddString<A extends string | number, B extends string | number, NumA extends Digits[] = SplitDigits<A>, NumB extends Digits[] = SplitDigits<B>, L extends Digits[] = TupleUtils.Longest<NumA, NumB>> = {
        [Index in keyof L]: SumDigits<NumA[Parse<Index>], NumB[Parse<Index>]>;
    };
    /** @ignore */
    type ToNumber<A extends number[], Result extends string = '', Carrying extends number = 0> = A extends [
        infer D extends number,
        ...infer Rest extends number[]
    ] ? ToNumber<Rest, `${Units[DigitSums[Units[D]][Carrying]]}${Result}`, D extends 9 ? Carrying : Carryings[D]> : Result;
    /** @ignore */
    type Normalize<Str extends string> = Str extends `0${infer Num}` ? Normalize<Num> : Str;
    /** @ignore */
    type _Add_<A extends string | number, B extends string | number> = Parse<Normalize<ToNumber<AddString<A, B>>>>;
    /** @ignore */
    type _Multiply_<A extends string | number, B extends string | number, Result extends number = 0, I extends number = 0, X extends number = _Add_<Result, B>, Inc extends number = _Add_<I, 1>> = I extends Parse<A> ? Result : _Multiply_<Parse<A>, B, X, Inc>;
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
/**
 * @requires Typescript: 4.5+
 */
declare namespace StringUtils {
    /** @ignore */
    type NotEmptyString<Str> = Str extends '' ? never : Str;
    /**
     * Removes leading white spaces (or the specified characters) from the given string
     * @typeParam Str - any string
     * @typeParam Spacer - any string
     * @example
     * const str1: StringUtils.TrimLeft<'         abc'> = 'abc';
     * const str2: StringUtils.TrimLeft<'*******abc', '*'> = 'abc';
     */
    type TrimLeft<Str extends string, Spacer extends string = ' '> = Str extends `${Spacer}${infer Part}` ? TrimLeft<Part, Spacer> : Str;
    /**
     * Removes trailing white spaces (or the specified characters) from the given string
     * @typeParam Str - any string
     * @typeParam Spacer - optional string character
     * @example
     * const str1: StringUtils.TrimRight<'abc         '> = 'abc';
     * const str2: StringUtils.TrimRight<'abc*******', '*'> = 'abc';
     */
    type TrimRight<Str extends string, Spacer extends string = ' '> = Str extends `${infer Part}${Spacer}` ? TrimRight<Part, Spacer> : Str;
    /**
     * Removes leading and trailing white spaces (or the specified characters) from the given string
     * @typeParam Str - any string
     * @typeParam [Spacer] - optional string character
     * @example
     * const str1: StringUtils.Trim<'         abc         '> = 'abc';
     * const str2: StringUtils.Trim<'*******abc*******', '*'> = 'abc';
     */
    type Trim<Str extends string, Spacer extends string = ' '> = TrimLeft<TrimRight<Str, Spacer>, Spacer>;
    /** @ignore */
    type _Split_<Str extends string, Spacer extends string = '\n', NoEmpty extends boolean = false, A extends string[] = []> = Str extends `${infer PartA}${Spacer}${infer PartB}` ? _Split_<Trim<PartB>, Spacer, NoEmpty, TupleUtils.Append<A, Trim<PartA>, NoEmpty>> : TupleUtils.Append<A, Trim<Str>, NoEmpty>;
    /**
     * Returns a tuple of substrings by splitting the string pattern by the given separator.
     * Additionally you can filter out empty string from the resulting list by specifying the third argument as `true`
     * @typeParam Str - any string
     * @typeParam Separator - any string character
     * @typeParam [NoEmpty] - optional flag
     * @example
     * const arr: StringUtils.Split<'a b c', ' '> = ['a', 'b', 'c'];
     */
    type Split<Str extends string, Separator extends string, NoEmpty extends boolean = false> = _Split_<Str, Separator, NoEmpty>;
    /**
     * Transforms a tuple of strings into a union of string values
     * @typeParam A - any string tuple
     * @example
     * type StringUnion = StringUtils.Unique<['a', 'a', 'b', 'c', 'c']>; // "a" | "b" | "c"
     */
    type Unique<A extends string[]> = NotEmptyString<A[number]>;
}
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
    type Length<A extends unknown[]> = A extends {
        length: infer L;
    } ? L : never;
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
    type Append<A extends unknown[], Item, NoEmpty extends boolean = false> = NoEmpty extends true ? Item extends '' ? A : [...A, Item] : [...A, Item];
}
