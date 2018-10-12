import "..";

test("Strain an element from an array", () => {
  let arr = [1, 2, 3, 4, 5];
  expect(arr.strain(el => el < 3)).toEqual(1);
});

test("Straining objects from an array", () => {
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
      name: "eggplant",
      type: "vegetable"
    }
  ];

  let obj = arr.strain(el => el.name === "blackberry");
  expect(obj).toEqual({
    name: "blackberry",
    type: "fruit"
  });
});

