// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function myClosure() {
    const name = 'lad';
    helloClosureMyOldFriend();

    function helloClosureMyOldFriend() {
        console.log(`Aye, ${name},  it is operational`);
    }
}
myClosure();


// ==== Challenge 2: Create a counter function ====


function counter() {
  var x = 0;
  function newCounter() {
    return x = x + 1;
  }
  newCounter();
  return newCounter;
}

var number = counter();

// console.log(number());
// console.log(number());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let myCounter = 0;

  function changeBy(foo) {
    return myCounter += foo;
  }
  function multiply(foo) {
    return myCounter = myCounter * foo;
  }
  return {
    increase: function() {
      changeBy(1);
    },
    decrease: function() {
      changeBy(-1);
    },
    double: function() {
      multiply(2);
    },
    triple: function() {
      multiply(3);
    },
    value: function() {
      return myCounter;
    }
  }
}

const newFactory = counterFactory();
newFactory.increase();
newFactory.increase();
console.log(newFactory.value());
newFactory.decrease();
console.log(newFactory.value());
newFactory.double();
newFactory.increase();
console.log(newFactory.value());
newFactory.triple();
console.log(newFactory.value());