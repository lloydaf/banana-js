interface Array<T> {
  difference(other: Array<T>, thisArg?: Array<T>): Array<T>;
}

Array.prototype.difference = function<T>(
  other: Array<T>,
  thisArg?: Array<T>
): Array<T> {
  let obj = thisArg || this;
  return obj.filter(el => other.indexOf(el) === -1);
};

declare module "difference" {
  export = Difference;
}

declare const Difference: Array<any>;
