// Task One
let array2 = [14, 150, 'css', null, 'javascript', 25];
let newArray = array2.map(function(item) {
  if (typeof item === 'number') {
    return item * item;
  } else if (typeof item === 'string') {
    return item.toUpperCase();
  } 
  return item;
})
console.log(newArray);


// Task Two
let answer = "blue"
let input = prompt("რა ფერია ცა?")
if (answer === input.toLowerCase) {
    console.log("სწორია");
} else {
    console.log("არასწორია"); 
}


// Taks Three
let array1 = ["hello1", 14,24, "hello2"]
let onlyNumbers = array1.filter((a) => typeof a === "number");
console.log(onlyNumbers);


// Task Four
let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
let threeLetters = languages.filter((word) => word.length > 3);
console.log(threeLetters);


// Task Five
let words = ["Madrid", "rome", "Milan", "berlin"];
let wordWithM = words.filter((word) => word.includes("m")|| word.includes("M"));
console.log(wordWithM);


//Task Six


// Task TEn
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let concatedArr = arr1.concat(arr2, arr3);

console.log(concatedArr);

