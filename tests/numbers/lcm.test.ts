import {lcm} from '../../src/numbers/lcm';

test("LCM of one digit numbers",()=>{
    expect(lcm(2,3)).toEqual(6);
    expect(lcm(4,5)).toEqual(20);
})