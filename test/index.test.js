import FizzBuzz from '../src/index';

test('FizzBuzzの14番目（15）が「fizzbuzz」である', () => {
  expect(FizzBuzz(100)[14]).toBe('fizzbuzz');
});

test('引数が少なくとも 0 以上 100 以下である場合、戻り値の要素数が引数と等しい。', () => {
  for (let i = 0; i <= 100; i += 1) {
    expect(FizzBuzz(i)).toHaveLength(i);
  }
});

const fb = FizzBuzz(100);

test('戻り値の要素の期待値が 3 の倍数である場合、fizz が含まれる。', () => {
  for (let i = 0; i < fb.length; i += 1) {
    if ((i + 1) % 3 === 0) {
      expect(fb[i].indexOf('fizz') !== -1).toBe(true);
    }
  }
});

test('戻り値の要素の期待値が 5 の倍数である場合、Buzz が含まれる。', () => {
  for (let i = 0; i < fb.length; i += 1) {
    if ((i + 1) % 5 === 0) {
      expect(fb[i].indexOf('buzz') !== -1).toBe(true);
    }
  }
});

test('戻り値の要素の期待値が 3 と 5 の公倍数である場合、FizzBuzz が含まれる。', () => {
  for (let i = 0; i < fb.length; i += 1) {
    if (((i + 1) % 3 === 0) && ((i + 1) % 5 === 0)) {
      expect(fb[i].indexOf('fizzbuzz') !== -1).toBe(true);
    }
  }
});

test('戻り値の要素の期待値が 3 または 5 の倍数でない場合、期待値と等しい。', () => {
  for (let i = 0; i < fb.length; i += 1) {
    if (((i + 1) % 3 !== 0) && ((i + 1) % 5 !== 0)) {
      expect(fb[i] === i + 1).toBe(true);
    }
  }
});

test('引数を省略した場合、100 とみなす。', () => {
  expect(FizzBuzz()).toHaveLength(100);
});

test('引数に負数を指定した場合、例外を発生させる。', () => {
  for (let i = 0; i < fb.length; i += 1) {
    expect(FizzBuzz(-i)).toThrow();
  }
});

test('引数に NaN を指定した場合、0 とみなす。', () => {
  expect(NaN).toHaveLength(0);
  expect('あ').toHaveLength(0);
});
