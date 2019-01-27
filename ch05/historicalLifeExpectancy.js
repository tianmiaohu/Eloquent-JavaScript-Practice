/*
Historical life expectancy
When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. Let’s take a closer look at that phenomenon.

Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

For bonus points, write a function groupBy that abstracts the grouping operation. It should accept as arguments an array and a function that computes the group for an element in the array and returns an object that maps group names to arrays of group members.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
 */
var ancestry = JSON.parse(require("./ancestry.js"));
var centuryGroup = {};
ancestry.forEach(function (person) {
  var century = String(Math.ceil(person.died / 100));
  if(! centuryGroup[century]) {
    centuryGroup[century] = [person.died - person.born];
  } else {
    centuryGroup[century].push(person.died - person.born);
  }
});
for(var century in centuryGroup) {
  console.log(century + ": " + average(centuryGroup[century]).toFixed(1));
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

