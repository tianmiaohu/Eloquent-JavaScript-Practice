var arrays = [[1, 2, 3], [4, 5], [6]];
var flattendedArray = arrays.reduce(function(reduced, data) {
  return reduced.concat(data);
});
console.log(flattendedArray);
console.log(flattendedArray.join("/"));
