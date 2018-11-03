function makeList() {
  var items = [];

  return {
    add: function(todo) {
      var index = items.indexOf(todo);
      if (index === -1) {
        items.push(todo);
        console.log(todo + ' added!');
      }
    },
    remove: function(todo) {
      var index = items.indexOf(todo);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(todo + ' removed!');
      }
    },
    list: function() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(function(item) {
          console.log(item);
        });
      }
    },
    clear: function() {
      items = [];
      console.log('all items deleted!');
    },

  };
}

var list = makeList();

list.add('peas');
list.add('corn');
list.list();
list.clear();
list.list();
