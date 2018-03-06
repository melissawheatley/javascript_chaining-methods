// Then output (either in the DOM or the console) the sum of all the resulting numbers.

const integers = [23, 15, 6, 3, 11, 20, 18, 7, 21, 1, 29, 10, 12, 8];

console.log(integers.sort(function(a, b){return a-b}).reverse().filter((value)=> value < 19).map((item) => item * 1.5 - 1).reduce((previous, current)=>previous+current));