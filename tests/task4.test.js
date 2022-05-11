const capitalize = require('../task4');

test('expected length for achraf to be 6', () => {
  //Arrange
  const str = 'achraf';
  //Act 
  const capitalizedStr = capitalize(str);
  //Assert
  expect(stringLength(capitalizedStr)).toBe('Achraf');
})
