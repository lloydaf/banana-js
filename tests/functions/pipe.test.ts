import "../../src/functions/pipe";
function addOne(num: number) {
  return num + 1;
}
function addTwo(num: number) {
  return num + 2;
}
function square(num: number) {
  return num * num;
}

function multiply(...args) {
  let product = 1;
  return args.reduce((a, b) => a * b, product);
}

function subtract(a: number, b: number) {
  return a - b;
}

test("Simple Composition, single arity function", () => {
  expect(addOne(2).pipe(addTwo)).toEqual(5);
});

test("Multiple Composition, single arity functions", () => {
  expect(
    addOne(3)
      .pipe(square)
      .pipe(square)
  ).toEqual(256);
});

test("Pipe All with two single arity functions", () => {
  expect(addOne(1).pipeAll([addTwo], [square])).toEqual(16);
});

test("Pipe All with two single/multiple arity functions", () => {
  expect(addOne(1).pipeAll([multiply, 3, 4], [square])).toEqual(576);
  expect(addOne(1).pipeAll([multiply, 2, 3], [square])).toEqual(144);
});

test("Piping methods with multiple arity", () => {
  expect(
    addOne(1).pipe(
      multiply,
      2,
      4
    )
  ).toEqual(16);
});

test("Piping methods with arity two", () => {
  expect(
    addOne(1).pipe(
      subtract,
      2
    )
  ).toEqual(0);
  expect(
    addOne(2).pipe(
      subtract,
      1
    )
  ).toEqual(2);
  expect(
    addOne(1).pipe(
      subtract,
      2,
      3
    )
  ).toEqual(0); //ignores additional arguments
});
