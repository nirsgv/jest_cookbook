const functions = require('../main');

test('getRandomBetween to be a function', () => {
   expect(typeof(functions.getRandomNumBetween)).toBe('function');
});

test('getRandomBetween to return a number', () => {
   expect(typeof(functions.getRandomNumBetween(2,5))).toBe('number');
});

test('getRandomBetween to return a number greater than or equal the min parameter', () => {
    expect(functions.getRandomNumBetween(2,5)).toBeGreaterThanOrEqual(2);
    expect(functions.getRandomNumBetween(2,5)).toBeLessThanOrEqual(5);
});

test('getRandomBetween to return a number lesser than the max parameter', () => {
    expect(functions.getRandomNumBetween(5,5)).toBeLessThan(5.0001);
});

test('getRandomBetween to return a number lesser than the max parameter', () => {
    expect(functions.getRandomNumBetween(2,2)).toBe(2);
});

test('getRandomBetween to return a number in range even if it receives an array of numbers', () => {
    expect(functions.getRandomNumBetween([2,12,4,23,3])).toBeGreaterThanOrEqual(2);
    expect(functions.getRandomNumBetween([2,12,4,23,3])).toBeLessThanOrEqual(23);
    expect(functions.getRandomNumBetween(2,23)).toBeGreaterThanOrEqual(2);
    expect(functions.getRandomNumBetween(2,23)).toBeLessThanOrEqual(23);
});
