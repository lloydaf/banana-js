import "../../src/arrays/distinct";

test("filter a number array for distinct elements", () => {
  let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  expect(arr.distinct()).toEqual([1, 2, 3, 4, 5]);
});

test("Distinct elements in array of objects", () => {
  let arr = [
    {
      name: "blackberry",
      type: "fruit"
    },
    {
      name: "orange",
      type: "fruit"
    },
    {
      name: "blackberry",
      type: "fruit"
    }
  ];

  expect(Array.prototype.distinct(arr)).toEqual([
    {
      name: "blackberry",
      type: "fruit"
    },
    {
      name: "orange",
      type: "fruit"
    }
  ]);
});
