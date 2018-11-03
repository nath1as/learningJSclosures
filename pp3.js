function makeList() {
  var items = [];

  return function(newItem) {
    var index;
    if (newItem) {
      index = items.indexOf(newItem);
      if (index === -1) {
        items.push(newItem);
        console.log(newItem + ' added!');
      } else {
        items.splice(index, 1);
        console.log(newItem + ' removed!');
      }
    } else {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(function(item) {
          console.log(item);
        });
      }
    }
  };
}


var list = makeList();
list();
list('make breakfast');
list('read book');
list();
list('make breakfast');
list();
