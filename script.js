//*********** PART 1 ***********
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
console.log(`*********** PART 1 ***********`);
let columns = 0; //Part 2- Declare a variable that stores the number of columns in each row of data
let twoDArray = []; //Part 2- initializing empty parent array

let splitStr = str.split("\n"); //Part1- Separates the characters of string 'str' at every "\n" and puts the new strings into the new 'splitStr' array

splitStr.forEach((row) => {
  //iterates over each string 'row' in the 'splitStr' array
  newRow = row.split(","); //Separates the characters of each string at every "," and puts the new strings into the new 'newRow' array
  twoDArray.push(newRow); //pushing each new row to the back of the parent array
  let [cell1, cell2, cell3, cell4] = newRow; // Separates each element of the 'newRow' array and assigns them a variable name
  console.log(cell1, cell2, cell3, cell4); //Part 1- printing results of refactoring
  columns = newRow.length; //Part 2- Calculating column number based on rows
});
console.log(`********* PART 2 *********`);
console.log(columns);
console.log(twoDArray);

// ********* PART 2 *********
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.

// ********* PART 3 **********
// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency. (let result = text.toLowerCase();)
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

let headers = twoDArray.splice(0, 1);
let lowerHeaders = [];
// headers[0].forEach((header) => {
//   // let lowerHeader = header.toLowerCase();
//   console.log(header.toLowerCase());
//   // lowerHeaders.push(lowerHeader);
// });
// console.log(lowerHeaders)

objectArray = [];

for (i = 0; i < headers[0].length; i++) {
  const dataObject = headers[0].reduce(
    (obj, key, index) => ({ ...obj, [key]: twoDArray[i][index] }),
    {}
  );
  objectArray.push(dataObject);
}
console.log(`********* PART 3 **********`);
console.log(objectArray);

// *********** PART 4 ***********

// 1. Remove the last element from the sorted array.
// 2. Insert the following object at index 1:
//    { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// 3. Add the following object to the end of the array:
//    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
// 4. Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

console.log(`*********** PART 4 ***********`);
console.log(`1.`);
objectArray.pop();
console.log(objectArray);

console.log(`2.`);
objectArray.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
console.log(objectArray);

console.log(`3.`);
objectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(objectArray);

console.log(`4.`);
let ages = [];
for (let i = 0; i < objectArray.length; i++) {
  ages.push(objectArray[i].age);
}

let sum = 0;
ages.forEach((age) => {
  sum += age;
});

console.log(sum / ages.length);
