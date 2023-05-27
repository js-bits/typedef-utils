declare namespace ArrayUtils {
    type Length<T extends unknown[]> = T extends {
        length: infer L;
    } ? L : never;
    type Longest<A extends unknown[], B extends unknown[]> = B[Length<A>] extends undefined ? A : B;
    type Append<A extends unknown[], Item, NoEmpty extends boolean = false> = NoEmpty extends true ? Item extends '' ? A : [...A, Item] : [...A, Item];
}
/**
 * Required Typescript: 4.8+
 */
declare namespace MathUtils {
    type ParseInt<T> = T extends `${infer N extends number}` ? N : never;
    type Digits = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
    type Carryings = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    type Units = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
    type SplitDigits<Num extends string | number, A extends Digits[] = []> = `${Num}` extends `${infer D extends Digits}${infer X}` ? SplitDigits<X, [D, ...A]> : [...A, '0'];
    type SumDigits<A extends Digits = '0', B extends Digits = '0'> = DigitSums[A extends undefined ? '0' : A][B extends undefined ? '0' : B];
    type AddString<A extends string | number, B extends string | number, NumA extends Digits[] = SplitDigits<A>, NumB extends Digits[] = SplitDigits<B>, L extends Digits[] = ArrayUtils.Longest<NumA, NumB>> = {
        [Index in keyof L]: SumDigits<NumA[ParseInt<Index>], NumB[ParseInt<Index>]>;
    };
    type ToNumber<A extends number[], Result extends string = '', Carrying extends number = 0> = A extends [
        infer D extends number,
        ...infer Rest extends number[]
    ] ? ToNumber<Rest, `${Units[DigitSums[Units[D]][Carrying]]}${Result}`, D extends 9 ? Carrying : Carryings[D]> : Result;
    type Normalize<Str extends string> = Str extends `0${infer Num}` ? Normalize<Num> : Str;
    type Add<A extends string | number, B extends string | number> = ParseInt<Normalize<ToNumber<AddString<A, B>>>>;
    type Multiply<A extends string | number, B extends string | number, Result extends number = 0, I extends number = 0, X extends number = Add<Result, B>, Inc extends number = Add<I, 1>> = I extends A ? Result : Multiply<A, B, X, Inc>;
}
/**
 * Required Typescript: 4.5+
 */
declare namespace StringUtils {
    type NotEmptyString<Str> = Str extends '' ? never : Str;
    type TrimLeft<Str, Spacer extends string = ' '> = Str extends `${Spacer}${infer Part}` ? TrimLeft<Part, Spacer> : Str;
    type TrimRight<Str, Spacer extends string = ' '> = Str extends `${infer Part}${Spacer}` ? TrimRight<Part, Spacer> : Str;
    type Trim<Str> = TrimLeft<TrimRight<Str>>;
    type Split<Str extends string, Spacer extends string = '\n', NoEmpty extends boolean = false, A extends string[] = []> = Str extends `${infer PartA}${Spacer}${infer PartB}` ? Split<Trim<PartB>, Spacer, NoEmpty, ArrayUtils.Append<A, Trim<PartA>, NoEmpty>> : ArrayUtils.Append<A, Trim<Str>, NoEmpty>;
    type Unique<T extends string[]> = NotEmptyString<T[number]>;
}
