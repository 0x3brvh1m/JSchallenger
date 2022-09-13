// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

//my solution

function myFunction(a, b) {
   
   return a.filter(a=>a>b).reduce((a,b)=>a+b)
}

// Author's

function myFunction(a, b) {
  return a.reduce((sum, cur) => {
    if (cur > b) return sum + cur;
    return sum;
  }, 0);
}
