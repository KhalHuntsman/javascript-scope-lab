// Write your solution in this file!

const burgers = ["Hamburger", "Cheeseburger"]; // define the burgers array
let featuredDrink = "Strawberry Milkshake"; // define the featured drink variable

function addBurger() { // add a burger functionality
  const newBurger = "Flatburger"; // uses const to define 'newBurger'
  burgers.push(newBurger);
  if(true) {
    const anotherNewBurger = "Maple Bacon Burger";
    burgers.push(anotherNewBurger)
  }
}

function changeFeaturedDrink () {
    featuredDrink = "The JavaShake"; // change the featured drink name
}