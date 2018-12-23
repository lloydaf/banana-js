import '../../src/numbers/prime-factorize';

test("Prime factors of a one digit number",()=>{
    expect(Number(9).primeFactorize()).toEqual({"3":2});
    expect(Number(10).primeFactorize()).toEqual({"2":1,"5":1});
    expect(Number(20).primeFactorize()).toEqual({"2":2,"5":1});
})