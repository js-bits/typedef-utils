# Utility types for TypeScript

Useful generic types for operating with string literals, numbers and tuples in TypeScript.

## Installation

Install with npm:

```
npm install @js-bits/typedef-utils -D
```

Install with yarn:

```
yarn add @js-bits/typedef-utils -D
```

## Examples

String utilities:

```typescript
import type { Split, Trim } from '@js-bits/typedef-utils/string';

const trim: Trim<'         abc         '> = 'abc';
const split: Split<'a b c', ' '> = ['a', 'b', 'c'];
```

Math utilities:

```typescript
import type { Add, Multiply, Parse } from '@js-bits/typedef-utils/math';

const parse: Parse<'-56.78'> = -56.78;
const add: Add<9999999, 9999999> = 19999998;
const multiply: Multiply<78, 63> = 4914;
```

Tuple utilities:

```typescript
import type { Append, Length, Longest } from '@js-bits/typedef-utils/tuple';

const length: Length<[1, 2, 3, 4, 5]> = 5;
const longest: Longest<[1], [1, 2, 3]> = [1, 2, 3];
const append: Append<[1, 2, 3, 4], 5> = [1, 2, 3, 4, 5];
```

## Documentation

Follow the reference docs for more information:

- [String utilities](docs/modules/string.md)
- [Math utilities](docs/modules/math.md)
- [Tuple utilities](docs/modules/tuple.md)
