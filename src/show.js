import FizzBuzz from "./index"
FizzBuzz(process.argv[2] >> 0 || 100)
  .forEach((v, i) => {
    console.log(`  ${i + 1}:\t${v}`)
  })