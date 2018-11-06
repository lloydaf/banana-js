import "../../src/functions/pipe";
function addOne(num: number) {
  return num + 1;
}
test("Simple Composition", () => {
  function addTwo(num: number) {
    return num + 2;
  }

  expect(addOne(2).pipe(addTwo)).toEqual(5);
});

test("Multiple Composition", () => {
  function square(num: number) {
    return num * num;
  }
  expect(
    addOne(3)
      .pipe(square)
      .pipe(square)
  ).toEqual(256);
});
