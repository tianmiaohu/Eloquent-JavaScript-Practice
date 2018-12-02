function range(start, end) {
  var data = [];
  var step = 1;
  if(arguments.length == 3) {
    step = arguments[2];
    if((step > 0 && start > end) ||
      (step < 0 && start < end) ||
      (step == 0) ) {
        console.log("Cannot produce a valid range with the following parameters: ", arguments);
      }
  }
  if(step > 0 && start > end) {
    step *= -1;
  }
  if(step > 0) {
    for(var i = start; i <= end; i=i+step) {
      data.push(i);
    }
  } else {
    for(var i = start; i >= end; i=i+step) {
      data.push(i);
    }
  }
  return data;
}
function sum(data) {
  var sum = 0;
  for(var i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}
console.log(range(3, 10));
// -> 3, 4, 5, 6, 7, 8, 9, 10
console.log(sum(range(1, 10)));
// -> 55
console.log(range(5, 2, -1));
// -> 5, 4, 3, 2
console.log(range(5, 1)); //use negative one as step
// -> 5, 4, 3, 2
console.log(range(5, 1, 1)); //use negative one as step
// -> error
data = range(5, 1, -1);
console.log(data.reverse());
// -> 1, 2, 3, 4, 5
