(() => {
  new Array(100)
    .fill()
    .map((_, i) => i + 1)
    .forEach((v) => {
      const f = v % 3 === 0;
      const b = v % 5 === 0;
      const c = m => console.log(m);
      if (f & b) c("fizzbuzz");
      else if (f) c("fizz");
      else if (b) c("buzz");
      else c(v);
    })
})()