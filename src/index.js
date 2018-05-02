import { _ } from 'lodash';

export default (v) => {
  let val = v;
  if (v === undefined) val = 100;
  else if (Number.isNaN(Number(v))) {
    val = 0;
  } else if (Number(val) < 0) {
    throw new Error();
  } else {
    val = parseInt(v, 10);
  }

  return _.range(1, val + 1)
    .reduce((p, c) => {
      let a = p;
      const f = c % 3 === 0;
      const b = c % 5 === 0;
      if (f && b) a = [...a, 'fizzbuzz'];
      else if (f) a = [...a, 'fizz'];
      else if (b) a = [...a, 'buzz'];
      else a = [...a, c];
      return a;
    }, []);
};
