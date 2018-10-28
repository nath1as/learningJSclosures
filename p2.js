var numbers = [1, 2, 3, 4];
function checkEven(number) {
  return number% 2 === 0;
}

numbers.filted(checkEven);

// filtered is a higher order function, it takes another as an arg
