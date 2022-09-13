// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

// my solution

function myFunction(arr) {
   const b = arr[0]
   return arr.every(a=> a===arr[0])
}

// Author's

function myFunction( arr ) {
  return new Set(arr).size === 1
}
