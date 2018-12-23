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
  let obj;
  thisArg ? (obj = thisArg) : (obj = this);
  obj = obj.map(el => JSON.stringify(el));
  arr
    .map(el => JSON.stringify(el))
    .forEach(el => {
      if (!status) return;
      else if (obj.indexOf(el) === -1) status = false;
    });
  return status;
};
