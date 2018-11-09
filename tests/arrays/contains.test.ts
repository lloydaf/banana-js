import '../../src/arrays/contains';

test("Simple Test",()=>{
    let arr1 = ["Hello","my","name","is","Lloyd"];
    let arr2 = ["name","is"];
    expect(arr1.containsAll(arr2)).toBe(true);
    expect(arr2.containsAll(arr1)).toBe(false);
})