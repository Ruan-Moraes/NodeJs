const _ = require('lodash');

// import chalk from 'chalk';

const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const diff = _.difference(arr2, arr);

console.log(diff); // [ 6, 7, 8, 9, 10 ]

// console.log(chalk.blue('Hello world!'));