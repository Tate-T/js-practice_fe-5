import { average } from "./average.js";
import { sum } from "./sum.js";
import stringToArray from './string-to-array.js';
import { max } from "./max.js";

const numbers = [1, 2, 3, 4, 5];
const avg = average(numbers);
console.log(`Average: ${avg}`);

const result = sum(numbers);
console.log(`Sum: ${result}`);

const str = 'one,two,three,four,five';
const separator = ',';
const result2 = stringToArray(str, separator);
console.log(`Result: ${result2}`);

const maxNum = max(numbers);
console.log(`Max: ${maxNum}`);