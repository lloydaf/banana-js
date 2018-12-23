import {intersection} from "../../src/arrays/intersection";

test("Intersection of two number arrays", () => {
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [2, 3, 4, 5, 6];
  expect(intersection(arr2, arr1)).toEqual([2, 3, 4, 5]);
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
  expect(intersection(characters, starks)).toEqual([
    { name: "Arya", house: "Stark" }
  ]);
});

test("Testing with classes", () => {
  class Fruit {
    name: string;
    color: string;
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  }
  const orange = new Fruit("Orange", "Orange");
  const apple = new Fruit("Apple", "Red");
  const grape = new Fruit("Grape", "Green");
  const papaya = new Fruit("Papaya", "Orange");
  const availableFruits = [orange, apple, grape];

  const shoppingList = [orange, papaya];
  expect(intersection(availableFruits,shoppingList)).toEqual([orange]);
});
