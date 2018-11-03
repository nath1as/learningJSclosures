function later(fn, arg) {
  return function() {
    fn(arg);
  };
}

var logWarning = later(console.log, 'The system is shutting down!');
logWarning();
