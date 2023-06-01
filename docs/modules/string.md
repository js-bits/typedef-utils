# Module: string

## Table of contents

### Type Aliases

- [Split](string.md#split)
- [Trim](string.md#trim)
- [TrimLeft](string.md#trimleft)
- [TrimRight](string.md#trimright)
- [Unique](string.md#unique)

## Type Aliases

### Split

 **Split**<`Str`, `Separator`, `NoEmpty`\>: `_Split_`<`Str`, `Separator`, `NoEmpty`\>

Returns a tuple of substrings by splitting the string pattern by the given separator.
Additionally you can filter out empty string from the resulting list by specifying the third argument as `true`

**`Example`**

```ts
const arr: StringUtils.Split<'a b c', ' '> = ['a', 'b', 'c'];
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Str` | extends `string` | any string |
| `Separator` | extends `string` | any string character |
| `NoEmpty` | extends `boolean` = ``false`` | optional flag |

___

### Trim

 **Trim**<`Str`, `Spacer`\>: [`TrimLeft`](string.md#trimleft)<[`TrimRight`](string.md#trimright)<`Str`, `Spacer`\>, `Spacer`\>

Removes leading and trailing white spaces (or the specified characters) from the given string

**`Example`**

```ts
const str1: StringUtils.Trim<'         abc         '> = 'abc';
const str2: StringUtils.Trim<'*******abc*******', '*'> = 'abc';
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Str` | extends `string` | any string |
| `Spacer` | extends `string` = ``" "`` | optional string character |

___

### TrimLeft

 **TrimLeft**<`Str`, `Spacer`\>: `Str` extends \`${Spacer}${infer Part}\` ? [`TrimLeft`](string.md#trimleft)<`Part`, `Spacer`\> : `Str`

Removes leading white spaces (or the specified characters) from the given string

**`Example`**

```ts
const str1: StringUtils.TrimLeft<'         abc'> = 'abc';
const str2: StringUtils.TrimLeft<'*******abc', '*'> = 'abc';
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Str` | extends `string` | any string |
| `Spacer` | extends `string` = ``" "`` | any string |

___

### TrimRight

 **TrimRight**<`Str`, `Spacer`\>: `Str` extends \`${infer Part}${Spacer}\` ? [`TrimRight`](string.md#trimright)<`Part`, `Spacer`\> : `Str`

Removes trailing white spaces (or the specified characters) from the given string

**`Example`**

```ts
const str1: StringUtils.TrimRight<'abc         '> = 'abc';
const str2: StringUtils.TrimRight<'abc*******', '*'> = 'abc';
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Str` | extends `string` | any string |
| `Spacer` | extends `string` = ``" "`` | optional string character |

___

### Unique

 **Unique**<`A`\>: `NotEmptyString`<`A`[`number`]\>

Transforms a tuple of strings into a union of string values

**`Example`**

```ts
type StringUnion = StringUtils.Unique<['a', 'a', 'b', 'c', 'c']>; // "a" | "b" | "c"
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `string`[] | any string tuple |
