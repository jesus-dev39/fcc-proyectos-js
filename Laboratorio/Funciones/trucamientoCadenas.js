function truncateString(string, number){
  let result = "";
  if (string.length > number){
    const recorte = string.slice(0, number);
    result += recorte + "...";
  } else {
    result += string;
  }

  return result;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));