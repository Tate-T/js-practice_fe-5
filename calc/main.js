import { add, test } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';
import { printResult } from './printResult.js';

const resultEl = document.querySelector('.result');

let a = 10;
let b = 5;

test();

let sum = add(a, b);
let difference = subtract(a, b);
let product = multiply(a, b);
let quotient = divide(a, b);

printResult(`sum: ${sum}`, resultEl);
printResult(`difference: ${difference}`, resultEl);
printResult(`product: ${product}`, resultEl);
printResult(`quotient: ${quotient}`, resultEl);