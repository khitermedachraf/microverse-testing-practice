const stringLength = require('../task1');

test('expected length for microverse is 11', () => {
  expect(stringLength('microvesre')).toBe(10);
})