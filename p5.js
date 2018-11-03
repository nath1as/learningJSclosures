function makeListTransformer(func) {
  return function(arr) {
    return arr.map(func);
  };
}

var timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

timesTwo([1, 2, 3, 4]);
