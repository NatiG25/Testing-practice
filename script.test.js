// Task 1
const stringLength = require('./modules/stringLength');

test('Number of characters cat to equal 3', () => {
  expect(stringLength('cat')).toBe(3);
})

// Task 2 
const reverseString = require('./modules/reverse');

test('Reverse of car to equal rac', () => {
  expect(reverseString('monkey')).toBe('yeknom');
})

// Task 3
const calculator = require('./modules/calculator');
const calculte = new calculator(90, 2);
const calculte2 = new calculator(21, 7);
const calculte3 = new calculator(48, 6);

describe('Addition', () => {
  test('Add numbers properly', () => {
    expect(calculte.add()).toBe(92);
    expect(calculte2.add()).toBe(28);
    expect(calculte3.add()).toBe(54);
  })
});

describe('Subtraction', () => {
  test('Subtract 90 - 2', () => expect(calculte.subtract()).toBe(88));
  test('Subtract 21 - 7', () => expect(calculte2.subtract()).toBe(14));
  test('Subtract 48 - 6', () => expect(calculte3.subtract()).toBe(42));
});

describe('Division', () => {
  test('divide 90 / 2', () => expect(calculte.divide()).toBe(45));
  test('divide 21 / 7', () => expect(calculte2.divide()).toBe(3));
  test('divide 48 / 6', () => expect(calculte3.divide()).toBe(8));
});

describe('Multiplication', () => {
  test('multiply 90 * 2', () => expect(calculte.multiply()).toBe(180));
  test('multiply 21 * 7', () => expect(calculte2.multiply()).toBe(147));
  test('multiply 48 * 6', () => expect(calculte3.multiply()).toBe(288));
});

// Task 4
test('Change hello to Hello', () => {
  const capitalize = string => string[0].toUpperCase() + string.substring(1);
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('cat')).toBe('Cat');
})