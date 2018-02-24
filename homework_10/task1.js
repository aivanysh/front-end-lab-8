function debounce(func, delay) {
  var timeout;
  return function() {
      arg = arguments;
      function startperiod() {
          func.apply(this, arg)
      }
      if (timeout) {
          clearTimeout(timeout)
      }
      timeout = setTimeout(startperiod, delay);
  }
}

// Example

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;

  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'