# Utils

## Pipe

This is a function that lets you chain functions together and pass the result of one function to the next function in the pipe.

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
const result = addOne(num).pipe(addTwo).pipe(square);
console.log(result) // 16
```

## Pipe All

This is a function that lets you chain functions together with a single function call, thus removing the need to use multiple `pipe()` statements. Pipes the functions in the order in which they are passed to the function.

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
const result = addOne(num).pipeAll(addTwo,square);
console.log(result) // 16
```