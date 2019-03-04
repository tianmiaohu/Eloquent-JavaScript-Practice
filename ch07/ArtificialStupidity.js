/*
Artificial stupidity
Having the inhabitants of our world go extinct after a few minutes is kind of depressing. To deal with this, we could try to create a smarter plant eater.

There are several obvious problems with our herbivores. First, they are terribly greedy, stuffing themselves with every plant they see until they have wiped out the local plant life. Second, their randomized movement (recall that the view.find method returns a random direction when multiple directions match) causes them to stumble around ineffectively and starve if there don’t happen to be any plants nearby. And finally, they breed very fast, which makes the cycles between abundance and famine quite intense.

Write a new critter type that tries to address one or more of these points and substitute it for the old SmartPlantEater type in the valley world. See how it fares. Tweak it some more if necessary.
*/
// Your code here
function SmartPlantEater() {
  this.energy = 20;
  this.plantCount = 0;
  this.reproduced = false;
  this.bumped = 0;
  this.age = 0;
}
SmartPlantEater.prototype.showInfo = function(action) {
  console.log("Energy=" + String(this.energy) + ":Age=" + String(this.age) + ":reproduced=" + this.reproduced + ":action=" + action);
}
SmartPlantEater.prototype.act = function(view) {
  var space = view.find(" ");
  var plant = view.find("*");
  var bump = view.find("s");
  this.age ++;
  if(bump) {
    this.bumped ++;
    this.showInfo("bumped");
  }
  if ((plant && (! this.reproduced)) || (this.bumped === 3)) {
    this.bumped = 0;
    this.plantCount ++;
    if(this.plantCount > 1 || this.energy == 1) {
      this.showInfo("eat");
      this.plantCount --;
      return {type: "eat", direction: plant};
    }
  }
  if (space) {
    if(! this.reproduced) {
      if (this.energy > 70) {
        if(Math.random() >= 0) {
          this.showInfo("reproduce");
          this.reproduced = true;
          return {type: "reproduce", direction: space};
        }
      }
    }
    if(this.energy > 1) {
      return {type: "move", direction: space};
    }
  }
};

var valley = new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  s  *##",
   "#    ***     s    ##**    *#",
   "#       s         ##***    #",
   "#                 ##**     #",
   "#   s       #*             #",
   "#*          #**       s    #",
   "#***        ##**    s    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "s": SmartPlantEater,
   "*": Plant}
);
