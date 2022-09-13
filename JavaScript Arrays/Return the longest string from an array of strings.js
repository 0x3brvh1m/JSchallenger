// Write a function that takes an array of strings as argument
// Return the longest string

// My Solution

function myFunction(arr) {
   
   return arr.sort((a,b)=>b.length-a.length)[0]
}


// Author's

function myFunction( arr ) {
return arr.reduce((a, b) => a.length <= b.length ? b : a)
}
