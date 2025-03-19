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

  let splitStr = str.split("\n");
  // console.log(splitStr);
  let [row1, row2, row3, row4, row5] = splitStr
   
  let columns = 0;
  
  splitStr.forEach((row) => {
      // console.log(row);
      newRow= row.split(',')
      // console.log(newRow)
      let [cell1, cell2, cell3, cell4] = newRow
      console.log(cell1, cell2, cell3, cell4)
  });


// ********* PART 2 *********
// Declare a variable that stores the number of columns in each row of data within the CSV. 
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
