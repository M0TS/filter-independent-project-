# Bob the Alien has crashed his spaceship on the moon and requires specific lunar minerals to repower his spaceship.
![image](https://github.com/M0TS/filter-independent-project-/assets/151381549/b12788c0-622e-4561-8c45-092daae136ba)
![image](https://github.com/M0TS/filter-independent-project-/assets/151381549/e3de38da-2725-4413-bce0-c86c57ec4147)

# Filter() method
## The filter() method is an ES6 method. It provides a cleaner syntax to filter through an array. It creates a new array containing only the elements that meet a specified condition, without modifying the original array.

## How to Filter an Array in JavaScript
- Using the filter method involves making a fresh copy of a part of the original array. It selects elements from the array based on a condition defined by a given function.

- The filter method works through an array one element at a time. It runs a specified callback function for each element, creating a new array with only the elements that satisfy the condition specified in the callback function. Elements that don't meet the condition are excluded from the new array.



## How to Filter an Object in JavaScript
- JavaScript objects don't support direct iteration like arrays or strings, making it impossible to use methods like filter() or a for loop directly on them. However, you can filter an object by first converting it to an array using object static methods such as Object.keys(), Object.values(), or Object.entries(). After converting to an array, you can apply the filter() method to get a new array with the filtered elements.

- For example, if you have an object storing users' details, including their name, age, and occupation, these object static methods help transform the object's keys, values, or key-value pairs into arrays for further processing.

## Time and Space Complexity of .filter() in JavaScript
- Array.prototype.filter(): O(n) time complexity and O(n) space complexity. This method creates a new array with all elements that pass the test implemented by the provided function.

## Supported Browsers:
The browsers supported by the JavaScript Array filter() method : 
- Google Chrome
- Microsoft Edge 9.0
- Mozilla Firefox 1.5
- Safari
- Opera

Reference links
[BroCode(video)](https://www.youtube.com/watch?v=VvSEKHKFvpQ),
[FreeCodeCamp](https://www.freecodecamp.org/news/filter-arrays-in-javascript/),
[Javascript.plainenglish](https://javascript.plainenglish.io/understanding-time-and-space-complexity-of-common-javascript-built-in-methods-39a3285a6409),
[GeeksForGeeks](https://www.geeksforgeeks.org/javascript-array-filter-method/#),
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
[W3Schools](https://www.w3schools.com/jsref/jsref_filter.asp)






