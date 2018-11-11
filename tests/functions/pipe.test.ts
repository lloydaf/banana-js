import "../../src/functions/pipe";
function addOne(num: number) {
  return num + 1;
}
function addTwo(num: number) {
  return num + 2;
}
function square(num: number) {
  return num * num;
}

function multiply(...args){
  let product = 1;
  return args.reduce((a,b)=>a*b,product);
}

test("Simple Composition, single arity function", () => {
  expect(addOne(2).pipe(addTwo)).toEqual(5);
});

test("Multiple Composition, single arity functions", () => {
  expect(
    addOne(3)
      .pipe(square)
      .pipe(square)
  ).toEqual(256);
});

test("Pipe All with two single arity functions", () => {
    expect(addOne(1).pipeAll(addTwo,square)).toEqual(16);
});


test("Piping methods with multiple arity",()=>{
  expect(addOne(1).pipe(multiply,2,4)).toEqual(16);
})