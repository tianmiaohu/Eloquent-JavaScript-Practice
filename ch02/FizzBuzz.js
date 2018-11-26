for(var num = 1; num <= 100; num++) {
  var fizz = false, buzz=false;
  if((num % 3) === 0) fizz = true;
  if((num % 5) === 0) buzz = true;
  if(fizz && buzz) {
    console.log(String(num) + "=fizzbuzz");
  } else {
    if(fizz) {
      console.log(String(num) + "=fizz");
    } else if(fizz) {
      console.log(String(num) + "=buzz");
    } else {
      console.log(num);
    }
  }
}
