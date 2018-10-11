import '../index';

test("Strain an element from the array", () => {
  let arr = [1, 2, 3, 4, 5];
  expect(arr.strain(el=>el<3)).toEqual(1);
});

