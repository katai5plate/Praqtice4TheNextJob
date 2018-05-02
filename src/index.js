import { _ } from 'lodash';

export default v => _.range(1, v + 1)
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
