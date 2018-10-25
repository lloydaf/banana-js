import "../src/arrays/difference";
test("difference of primitive array", () => {
  const shoppingList = ["Apple", "Toothpaste", "Boots"];
  const unavailableItems = ["Gasoline", "Ribbon", "Apple"];
  const newShoppingList = shoppingList.difference(unavailableItems);
  expect(newShoppingList).toEqual(["Toothpaste", "Boots"]);
});
