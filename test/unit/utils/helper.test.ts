import adder, { sayHello } from '../../../src/utils/helper';

test('some test for adding', () => {
    expect(adder(1, 2)).toBe(3);
});