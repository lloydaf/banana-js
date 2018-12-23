import "../../src/arrays/contains-all";

test("Simple Test", () => {
  let arr1 = ["Hello", "my", "name", "is", "Lloyd"];
  let arr2 = ["name", "is"];
  expect(arr1.containsAll(arr2)).toBeTruthy();
  expect(arr2.containsAll(arr1)).toBeFalsy();
});

test("Testing with empty arr", () => {
  let arr1 = ["Hello", "my", "name", "is", "Lloyd"];
  let arr2 = [];
  expect(arr1.containsAll(arr2)).toBeTruthy();
});

test("Testing with class objects", () => {
  class Person {
    name: String;
    age: Number;
    constructor(name: String, age: Number) {
      this.name = name;
      this.age = age;
    }
  }
  let luther = new Person("Luther", 56);
  let gandhi = new Person("Gandhi", 60);
  let mandela = new Person("Mandela", 70);
  let leaders = [luther, gandhi, mandela];
  let diedOld = [gandhi, mandela];
  expect(leaders.containsAll(diedOld)).toBeTruthy();
  expect(diedOld.containsAll(leaders)).toBeFalsy();
});
