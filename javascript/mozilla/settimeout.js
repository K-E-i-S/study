// With a named function
let myGreeting = setTimeout(function sayHi() {
  alert('Hello, Mr. Universe!');
}, 2000);

// With a function defined separately
function sayHi() {
  alert('Hello Ms. Universe!');
}

myGreeting = setTimeout(sayHi, 2000);
