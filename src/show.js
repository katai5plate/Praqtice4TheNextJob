import FizzBuzz from './index';

FizzBuzz(process.argv[2])
  .forEach((v, i) => {
    console.log(`  ${i + 1}:\t${v}`);
  });
