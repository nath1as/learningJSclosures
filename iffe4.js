function countdown(count) {
  (function (num) {
    for (var i = num; i > 0; i--){
      console.log(i);
    }
    console.log('Done!');
  })(count);
}

countdown(7);
