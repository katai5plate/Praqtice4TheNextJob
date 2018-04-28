import { _ } from "lodash";
export default v => {
  return _.range(1, v + 1)
    .reduce((p, c) => {
      const f = c % 3 === 0;
      const b = c % 5 === 0;
      if (f & b) p.push("fizzbuzz");
      else if (f) p.push("fizz");
      else if (b) p.push("buzz");
      else p.push(c);
      return p;
    }, [])
};