/* eslint-disable import/extensions, @typescript-eslint/no-unused-vars, camelcase */
import { Add, AddString, Longest, Multiply, Normalize, SplitDigits, SumDigits, ToNumber } from './math';

const lest_Longest1: Longest<[1, 1, 1], [2, 2, 2]> = [1, 1, 1];
const lest_Longest2: Longest<[1, 1], [2, 2, 2]> = [2, 2, 2];
const lest_Longest3: Longest<[1, 1, 1, 1, 1], [2]> = [1, 1, 1, 1, 1];

const test_SplitDigits1: SplitDigits<'1234'> = ['4', '3', '2', '1', '0'];

const test_SumDigits1: SumDigits<'9', '9'> = 18;
const test_SumDigits2: SumDigits<'1', '2'> = 3;

const test_AddString1: AddString<'3', '85'> = [8, 8, 0];
const test_AddString2: AddString<'99', '1'> = [10, 9, 0];

const test_ToNumber1: ToNumber<[1, 2, 3, 0]> = '0321';
const test_ToNumber2: ToNumber<[10, 12, 0]> = '130';

const test_Normalize1: Normalize<'0000000123'> = '123';
const test_Normalize2: Normalize<'123000000'> = '123000000';

const test_Add0: Add<3, 4> = 7;
const test_Add1: Add<1999, 1> = 2000;
const test_Add2: Add<9, 1> = 10;
const test_Add3: Add<99, 1> = 100;
const test_Add4: Add<999, 1> = 1000;
const test_Add5: Add<999, 999> = 1998;
const test_Add6: Add<9, 99999999999> = 100000000008;
const test_Add7: Add<99999999999, 9> = 100000000008;
const test_Add8: Add<9999999, 9999999> = 19999998;

// A is limited to 999, B is "limitless"
const test_Multiply1: Multiply<999, 99999999> = 99899999001;
const test_Multiply2: Multiply<199, 3> = 597;
const test_Multiply3: Multiply<78, 63> = 4914;
