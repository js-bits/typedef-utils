/* eslint-disable @typescript-eslint/no-unused-vars, import/extensions, camelcase */
import { Length, Longest } from './array';

const test_Length1: Length<[1, 2, 3, 4, 5]> = 5;
const test_Length2: Length<[]> = 0;
const test_Length3: Length<['a', 'b', 'c']> = 3;

const lest_Longest1: Longest<[1, 1, 1], [2, 2, 2]> = [1, 1, 1];
const lest_Longest2: Longest<[1, 1], [2, 2, 2]> = [2, 2, 2];
const lest_Longest3: Longest<[1, 1, 1, 1, 1], [2]> = [1, 1, 1, 1, 1];
