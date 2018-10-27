import "../../src/arrays/difference";
test("difference of primitive array", () => {
  const shoppingList = ["Apple", "Toothpaste", "Boots"];
  const unavailableItems = ["Gasoline", "Ribbon", "Apple"];
  const newShoppingList = shoppingList.difference(unavailableItems);
  expect(newShoppingList).toEqual(["Toothpaste", "Boots"]);
});


test("difference of array with instance objects",()=>{
  class Animal{
    name: string;
    age: number;
    constructor(name,age){
      this.name = name;
      this.age = age;
    }
  }

  const lion = new Animal("Lion",15);
  const cat = new Animal("Cat",5);
  const wolf = new Animal("Wolf",7);
  const whale = new Animal("Whale",15);
  const turtle = new Animal("Turtle",45);
  
  const common = [lion,cat,wolf,turtle];
  const endangered = [whale,turtle];
  const unthreatened = common.difference(endangered);
  expect(unthreatened).toEqual([lion,cat,wolf]);
})