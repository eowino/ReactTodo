import { partial, pipe } from './utils';

const add = (a,b) => a + b;
const addThree = (a,b,c) => a + b + c;
const double = (num) => num * 2;
const increment = (num) => num + 1;

test('partial applies the firsts args ahead of time', () => {
  const inc = partial(add, 1);
  const res = inc(2);
  expect(res).toBe(3);
});

test('partial applies the multiple args ahead of time', () => {
  const inc = partial(addThree, 1, 3);
  const res = inc(2);
  expect(res).toBe(6);
});

test('pipe passes the results of double to increment', () => {
  const pipeline = pipe(double, increment);
  const res = pipeline(2);
  expect(res).toBe(5);
});

test('pipe passes the results of increment to double', () => {
  const pipeline = pipe(increment, double);
  const res = pipeline(2);
  expect(res).toBe(6);
});

test('pipe works with more than 2 functions', () => {
  const pipeline = pipe(add, increment, double, increment);
  const res = pipeline(1,2);
  expect(res).toBe(9);
});
