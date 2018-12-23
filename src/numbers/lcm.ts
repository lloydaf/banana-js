import {primeFactorize} from "./prime-factorize";
/**
 * @description - This function returns the LCM of multiple numbers.
 * @param args - The numbers whos LCM is to be found.
 * @returns - The LCM of the numbers passed as the argument.
 */
const lcm = (...args: Array<number>) => {
  const lcmMap = args
    .map(number => primeFactorize(number))
    .reduce((a, b) => {
      Object.keys(b).forEach(key => {
        if (!a[key]) a[key] = b[key];
        else a[key] = a[key] > b[key] ? a[key] : b[key];
      });
      return a;
    }, {});
  return Object.keys(lcmMap).reduce(
    (a, b) => a * Math.pow(parseInt(b), lcmMap[b]),
    1
  );
};

export {lcm};