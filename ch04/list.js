function arrayToList(data) {
  var list = {};
  var curList = list;
  var rest = list;
  for(var i = 0; i < data.length; i++) {
    rest["value"] = data[i];
    rest["rest"] = {};
    curList = rest;
    rest = rest.rest;
  }
  curList.rest = null;
  return list;
}
function listToArray(list, arr) {
  if(arr == undefined) {
    arr = [];
  }
  if(list == null) {
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
    if(data.rest == null) {
      return null;
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
// -> 4
console.log(listToArray(arrayToList([1, 2, 3, 4, 5])));
// -> 1, 2, 3, 4, 5
