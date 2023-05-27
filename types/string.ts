/* eslint-disable @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars */
// INSPIRATION: https://lihautan.com/extract-parameters-type-from-string-literal-types-with-typescript/

/**
 * Required Typescript: 4.5+
 */

declare namespace StringUtils {
  type NotEmptyString<Str> = Str extends '' ? never : Str;

  type TrimLeft<Str, Spacer extends string = ' '> = Str extends `${Spacer}${infer Part}` ? TrimLeft<Part, Spacer> : Str;

  type TrimRight<Str, Spacer extends string = ' '> = Str extends `${infer Part}${Spacer}`
    ? TrimRight<Part, Spacer>
    : Str;

  type Trim<Str> = TrimLeft<TrimRight<Str>>;

  type Split<
    Str extends string,
    Spacer extends string = '\n',
    NoEmpty extends boolean = false,
    A extends string[] = []
  > = Str extends `${infer PartA}${Spacer}${infer PartB}`
    ? Split<Trim<PartB>, Spacer, NoEmpty, ArrayUtils.Append<A, Trim<PartA>, NoEmpty>>
    : ArrayUtils.Append<A, Trim<Str>, NoEmpty>;

  type Unique<T extends string[]> = NotEmptyString<T[number]>;
}
