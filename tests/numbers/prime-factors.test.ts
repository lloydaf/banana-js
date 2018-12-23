import "../../src/numbers/prime-factors";

test("Prime factors of single digit numbers", () => {
    expect(Number(10).primeFactors()).toEqual([2,5]);
    expect(Number(9).primeFactors()).toEqual([3])
    expect(Number(7).primeFactors()).toEqual([7]);
    expect(Number(14).primeFactors()).toEqual([2,7]);
});
