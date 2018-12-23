# Utils

## Strain

This is a utility that lets you filter an array for a single element and returns that element.
If more than one elements remain in the filtered array, the first element is returned.

```typescript
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
console.log(obj); //{name: "blackberry",type: "fruit"}
```

## Distinct

This is a function that returns the distinct elements within an array.

```typescript
let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

let obj = arr.distinct();
console.log(obj); //[1, 2, 3, 4, 5]
```

## Intersection

This is a function that returns the intersection of two arrays

```typescript
import {intersection} from '@lloydaf/banana-js/dist/arrays/intersection';

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
console.log(intersection(characters, starks)); //[{ name: "Arya", house: "Stark" }]);
```

## Difference

This is a function that returns the difference between two arrays.

```typescript
const shoppingList = ["Apple", "Toothpaste", "Boots"];
const unavailableItems = ["Gasoline", "Ribbon", "Apple"];
const newShoppingList = shoppingList.difference(unavailableItems);
console.log(newShoppingList); //["Toothpaste", "Boots"]
```

## Contains All

This is a function that tells you if an array contains all the elements in another array.

```typescript
let arr1 = ["Hello", "my", "name", "is", "Lloyd"];
let arr2 = ["name", "is"];
console.log(arr1.containsAll(arr2)); //true
console.log(arr2.containsAll(arr1)); //false
```
