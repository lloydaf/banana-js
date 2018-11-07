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
test("Simple Composition", () => {
  expect(addOne(2).pipe(addTwo)).toEqual(5);
});

test("Multiple Composition", () => {
  expect(
    addOne(3)
      .pipe(square)
      .pipe(square)
  ).toEqual(256);
});

test("Pipe All with two functions", () => {
    expect(addOne(1).pipeAll(addTwo,square)).toEqual(16);
});
