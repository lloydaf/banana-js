import {primeFactorize} from '../../src/numbers/prime-factorize';

test("Prime factors of a one digit number",()=>{
    expect(primeFactorize(9)).toEqual({"3":2});
    expect(primeFactorize(10)).toEqual({"2":1,"5":1});
    expect(primeFactorize(20)).toEqual({"2":2,"5":1});
})