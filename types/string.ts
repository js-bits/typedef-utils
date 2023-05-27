/* eslint-disable @typescript-eslint/no-unused-vars */
// INSPIRATION: https://lihautan.com/extract-parameters-type-from-string-literal-types-with-typescript/

/**
 * Required Typescript 4.5+
 */

type NotEmptyString<Str> = Str extends '' ? never : Str;

type TrimLeft<Str, Spacer extends string = ' '> = Str extends `${Spacer}${infer Part}` ? TrimLeft<Part, Spacer> : Str;

type TrimRight<Str, Spacer extends string = ' '> = Str extends `${infer Part}${Spacer}` ? TrimRight<Part, Spacer> : Str;

type Trim<Str> = TrimLeft<TrimRight<Str>>;

type AppendToArray<A extends string[], Item extends string, NoEmpty extends boolean = false> = NoEmpty extends true
  ? Item extends ''
    ? A
    : [...A, Item]
  : [...A, Item];

type Split<
  Str extends string,
  Spacer extends string = '\n',
  NoEmpty extends boolean = false,
  A extends string[] = []
> = Str extends `${infer PartA}${Spacer}${infer PartB}`
  ? Split<Trim<PartB>, Spacer, NoEmpty, AppendToArray<A, Trim<PartA>, NoEmpty>>
  : AppendToArray<A, Trim<Str>, NoEmpty>;

type Unique<T extends string[]> = NotEmptyString<T[number]>;
