import "../../src/strings/reverse";

test("Simple reverse", () => {
  let str = "Hello";
  expect(str.reverse()).toEqual("olleH");
});

test("Reversing empty string", () => {
  let str = "";
  expect(str.reverse()).toEqual(str);
});

test("Reversing using String.prototype", () => {
  expect(String.prototype.reverse("Lloyd")).toEqual("dyolL");
});
