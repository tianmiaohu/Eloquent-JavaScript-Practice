function deepEqual(data1, data2) {
  //console.log(data1, data2);
  if(data1 == null || data2 == null) return false;
  if(typeof data1 == "object" && typeof data2 == "object") {
    return objectCompare(data1, data2) && objectCompare(data2, data1);
  } else {
    return data1 === data2;
  }
}

function objectCompare(obj1, obj2) {
  for(var key in obj1) {
    if(! deepEqual(obj1[key], obj2[key])) return false;
  }
  return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: {is: "an"}, object: 2, extra: -1}));
// → false
