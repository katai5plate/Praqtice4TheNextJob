import FizzBuzz from '../src/index';

test('FizzBuzzの14番目（15）が「fizzbuzz」である', () => {
  expect(FizzBuzz(100)[14]).toBe('fizzbuzz');
});
