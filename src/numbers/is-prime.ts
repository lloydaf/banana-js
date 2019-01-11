export { isPrime };
/**
 * @description - This function tells you if a number is a prime number or not
 * @param num - The number to check for if it is a prime
 * @returns - True if the number is a prime, false if it is not a prime
 */
const isPrime = (num): boolean => {
  if (num == 2) return true;
  const greaterThanSquareRoot = Math.floor(Math.sqrt(num)) + 1;
  for (let i = 2; i < greaterThanSquareRoot; ++i) {
    if (isPrime(i) && num % i == 0) return false;
  }
  return true;
};
