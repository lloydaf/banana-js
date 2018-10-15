interface Array<T> {
  intersection(other: Array<T>, thisArg?: Array<T>): Array<T>;
}

Array.prototype.intersection = function<T>(
  other: Array<T>,
  thisArg?: Array<T>
): Array<T> {
  let obj = thisArg || this;
  return obj.filter(
    one =>
      other.filter(two => JSON.stringify(one) === JSON.stringify(two)).length >
      0
  );
};

declare const Intersection: Array<any>;

declare module "intersection" {
  export = Intersection;
}
