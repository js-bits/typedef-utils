/* eslint-disable @typescript-eslint/no-unused-vars, import/extensions, camelcase */

const test_Length1: TupleUtils.Length<[1, 2, 3, 4, 5]> = 5;
const test_Length2: TupleUtils.Length<[]> = 0;
const test_Length3: TupleUtils.Length<['a', 'b', 'c']> = 3;

const lest_Longest1: TupleUtils.Longest<[1, 1, 1], [2, 2, 2]> = [1, 1, 1];
const lest_Longest2: TupleUtils.Longest<[1, 1], [2, 2, 2]> = [2, 2, 2];
const lest_Longest3: TupleUtils.Longest<[1, 1, 1, 1, 1], [2]> = [1, 1, 1, 1, 1];

const test_Append1: TupleUtils.Append<[1, 2, 3, 4], 5> = [1, 2, 3, 4, 5];
const test_Append2: TupleUtils.Append<['a', true, undefined], 6> = ['a', true, undefined, 6];
