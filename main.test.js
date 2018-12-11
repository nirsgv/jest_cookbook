const functions = require('./main');

test('sums parameter value to equal intended result', () => {
    expect(functions.sum(1, 2)).toBe(3);
    expect(functions.sum(0, 0)).toBe(0);
    expect(functions.sum(3, -5)).not.toBe(null);
    expect(functions.sum(3, -5)).not.toBeUndefined();
});

test('getNUll to return null', () => {
   expect(functions.getNull()).toBeNull();
   expect(functions.getNull()).toBeFalsy();
   expect(functions.getNull()).not.toBeTruthy();
});

test('getValue to return passed-in value', () => {
   expect(functions.getValue(null)).toBeNull();
   expect(functions.getValue(undefined)).toBeFalsy();
   expect(functions.getValue(8)).toBe(8);
});

test('test user to equal given user object', () => {
   expect(functions.createUser('Cohen')).not.toBe({firstName:'Brad',lastName:'Cohen'});
   expect(functions.createUser('Cohen')).toEqual({firstName:'Brad',lastName:'Cohen'});
});

// regex
test('there is no I in team', () => {
   expect('teamI').toMatch(/I/);
   expect('teamI').not.toMatch(/i/);
   expect('teamI').toMatch(/i/i);
});

// arrays

test('the array to contain an item', () => {
    expect(functions.getArrayFrom('asd,sdf,dfg')).toContain('asd');
});