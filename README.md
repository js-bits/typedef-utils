# Utility types for TypeScript

Useful generic types for operating with string literals, numbers and tuples in TypeScript.

```typescript
const parse: MathUtils.Parse<'-56.78'> = -56.78;
const add: MathUtils.Add<9999999, 9999999> = 19999998;
const multiply: MathUtils.Multiply<78, 63> = 4914;
const trim: StringUtils.Trim<'         abc         '> = 'abc';
const split: StringUtils.Split<'a b c', ' '> = ['a', 'b', 'c'];
const length: TupleUtils.Length<[1, 2, 3, 4, 5]> = 5;
const longest: TupleUtils.Longest<[1], [1, 2, 3]> = [1, 2, 3];
const append: TupleUtils.Append<[1, 2, 3, 4], 5> = [1, 2, 3, 4, 5];
```

Follow the reference docs for more information:

- [String utilities](docs/modules/string.StringUtils.md)
- [Math utilities](docs/modules/math.MathUtils.md)
- [Tuple utilities](docs/modules/tuple.TupleUtils.md)
