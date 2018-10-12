import "../distinct";

test("filter a number array for distinct elements", () => {
  let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  expect(arr.distinct()).toEqual([1, 2, 3, 4, 5]);
});
