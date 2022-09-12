// Write a function that takes a number as argument
// Round the number to the 2nd digit after the comma
// Return the rounded number

function myFunction(n) {
  return Math.round((n + Number.EPSILON) * 100) / 100
}
