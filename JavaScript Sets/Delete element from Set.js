function myFunction(set, val) {
   
   return set.has(val) ? (set.delete(val) && set) : set
}
