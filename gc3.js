var outerFoo;

function bar() {
  var innerFoo = 0;
  outerFoo = innerFoo;
}

bar();

// can outerFoo's 0 be garbage collected here?
// no, the otherFoo's copy of the value 0 persists because its global
// more code
