function makeMultipleLister(num) {
  var value = num;

  return function () {
    while (value <= 100) {
      console.log(value);
      value = value + num;
    }
  };
}

var lister = makeMultipleLister(13);
lister();
