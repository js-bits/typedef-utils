/* eslint-disable import/extensions, @typescript-eslint/no-unused-vars, camelcase */

const test_ParseInt: MathUtils.Parse<'123'> = 123;
const test_ParseInt2: MathUtils.Parse<123> = 123;
const test_ParseFloat: MathUtils.Parse<'56.78'> = 56.78;
const test_ParseNegative: MathUtils.Parse<'-56.78'> = -56.78;

const test_SplitDigits1: MathUtils.SplitDigits<'1234'> = ['4', '3', '2', '1', '0'];

const test_SumDigits1: MathUtils.SumDigits<'9', '9'> = 18;
const test_SumDigits2: MathUtils.SumDigits<'1', '2'> = 3;

const test_AddString1: MathUtils.AddString<'3', '85'> = [8, 8, 0];
const test_AddString2: MathUtils.AddString<'99', '1'> = [10, 9, 0];

const test_ToNumber1: MathUtils.ToNumber<[1, 2, 3, 0]> = '0321';
const test_ToNumber2: MathUtils.ToNumber<[10, 12, 0]> = '130';

const test_Normalize1: MathUtils.Normalize<'0000000123'> = '123';
const test_Normalize2: MathUtils.Normalize<'123000000'> = '123000000';

const test_Add0: MathUtils.Add<3, 4> = 7;
const test_Add1: MathUtils.Add<1999, 1> = 2000;
const test_Add2: MathUtils.Add<9, 1> = 10;
const test_Add3: MathUtils.Add<99, 1> = 100;
const test_Add4: MathUtils.Add<999, 1> = 1000;
const test_Add5: MathUtils.Add<999, 999> = 1998;
const test_Add6: MathUtils.Add<9, 99999999999> = 100000000008;
const test_Add7: MathUtils.Add<99999999999, 9> = 100000000008;
const test_Add8: MathUtils.Add<9999999, 9999999> = 19999998;
const test_Add9: MathUtils.Add<'1234567890', '987654321'> = 2222222211;

// A is limited to 999, B is "limitless"
const test_Multiply1: MathUtils.Multiply<999, 99999999> = 99899999001;
const test_Multiply2: MathUtils.Multiply<199, 3> = 597;
const test_Multiply3: MathUtils.Multiply<78, 63> = 4914;
const test_Multiply4: MathUtils.Multiply<'999', '999'> = 998001;
