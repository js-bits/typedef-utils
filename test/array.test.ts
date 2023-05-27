/* eslint-disable @typescript-eslint/no-unused-vars, import/extensions, camelcase */

const test_Length1: ArrayUtils.Length<[1, 2, 3, 4, 5]> = 5;
const test_Length2: ArrayUtils.Length<[]> = 0;
const test_Length3: ArrayUtils.Length<['a', 'b', 'c']> = 3;

const lest_Longest1: ArrayUtils.Longest<[1, 1, 1], [2, 2, 2]> = [1, 1, 1];
const lest_Longest2: ArrayUtils.Longest<[1, 1], [2, 2, 2]> = [2, 2, 2];
const lest_Longest3: ArrayUtils.Longest<[1, 1, 1, 1, 1], [2]> = [1, 1, 1, 1, 1];
