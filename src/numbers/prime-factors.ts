declare var PrimeFactor: Number;

declare module "prime-factors" {
  export = PrimeFactor;
}

interface Number {
  primeFactors(thisArg?: number): Array<number>;
}

/**
 * A function that returns the prime factors of a number in an array.
 * @param thisArg - An optional parameter that refers to the number whos prime factors are to be found,
 * to be used if using Number.prototype.primeFactors()
 *
 * @returns - Prime factors of a number in an array.
 */
Number.prototype.primeFactors = function(thisArg?: number): Array<number> {
  let obj = thisArg || this;
  const factorArray = new Array<number>();
  if (obj % 2 === 0) {
    while (obj % 2 === 0) obj /= 2;
    factorArray.push(2);
  }
  for (let div = 3; div <= Math.sqrt(obj); div += 2) {
    if (obj % div === 0) {
      while (obj % div === 0) obj /= div;
      factorArray.push(div);
    }
  }
  if (obj != 1) factorArray.push(obj);
  return factorArray;
};
