var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
 
  /* 1	"Hole-in-one!"
  <= par - 2	"Eagle"
  par - 1	"Birdie"
  par	"Par"
  par + 1	"Bogey"
  par + 2	"Double Bogey"
  >= par + 3	"Go Home!"*/
  
  return strokes == 1
    ? names[0]
    : strokes <= par - 2
    ? names[1]
    : strokes == par - 1
    ? names[2]
    : strokes == par
    ? names[3]
    : strokes == par + 1
    ? names[4]
    : strokes == par + 2
    ? names[5]
    : strokes >= par + 3
    ? names[6]
    : "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
