import { isPrime } from "../../src/numbers/is-prime";
test("Testing for one digit numbers", () => {
  expect(isPrime(2)).toBeTruthy();
  expect(isPrime(3)).toBeTruthy();
  expect(isPrime(9)).toBeFalsy();
});


test("Testing random two digit numbers",()=>{
    expect(isPrime(33)).toBeFalsy();
    expect(isPrime(49)).toBeFalsy();
    expect(isPrime(61)).toBeTruthy();
})