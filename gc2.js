var myNum = 1;

function foo() {
  var myStr = 'A string';
  // what is eligible for GC here?
  // nothing
}

foo();

// what is eligible for GC here?
// "A string"
// more code
