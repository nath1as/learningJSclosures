function makePartialFunc(func, n) {
  return function (a) {
    return func(a, n);
  };
}

function multiply(a, b) {
  return a * b;
}

var multiplyBy5 = makePartialFunc(multiply, 5);

multiplyBy5(100); // 500

