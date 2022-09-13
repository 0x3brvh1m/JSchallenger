// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

function myFunction(a, n) {
   const x = []
   for(const [i,item] of a.entries()){
   
     (i+1) % n == 0 ? x.push(item) : 0
   }
   return x
}
