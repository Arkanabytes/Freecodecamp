//Setup Arkanabytes
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

//var gloveBoxContents = "maps";
var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)
