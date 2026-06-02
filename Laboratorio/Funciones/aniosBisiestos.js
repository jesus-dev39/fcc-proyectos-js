function isLeapYear(number) {
  let result = "";
  if ((number % 4 == 0 && number % 100 != 0) || (number % 400 == 0)) {
    result += number + " is a leap year.";
  } else {
    result += number + " is not a leap year.";
  }

  return result;
}


const year = 1900;
const result = isLeapYear(year);
console.log(result);