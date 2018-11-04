function countdown(count) {
  (function cd (num) {
    if (num > 0) {
      console.log(num);
      cd(num - 1);
    }
    console.log('Done!');
  })(count);
}

countdown(7);


function countdown2(count) {
  (function recursiveSub(n) {
    console.log(n);

    if (n === 0) {
      console.log('Done!');
    } else {
      recursiveSub(n - 1);
    }
  })(count);
}

countdown2(7);
