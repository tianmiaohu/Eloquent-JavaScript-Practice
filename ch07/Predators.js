/*
Predators
Any serious ecosystem has a food chain longer than a single link. Write another critter that survives by eating the herbivore critter. You’ll notice that stability is even harder to achieve now that there are cycles at multiple levels. Try to find a strategy to make the ecosystem run smoothly for at least a little while.

One thing that will help is to make the world bigger. This way, local population booms or busts are less likely to wipe out a species entirely, and there is space for the relatively large prey population needed to sustain a small predator population.
*/
function Tiger() {
  this.energy = 20;
  this.age = 0;
  this.reproduced = false;
  this.bumped = 0;
  this.critterCount = 0;
}
Tiger.prototype.showInfo = function(action) {
  console.log("Tiger Energy=" + String(this.energy) + ":Age=" + String(this.age) + ":reproduced=" + this.reproduced + ":action=" + action);
}
Tiger.prototype.act = function(view) {
  var space = view.find(" ");
  var critter = view.find("s");
  var bump = view.find("@");
  this.age ++;
  if(bump) {
    this.bumped ++;
    this.showInfo("bumped");
  }
  if (critter) {
    this.bumped = 0;
    this.critterCount ++;
    if(this.critterCount > 1 || this.energy == 1) {
      this.showInfo("eat");
      this.critterCount --;
      return {type: "eat", direction: critter};
    }
  }
  if (space) {
    //if(! this.reproduced) {
      if (this.energy > 70) {
        if(Math.random() >= 0) {
          this.showInfo("reproduce");
          this.reproduced = true;
          return {type: "reproduce", direction: space};
        }
      }
    //}
    if(this.energy > 1) {
      return {type: "move", direction: space};
    }
  }
};


function SmartPlantEater() {
  this.energy = 20;
  this.plantCount = 0;
  this.reproduced = false;
  this.bumped = 0;
  this.age = 0;
}
SmartPlantEater.prototype.showInfo = function(action) {
  console.log("Critter Energy=" + String(this.energy) + ":Age=" + String(this.age) + ":reproduced=" + this.reproduced + ":action=" + action);
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
  //if ((plant && (! this.reproduced)) || (this.bumped === 3)) {
  if (plant) {
    this.bumped = 0;
    this.plantCount ++;
    if(this.plantCount > 1 || this.energy == 1) {
      this.showInfo("eat");
      this.plantCount --;
      return {type: "eat", direction: plant};
    }
  }
  if (space) {
    //if(! this.reproduced) {
      if (this.energy > 70) {
        if(Math.random() >= 0) {
          this.showInfo("reproduce");
          this.reproduced = true;
          return {type: "reproduce", direction: space};
        }
      }
    //}
    if(this.energy > 1) {
      return {type: "move", direction: space};
    }
  }
};

var valley = new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       ss    ##",
   "#   *    ##        s s                 ****       *#",
   "#   s   ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########      @           **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   s   #  ***          ######",
   "#*            @       #       #   *        s  #    #",
   "#*                    #  ######                 ** #",
   "### @        ****          ***                  ** #",
   "#       s                        @         s       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  s     #",
   "##  **  s   s  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],
  {"#": Wall,
   "@": Tiger,
   "s": SmartPlantEater, // from previous exercise
   "*": Plant}
);
