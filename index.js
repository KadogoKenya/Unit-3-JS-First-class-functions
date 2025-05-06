// 1. Function that receives a callback and calls it
function receivesAFunction(callback) {
    callback(); // Calls the function passed in
  }
  
  // 2. Function that returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I'm a named function!");
    }
    return namedFunction;
  }
  
  // 3. Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I'm an anonymous function!");
    };
  }
  