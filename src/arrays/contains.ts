declare module "contains-all" {
  export = ContainsAll;
}

declare var ContainsAll: Array<any>;

interface Array<T> {
  containsAll(arr: Array<T>, thisArg?: Array<T>): Boolean;
}

Array.prototype.containsAll = function<T>(
  arr: Array<T>,
  thisArg?: Array<T>
): Boolean {
  let status: Boolean = true;
  const obj: Array<T> = this || thisArg;
  const objStr: Array<String> = obj.map((el: T) => JSON.stringify(el));
  arr
    .map(el => JSON.stringify(el))
    .forEach(el => {
      if (!status) return;
      else if (objStr.indexOf(el) === -1) status = false;
    });
  return status;
};
