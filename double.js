// const double = (num) => num * 2;

// console.log(double(10));

// console.log(document);
// console.log(window);
// console.log(global)

console.log(process.argv[2]);

const [, , n] = process.argv;

const double = (n) => n * 2;

// console.log(double(n));

const [, , n1, n2] = process.argv;

const sum = (n1, n2) => n1 + n2;

console.log(sum(+n1, +n2));
