/* eslint-disable @typescript-eslint/no-unused-vars, camelcase, import/extensions */
import { MULTI_LINE_LIST, SINGLE_LINE_LIST, SINGLE_LINE_LONG_STRING } from './string.data';

let test_trimEmpty: StringUtils.Trim<'     '> = '';
// @ts-expect-error Type '"abc"' is not assignable to type '""'
test_trimEmpty = 'abc';

const test_trimNone: StringUtils.Trim<'option_l0'> = 'option_l0';

const test_trimLeftSingle: StringUtils.Trim<' option_l1'> = 'option_l1';
let test_trimLeftMultiple: StringUtils.Trim<'         option_l2'> = 'option_l2';
// @ts-expect-error Type '"option_l3"' is not assignable to type '"option_l2"'
test_trimLeftMultiple = 'option_l3';

const test_trimRightSingle: StringUtils.Trim<'option_r1 '> = 'option_r1';
let test_trimRightMutliple: StringUtils.Trim<'option_r2         '> = 'option_r2';
// @ts-expect-error Type '"option_r3"' is not assignable to type '"option_r2"'
test_trimRightMutliple = 'option_r3';

const test_trimCenterSingle: StringUtils.Trim<' option_c1 '> = 'option_c1';
const test_trimCenterMultiple: StringUtils.Trim<'        option_c2         '> = 'option_c2';
const test_trimCenterDashes: StringUtils.Trim<'-------option_c3---------', '-'> = 'option_c3';

let test_trimSingleLineLimits: StringUtils.Trim<SINGLE_LINE_LONG_STRING> = 'string';
// @ts-expect-error Type '"abc"' is not assignable to type '"string"'
test_trimSingleLineLimits = 'abc';

const test_splitNoneSpace: StringUtils.Split<'a b c', '\n'> = ['a b c'];
const test_splitNoneNewLine: StringUtils.Split<'a\nb\nc', ' '> = ['a\nb\nc'];

const test_splitNewLine1: StringUtils.Split<'a\nb\nc', '\n'> = ['a', 'b', 'c'];
const test_splitNewLine2: StringUtils.Split<'a\nb\nc\n', '\n'> = ['a', 'b', 'c', ''];
const test_splitNewLine3: StringUtils.Split<
  `
  a
  b
  c
`,
  '\n'
> = ['', 'a', 'b', 'c', ''];

const test_splitSpace1: StringUtils.Split<'a b c', ' '> = ['a', 'b', 'c'];
const test_splitSpace2: StringUtils.Split<'   a b c  ', ' '> = ['', 'a', 'b', 'c'];

const test_splitNoEmpty1: StringUtils.Split<'\na\nb\nc\n', '\n', true> = ['a', 'b', 'c'];
const test_splitNoEmpty2: StringUtils.Split<'   a b c   ', ' ', true> = ['a', 'b', 'c'];

const test_SplitSingleLineLimits21: StringUtils.Split<SINGLE_LINE_LIST, ' '>[10] = 'OPTION011';
// @ts-expect-error Type '"OPTION010"' is not assignable to type '"OPTION011"'
const test_SplitSingleLineLimits22: StringUtils.Split<SINGLE_LINE_LIST, ' '>[10] = 'OPTION010';
const test_SplitSingleLineLimits3: StringUtils.Split<SINGLE_LINE_LIST, ' '>[99] = 'OPTION100';
const test_SplitSingleLineLimits4: StringUtils.Split<SINGLE_LINE_LIST, ' '>[998] = 'OPTION999';

const test_SplitMultiLineLimits1: StringUtils.Split<MULTI_LINE_LIST, '\n'>[0] = '';
const test_SplitMultiLineLimits21: StringUtils.Split<MULTI_LINE_LIST, '\n'>[10] = 'OPTION010';
// @ts-expect-error Type '"OPTION011"' is not assignable to type '"OPTION010"'
const test_SplitMultiLineLimits22: StringUtils.Split<MULTI_LINE_LIST, '\n'>[10] = 'OPTION011';
const test_SplitMultiLineLimits3: StringUtils.Split<MULTI_LINE_LIST, '\n'>[100] = 'OPTION100';
const test_SplitMultiLineLimits4: StringUtils.Split<MULTI_LINE_LIST, '\n'>[997] = 'OPTION997';
const test_SplitMultiLineLimits5: StringUtils.Split<MULTI_LINE_LIST, '\n'>[998] = '';

const test_SplitUnionLimits1: StringUtils.Unique<StringUtils.Split<MULTI_LINE_LIST, '\n'>> = 'OPTION010';
const test_SplitUnionLimits2: StringUtils.Unique<StringUtils.Split<MULTI_LINE_LIST, '\n'>> = 'OPTION997';
// @ts-expect-error Type '"OPTION999"' is not assignable to type 'Unique<["", "OPTION001", "OPTION002", ...
const test_SplitUnionLimits3: StringUtils.Unique<StringUtils.Split<MULTI_LINE_LIST>> = 'OPTION999';
// @ts-expect-error Type '""' is not assignable to type 'Unique<["", "OPTION001", "OPTION002", ...
const test_SplitUnionLimits4: StringUtils.Unique<StringUtils.Split<MULTI_LINE_LIST>> = '';
// @ts-expect-error Type '""' is not assignable to type 'Unique<["OPTION001", "OPTION002",
const test_SplitUnionLimits5: StringUtils.Unique<StringUtils.Split<SINGLE_LINE_LIST, ' '>> = '';
// @ts-expect-error Type '"OPTION000"' is not assignable to type 'Unique<["OPTION001", "OPTION002", ...
const test_SplitUnionLimits6: StringUtils.Unique<StringUtils.Split<SINGLE_LINE_LIST, ' '>> = 'OPTION000';
