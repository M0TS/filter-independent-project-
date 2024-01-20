const lunarMinerals = ['pyroxene', 'olivine', 'feldspar','ilmenite', 'spinel', 'armalcolite'];
//  Array named lunarMinerals containing words representing different types of minerals.

// Filter() method:
const filterLunarMinerals = lunarMinerals.filter(filterMinerals);
// The filter method is used on the lunarMinerals array.
// The filter method creates a new array (filterLunarMinerals) containing only the minerals names that have a length of 8 characters or more.

console.log(filterLunarMinerals); // Output: [ 'pyroxene', 'feldspar', 'ilmenite', 'armalcolite' ]
// The console.log statement prints the filtered array to the console.

// Callback function:
function filterMinerals(element) { 
  return element.length >= 8;
} 
// The filter method needs a callback function to decide which elements to include.
// The callback function checks if the length of each mineral's name is greater than or equal to 8 characters.

// Arrow function:
const filterLunarMinerals = lunarMinerals.filter(mineral => mineral.length >= 8);
// lunarMinerals is an array containing the mineral names.
// .filter() creates a new array containing the elements that pass the provided test.
// (mineral => mineral.length >= 8) This is an arrow function used as the test condition for filtering. It takes each mineral in the array as a parameter and checks if the length of the mineral name is greater than or equal to 8.
// filterLunarMinerals is the resulting array after applying the filter. It contains only the elements(minerals) where the condition mineral.length >= 8 is true.
console.log(filterLunarMinerals);
