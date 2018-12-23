declare module "reverse" {
  export = Reverse;
}

declare const Reverse: String;

interface String {
  reverse(thisArg?: String): String;
}

/**
 * @description - A function that reverses a string
 * @param thisArg - Optional argument that refers to the string to be reversed,
 * to be passed if using String.prototype.reverse()
 * @returns - The reverse of the string passed.
 */
String.prototype.reverse = function(thisArg?: String): String {
  let str: String;
  thisArg ? (str = thisArg) : (str = this);
  return str.split("").reduceRight((a, b) => a + b, "");
};
