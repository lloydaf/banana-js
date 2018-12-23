import { lcm } from "../../src/numbers/lcm";

test("LCM of one digit numbers", () => {
  expect(lcm(2, 3)).toEqual(6);
  expect(lcm(4, 5)).toEqual(20);
});

test("LCM of two digit numbers", () => {
  expect(lcm(10, 15)).toEqual(30);
  expect(lcm(10, 15, 20)).toEqual(60);
});

test("LCM of the first twenty numbers", () => {
  const arr = [];
  for(let i = 0;i<20;++i) arr.push(i+1);
  expect(lcm(...arr)).toEqual(232792560);
});
