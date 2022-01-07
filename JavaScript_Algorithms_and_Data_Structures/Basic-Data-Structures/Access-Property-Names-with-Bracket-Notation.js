//Setup
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  
  // change code below this line
  return foods[scannedItem];
}

console.log(checkInventory("apples"));
