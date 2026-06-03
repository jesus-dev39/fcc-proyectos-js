const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes){

  let resultado = "";
  
  if (strokes == 1){
    resultado = names[0];
  } else if (strokes <= (par - 2)){
    resultado = names[1];
  } else if (strokes == (par - 1)){
    resultado = names[2];
  } else if (strokes == par){
    resultado = names[3];
  } else if (strokes == (par + 1)){
    resultado = names[4];
  } else if (strokes == (par + 2)){
    resultado = names[5];
  } else if (strokes >= (par + 3)){
    resultado = names[6];
  } 
  return resultado;
}

console.log(golfScore(1, 1));
console.log(golfScore(3, 1));
console.log(golfScore(4, 1));
console.log(golfScore(5, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(3, 2));
console.log(golfScore(4, 3));
console.log(golfScore(5, 4));
console.log(golfScore(3, 3));