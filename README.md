# standard-utils

A very small library for making development with typescript easier.
Contains utility functions I wish was there in typescript.

# Usage

Import the library as follows:

```typescript
import "standard-utils";
```

You can now use the utility functions within your application.

# Strainer

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

let obj = arr.strain(el=>el.name==="blackberry");
console.log(obj); //{name: "blackberry",type: "fruit"}
```
