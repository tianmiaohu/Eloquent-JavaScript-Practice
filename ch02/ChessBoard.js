var boardSize = 10;
var rowSwitch = 1;
for(var row = 0; row < boardSize; row++) {
  var line = "";
  rowSwitch *= -1;
  var colSwitch = 1;
  for(var col = 0; col < boardSize; col++) {
    colSwitch *= -1;
    if(rowSwitch * colSwitch === 1) {
      line += " ";
    } else {
      line += "#";
    }
  }
  console.log(line);
}
