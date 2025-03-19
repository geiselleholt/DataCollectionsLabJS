//************* PART 1- REFACTORING ***********
// old code
// let cell1 = "";
// let cell2 = "";
// let cell3 = "";
// let cell4 = "";
// let commas = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === ",") {
//     commas++;
//   } else if (str[i] === "\n") {
//     console.log(cell1, cell2, cell3, cell4);
//     commas = 0;
//     cell1 = "";
//     cell2 = "";
//     cell3 = "";
//     cell4 = "";
//   } else {
//     if (commas == 0) {
//       cell1 += str[i];
//     } else if (commas == 1) {
//       cell2 += str[i];
//     } else if (commas == 2) {
//       cell3 += str[i];
//     } else {
//       cell4 += str[i];
//     }
//   }

//   if (i === str.length - 1) {
//     console.log(cell1, cell2, cell3, cell4);
//   }
// }

let str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let columns = 0; //Part 2- Declare a variable that stores the number of columns in each row of data
let twoDArray = [];  //Part 2- initializing empty parent array

let splitStr = str.split("\n");  //Part1- Separates the characters of string 'str' at every "\n" and puts the new strings into the new 'splitStr' array

splitStr.forEach((row) => {  //iterates over each string 'row' in the 'splitStr' array
  newRow = row.split(",");  //Separates the characters of each string at every "," and puts the new strings into the new 'newRow' array
  twoDArray.push(newRow); //pushing each new row to the back of the parent array
  let [cell1, cell2, cell3, cell4] = newRow; // Separates each element of the 'newRow' array and assigns them a variable name
  console.log(cell1, cell2, cell3, cell4); //Part 1- printing results of refactoring
  columns = newRow.length; //Part 2- Calculating column number based on rows
});
console.log(columns); //Part2- Printing results
console.log(twoDArray) //Part2- Printing results

// ********* PART 2 *********
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.
