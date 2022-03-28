
/**
 * 
 * @param {number} from 
 * @param {number} to 
 */


///////////////////////////////////////////////////////////////////OUTPUT EVERY SECONDS

function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  // usage:
  printNumbers(5, 10);

///////////////////////////////////////////////////////////////////////////
  /**
 * 
 * @param {number} from 
 * @param {number} to 
 */

