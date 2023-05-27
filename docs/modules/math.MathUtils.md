# Namespace: MathUtils

[math](math.md).MathUtils

Type-level math operations

**`Requires`**

TypeScript 4.8+

## Table of contents

### Type Aliases

- [Add](math.MathUtils.md#add)
- [Multiply](math.MathUtils.md#multiply)
- [Parse](math.MathUtils.md#parse)

## Type Aliases

### Add

 **Add**<`A`, `B`\>: `_Add_`<`A`, `B`\>

Addition of two positive integer values represented by either a number or a string format

**`Requires`**

TypeScript 4.8+

**`Remarks`**

The operation doesn't have any noticeable limitations

**`Example`**

```ts
const smallValue: MathUtils.Add<3, 4> = 7;
const bigValue: MathUtils.Add<9999999, 9999999> = 19999998;
const stringArgs: MathUtils.Add<'1234567890', '987654321'> = 2222222211;
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `string` \| `number` | any positive integer number |
| `B` | extends `string` \| `number` | any positive integer number |

___

### Multiply

 **Multiply**<`A`, `B`\>: `_Multiply_`<`A`, `B`\>

Multiplies two positive integer values represented by either a number or a string format

**`Requires`**

TypeScript 4.8+

**`Remarks`**

The first argument can be 999 max because of a [hardcoded limit in TypeScript compiler](https://github.com/microsoft/TypeScript/pull/45711)

**`Example`**

```ts
const numberArgs: MathUtils.Multiply<78, 63> = 4914;
const stringArgs: MathUtils.Multiply<'999', '999'> = 998001;
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `A` | extends `string` \| `number` | any positive integer number from 0 to 999 |
| `B` | extends `string` \| `number` | any positive integer number |

___

### Parse

 **Parse**<`T`\>: `T` extends `number` ? `T` : `T` extends \`${infer N extends number}\` ? `N` : `never`

Returns number by the given string representation

**`Requires`**

TypeScript 4.8+

**`Remarks`**

[Related TypeScript issue](https://github.com/microsoft/TypeScript/pull/48094)

**`Example`**

```ts
const intValue: MathUtils.Parse<'123'> = 123;
const floatValue: MathUtils.Parse<'-56.78'> = -56.78;
const stringArg: MathUtils.Parse<123> = 123;
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `string` \| `number` | any number |
