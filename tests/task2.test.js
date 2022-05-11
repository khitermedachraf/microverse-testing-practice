const reverseString = require('../task2');


test('expected reverse string to be for farsha', () => {
  //Arrange
  const str = 'achraf';
  // Act 
  const reverseStr = reverseString(str);
  //Assert
  expect(reverseStr).toBe('farhca');
});