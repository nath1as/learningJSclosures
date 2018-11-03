function makeEvenCounter() {
  var index = 0;
  return function() {
    return index += 2;
  };
}

var evenCounter = makeEvenCounter();

// is 0 eligible for GC here?
// no, evenCounter is a closure
// more code
