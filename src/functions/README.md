# Utils

## Pipe

This is a function that lets you chain functions together and pass the result of one function as the first argument to the next function in the pipe.

```typescript
function addOne(num: number) {
  return num + 1;
}

function addTwo(num: number) {
  return num + 2;
}

function square(num: number) {
  return num * num;
}

const num = 1;
const result = addOne(num)
  .pipe(addTwo)
  .pipe(square);
console.log(result); // 16
```

If you have functions taking multiple arguments, you can add them as additional arguments after the function.

```typescript
function multiply(...args: Array<number>) {
  return args.reduce((a, b) => a * b, 1);
}

const num = 1;
const result = addOne(num).pipe(
  multiply,
  2,
  3
);
console.log(result); //12
```

## Pipe All

This is a function that lets you chain functions together with a single function call, thus removing the need to use multiple `pipe()` statements. Pipes the functions in the order in which they are passed to the function, passing the result of the previous function as the first argument to the next function.

```typescript
function addOne(num: number) {
  return num + 1;
}

function multiply(...args: Array<number>) {
  return args.reduce((a, b) => a * b, 1);
}

function square(num: number) {
  return num * num;
}

const num = 1;
const result = addOne(num).pipeAll([multiply,2,3], [square]);
console.log(result); // 144
```
