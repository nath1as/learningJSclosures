function makeCounterLogger(start) {
  return function(finish) {
    var i;

    if (start > finish) {
      for (i = start; i >=finish; i -= 1) {
        console.log(i);
      }
    } else {
      for (i = start; i <= finish; i += 1) {
        console.log(i);
      }
    }
  };
}

var countlog = makeCounterLogger(5);
countlog(8);
countlog(2);
