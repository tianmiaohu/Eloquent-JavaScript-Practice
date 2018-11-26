for(var num = 1; num <= 100; num++) {
  var fizz = (num % 3) === 0;
  var buzz = (num % 5) === 0;
  //console.log(String(num) + fizz + "|" + buzz);
  console.log(String(num) + (fizz?(buzz?"fizzbuzz":"fizz"):(buzz?"buzz":String(num))));
}
