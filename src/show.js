import FizzBuzz from './index';

FizzBuzz(parseInt(process.argv[2], 10) || 100)
  .forEach((v, i) => {
    console.log(`  ${i + 1}:\t${v}`);
  });
