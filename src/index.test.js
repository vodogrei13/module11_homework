import { getPercents } from "./index.js";

describe('test for getPercents function', () => {
    it('positive test', () => {
         expect(getPercents(100,30)).toBe(30); 
     }),
     it('Not a number entered', () => {
         expect(getPercents(100,'str')).toBe('Введите два числа'); 
     }),
     it('Input parameter percent is less than 0 or greater than 100', () => {
        expect(getPercents(100, 150)).toBeNaN(); 
    }),
     it ('Input parameter number is 0', () => {
         expect(getPercents(0, 50)).toBe(0);
     }),
     it ('Input parameter percent is 0', () => {
        expect(getPercents(50, 0)).toBe(0);
    }),it ('The input parameter percent is 100. In this case, the function should return a number.', () => {
        expect(getPercents(200, 100)).toBe(200);
    })
 })