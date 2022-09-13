
// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array


// My Solution

function myFunction(arr) {
   
   return arr[0].b > arr[1].b ? arr.reverse() : arr
}


// Author's Solution

function myFunction(arr) {
   const sort = (x, y) => x.b - y.b;
   return arr.sort(sort);
}
