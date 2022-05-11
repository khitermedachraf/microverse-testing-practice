const calculator = require('../task3');

describe(' simple calculator class, which  have 4 methods: add, subtract, divide, and multiply', () => {
  describe('add method tests', () => {
    test('should pass test1', () => {
      expect(calculator.add(2, 3)).toBe(5);
    })
    test('should pass test2', () => {
      expect(calculator.add(4, 5)).toBe(9);
    })
    test('should pass test3', () => {
      expect(calculator.add(6, 7)).toBe(13);
    })
  });

});
