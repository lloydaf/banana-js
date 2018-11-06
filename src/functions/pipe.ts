declare var Pipe: Object;
declare module "pipe" {
  export = Pipe;
}
interface Object {
  pipe(fn: Function): Object;
}

Object.prototype.pipe = function(fn: Function): Object {
  return fn(this);
};
