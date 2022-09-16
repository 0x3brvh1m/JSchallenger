// Write a function that takes two sets (a and b) as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in a as well as b

function myFunction(a, b) {
   const z = [];
   [...a].forEach(a=>[...b].includes(a) ? z.push(a) : '')
   return (new Set(z))
}
