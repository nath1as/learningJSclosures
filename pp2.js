function makeList(arg) {
  var todos = [];
  var todo = arg;

  return function todoList(todo) {
    if (todos.includes(todo)) {
      todos.map(function (savedTodo) {
        (savedTodo != todo) ? todos.push(savedTodo) : false;
      });
      console.log(todo + " removed!");
    } else if (todo === undefined) {
      if (todos.length === 0) {
        console.log("The list is empty.");
      } else {
        todos.forEach(function (todo) {
          console.log(todo);
        });
      }
    }
    else {
      todos.push(todo);
      console.log(todo + " added!");
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
