# Module: tuple

## Table of contents

### Type Aliases

- [Append](tuple.md#append)
- [Length](tuple.md#length)
- [Longest](tuple.md#longest)

## Type Aliases

### Append

 **Append**<`A`, `Item`, `NoEmpty`\>: `NoEmpty` extends ``true`` ? `Item` extends ``""`` ? `A` : [...A, `Item`] : [...A, `Item`]

Appends new item to the given tuple.
Optionally you can ignore empty strings by specifying the third argument as `true`

**`Example`**

```ts
const arr: TupleUtils.Append<[1, 2, 3, 4], 5> = [1, 2, 3, 4, 5];
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `unknown`[] | any tuple |
| `Item` | `Item` | any value |
| `NoEmpty` | extends `boolean` = ``false`` | optional flag |

___

### Length

 **Length**<`A`\>: `A` extends { `length`: infer L  } ? `L` : `never`

Returns length of the given tuple

**`Example`**

```ts
const length: TupleUtils.Length<[1, 2, 3, 4, 5]> = 5;
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `unknown`[] | any tuple |

___

### Longest

 **Longest**<`A`, `B`\>: `B`[[`Length`](tuple.md#length)<`A`\>] extends `undefined` ? `A` : `B`

Compares two tuples by their length and returns either the longest one of them
or the first one if they are the same length

**`Remarks`**

All items of both tuples must be defined in order for the operation to work properly

**`Example`**

```ts
const longest: TupleUtils.Longest<[1], [1, 2, 3]> = [1, 2, 3];
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `unknown`[] | any tuple without undefined items |
| `B` | extends `unknown`[] | any tuple without undefined items |
