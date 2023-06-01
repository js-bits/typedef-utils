import { Append } from './tuple';
/**
 * @requires Typescript: 4.5+
 */
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
export type TrimLeft<Str extends string, Spacer extends string = ' '> = Str extends `${Spacer}${infer Part}` ? TrimLeft<Part, Spacer> : Str;
/**
 * Removes trailing white spaces (or the specified characters) from the given string
 * @typeParam Str - any string
 * @typeParam Spacer - optional string character
 * @example
 * const str1: StringUtils.TrimRight<'abc         '> = 'abc';
 * const str2: StringUtils.TrimRight<'abc*******', '*'> = 'abc';
 */
export type TrimRight<Str extends string, Spacer extends string = ' '> = Str extends `${infer Part}${Spacer}` ? TrimRight<Part, Spacer> : Str;
/**
 * Removes leading and trailing white spaces (or the specified characters) from the given string
 * @typeParam Str - any string
 * @typeParam [Spacer] - optional string character
 * @example
 * const str1: StringUtils.Trim<'         abc         '> = 'abc';
 * const str2: StringUtils.Trim<'*******abc*******', '*'> = 'abc';
 */
export type Trim<Str extends string, Spacer extends string = ' '> = TrimLeft<TrimRight<Str, Spacer>, Spacer>;
/** @ignore */
type _Split_<Str extends string, Spacer extends string = '\n', NoEmpty extends boolean = false, A extends string[] = []> = Str extends `${infer PartA}${Spacer}${infer PartB}` ? _Split_<Trim<PartB>, Spacer, NoEmpty, Append<A, Trim<PartA>, NoEmpty>> : Append<A, Trim<Str>, NoEmpty>;
/**
 * Returns a tuple of substrings by splitting the string pattern by the given separator.
 * Additionally you can filter out empty string from the resulting list by specifying the third argument as `true`
 * @typeParam Str - any string
 * @typeParam Separator - any string character
 * @typeParam [NoEmpty] - optional flag
 * @example
 * const arr: StringUtils.Split<'a b c', ' '> = ['a', 'b', 'c'];
 */
export type Split<Str extends string, Separator extends string, NoEmpty extends boolean = false> = _Split_<Str, Separator, NoEmpty>;
/**
 * Transforms a tuple of strings into a union of string values
 * @typeParam A - any string tuple
 * @example
 * type StringUnion = StringUtils.Unique<['a', 'a', 'b', 'c', 'c']>; // "a" | "b" | "c"
 */
export type Unique<A extends string[]> = NotEmptyString<A[number]>;
export {};
