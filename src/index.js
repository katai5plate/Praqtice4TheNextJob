import { _ } from "lodash"
export default v => {
  return _.range(1, v + 1)
    .reduce((p, c) => {
      const f = c % 3 === 0
      const b = c % 5 === 0
      if (f & b) p =  [...p, "fizzbuzz"]
      else if (f) p = [...p, "fizz"]
      else if (b) p = [...p, "buzz"]
      else p =        [...p, c]
      return p
    }, [])
}