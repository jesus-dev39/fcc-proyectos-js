function confirmEnding(string1, string2) {

    const check = string1.slice(string1.length - string2.length);
    return check == string2;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain"));