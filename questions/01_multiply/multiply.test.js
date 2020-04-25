const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply("stret",'asdf')).toThrow();

    expect(() => multiply([1,2,3],4)).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    const result=(num1*num2)
    expect(10,3).toBe(30);

    // test that the returned value is correct
    const result=(num1*num2)
    expect(15,4).toBe(60);
s
    // test some other values
    const result=(num1*num2)
    expect(2,5).toBe(10);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values
    const result=(num1*num2)
    expect(3,2).toBe(6);
    
    const result=(num1*num2)

    expect(11,2).toBe(22)
  });
});
