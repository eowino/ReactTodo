export const partial = (fn, ...args) => fn.bind(null, ...args);

// takes a function f and function g
// use rest operator to take in arguments and wrap them in an array called args
// use the spread operator to expand the passed results into a list of arguments
// pass the result into the 2nd function g
const _pipe = (f, g) => (...args) => g(f(...args));

export const pipe = (...fns) => fns.reduce(_pipe);
