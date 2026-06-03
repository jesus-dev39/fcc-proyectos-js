let lunches = [];

function addLunchToEnd(arr, string) {

  arr.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, string) {

  arr.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {

  if (arr.length > 0) {
    const eliminar = arr.pop();
    console.log(`${eliminar} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function removeFirstLunch(arr) {

  if (arr.length > 0) {
    const eliminar = arr.shift();
    console.log(`${eliminar} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function getRandomLunch(arr) {

  const aleatorio = Math.floor(Math.random() * arr.length);
  if (arr[aleatorio]) {
    console.log(`Randomly selected lunch: ${arr[aleatorio]}`);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(arr) {

  if (arr.length != 0) {
    console.log(`Menu items: ${arr.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
}

addLunchToEnd(lunches, "Tacos");