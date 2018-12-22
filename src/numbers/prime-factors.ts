declare var PrimeFactor: Number;

declare module "prime-factors" {
  export = PrimeFactor;
}

interface Number {
  primeFactors(thisArg?: number): Array<number>;
}

Number.prototype.primeFactors = function(thisArg?: number): Array<number> {
  let obj = this || thisArg;
  const factorArray = new Array<number>();
  if (obj % 2 === 0) {
    while (obj % 2 === 0) obj /= 2;
    factorArray.push(2);
  }
  for (let div = 3; div < Math.sqrt(obj); div += 2) {
    if (obj % div === 0) {
      while (obj % div === 0) obj = obj /= div;
      factorArray.push(div);
    }
  }
  factorArray.push(obj);
  return factorArray;
};
