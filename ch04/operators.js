var anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
console.log("left" in anObject);
// -> true
delete anObject.left;
console.log("left" in anObject);
// -> false 
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true
console.log(typeof [1,2]);
// -> object
console.log(typeof "string");
// -> string
console.log(typeof 32);
// -> number
console.log(typeof true);
// -> boolean
console.log(typeof undefined);
// -> undefined
console.log(typeof (typeof undefined));
// -> string
console.log(typeof null);
// -> object
var arr = [2, 3];
arr["new prop"] = "new value";
console.log("new prop" in arr);
// -> true
console.log(arr["new prop"]);
// -> new value
function checkArgs() {
  console.log(typeof arguments);
}
checkArgs();
// -> object
var bad;
console.log(bad == undefined);
// -> true
bad = null;
console.log(bad == null);
// -> true
console.log(typeof console.log);
// -> function
