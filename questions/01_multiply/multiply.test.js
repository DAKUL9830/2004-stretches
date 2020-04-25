const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply((10,3)).toThrow();

    expect(() => multiply(15,4)).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(10,3).toBe(30);

    // test that the returned value is correct
    expect(15,4).toBe(60);

    // test some other values
    expect(2,5).toBe(10);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values
    expect(3,2).toBe(6);

    expect(11,2).toBe(22)
  });
});
