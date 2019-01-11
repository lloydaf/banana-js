#Utils

##Prime Factors

This is a function that returns the prime factors of a number as an array.

```typescript
const num: Number = 20;

const factors = num.primeFactors();
console.log(factors); //[2,5]
```

##Prime Factorize

This is a function that performs prime factorization on a number and returns the prime factors of the number as an object, with the
prime factors being the key and the number of times the prime factor appears in the factorization as the value.

```typescript
import {primeFactorize} from '@lloydaf/banana-js/dist/numbers/prime-factorize';
const num: Number = 20;
const primeFactorMap = primeFactorize(num);
console.log(primeFactorMap); //{"2":2,"5":1} (because 20 = 2*2*5)
```

##LCM

This is a function that returns the LCM(lowest common multiple) of a collection of numbers.

```typescript
import {lcm} from '@lloydaf/banana-js/dist/numbers/lcm';

const lcmVal = lcm(2,5);
console.log(lcmVal); //10

const lcmValTwo = lcm(10,15);
console.log(lcmValTwo); //30
```

##IS PRIME

This is a function that tells you if a number is prime or not.

```typescript
import {isPrime} from '@lloydaf/banana-js/dist/numbers/is-prime';

console.log(isPrime(2)); //true

console.log(isPrime(99)); //false

console.log(isPrime(337)); //true
```