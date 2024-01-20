const lunarMinerals = ['pyroxene', 'olivine', 'feldspar','ilmenite', 'spinel', 'armalcolite'];
//  Array named lunarMinerals containing words representing different types of minerals.

// Filter() method:
const filterLunarMinerals = lunarMinerals.filter(filterMinerals);
// The filter method is used on the lunarMinerals array.
// The filter method creates a new array (filterLunarMinerals) containing only the minerals whose names have a length of 8 characters or more.

console.log(filterLunarMinerals); // Output: [ 'pyroxene', 'feldspar', 'ilmenite', 'armalcolite' ]
// The console.log statement prints the filtered array to the console.

// Callback function:
function filterMinerals(element) { 
  return element.length >= 8;
} 
// The filter method needs a callback function to decide which elements to include.
// The callback function checks if the length of each mineral's name is greater than or equal to 8 characters.
