import "../intersection";

test("Intersection of two number arrays", () => {
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [2, 3, 4, 5, 6];
  expect(arr1.intersection(arr2)).toEqual([2, 3, 4, 5]);
});

test("Intersection using Array.prototype", () => {
  let characters = [
    {
      name: "Cersei",
      house: "Lannister"
    },
    {
      name: "Arya",
      house: "Stark"
    },
    {
      name: "Olenna",
      house: "Tyrell"
    }
  ];
  let starks = [
    {
      name: "Brandon",
      house: "Stark"
    },
    {
      name: "Arya",
      house: "Stark"
    }
  ];
  console.log(characters.indexOf({
    name: "Arya",
    house: "Stark"
  }));
  expect(Array.prototype.intersection(characters, starks)).toEqual([
    { name: "Arya", house: "Stark" }
  ]);
});
