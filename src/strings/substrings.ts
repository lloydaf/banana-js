declare module "substring" {
  export = Substring;
}

declare var Substring: String;

interface String {
  substringsIn(str: String, thisArg?: String): Array<String>;
}

/**This function returns a list of substrings found between in two strings.
 * @param str - The string to find substrings in
 * @param thisArg? - An optional argument that acts as the string to compare with
 * str, if using String.prototype.substringsIn
 * @returns - An array of substrings found in str
 */
String.prototype.substringsIn = function(
  str: String,
  thisArg?: String
): Array<String> {
  let substrings = new Array<String>();
  let obj: String;
  thisArg ? (obj = thisArg) : (obj = this);
  obj = obj.trim();
  str = str.trim();
  for (let i = 0; i < obj.length; ++i) {
    let char: string = obj[i];
    let strCopy = str.slice();
    while (strCopy.indexOf(char) > -1) {
      let substring = "";
      let indexOne = Number(i);
      let indexTwo = Number(str.indexOf(char));
      while (
        indexOne < obj.length &&
        indexTwo < strCopy.length &&
        obj[indexOne] === strCopy[indexTwo]
      ) {
        substring += obj[indexOne];
        ++indexOne;
        ++indexTwo;
      }
      substrings = [...substrings, substring];
      strCopy = strCopy.substring(indexTwo);
    }
  }
  return substrings
    .map(substr => substr.trim())
    .filter(substr => substr.length !== 0)
    .filter((value, index, array) => array.indexOf(value) === index);
};
