import "../../src/numbers/prime-factors";

test("Prime factors of 10", () => {
    const no:Number = 10;
    expect(no.primeFactors()).toEqual([2,5]);
});
