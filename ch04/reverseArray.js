function reverseArray(data) {
  var newArray = [];
  for(var i = 0; i < data.length; i++) {
    newArray.unshift(data[i]);
  }
  return newArray;
}
function reverseArrayInPlaceCheating(data) {
  var newArray = reverseArray(data);
  for(var i = 0; i < data.length; i++) {
    data[i] = newArray[i];
  }
  return data;
}
function reverseArrayInPlace(data) {
  var half = Math.floor(data.length / 2);
  for(var i = 0; i < half; i++) {
    var tmp = data[data.length - i -1];
    data[data.length - i - 1] = data[i];
    data[i] = tmp;
  }
}
console.log(reverseArray([1, 2, 3, 4, 5]));
// -> 5, 4, 3, 2, 1
var data = [1, 2, 3, 4, 5];
reverseArrayInPlace(data);
console.log(data);
// -> 5, 4, 3, 2. 1
data = [1, 2, 3, 4];
reverseArrayInPlace(data);
console.log(data);
// -> 4, 3, 2. 1
