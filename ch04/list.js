function arrayToList(data) {
  var list = {};
  var rest = list;
  for(var i = 0; i < data.length; i++) {
    rest.value = data[i];
    rest.rest = {};
    rest = rest.rest;
  }
  return list;
}
function listToArray(list, arr) {
  if(arr == undefined) {
    arr = [];
  }
  if(list.rest == undefined) {
    return arr;
  } else {
    arr.push(list.value);
    return listToArray(list.rest, arr);
  }
}
function nth(data, pos, curPos) {
  if(arguments.length == 2) {
    curPos = 0;
  }
  //console.log(curPos, pos);
  if(curPos == pos) {
    return data.value;
  } else {
    if(data.rest == undefined) {
      return undefined;
    } else {
      return nth(data.rest, pos, ++curPos);
    }
  }
}
console.log(arrayToList([1, 2, 3, 4, 5]));
// -> print out the list up to 3
console.log(nth(arrayToList([1, 2, 3, 4, 5]), 10));
// -> undefined
console.log(nth(arrayToList([1, 2, 3, 4, 5]), 3));
// -> undefined
console.log(listToArray(arrayToList([1, 2, 3, 4, 5])));
// -> 1, 2, 3, 4, 5
