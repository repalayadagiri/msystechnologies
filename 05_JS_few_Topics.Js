// //**************String Methods**************//

// // string Length

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(text.length); // 26

// // CharAt()
// console.log(text.charAt(1)); //B

// //charCodeAt()
// console.log(text.charCodeAt(1)); // 65 This is Ascii value

// //Concat(str1,str2,…)
// let str1 = "Hello";
// let str2 = "world";
// console.log(str1.concat(" ", str2)); // Hello world

// // Includes()
// console.log(str1.includes("H")); // true  --it's return Boolean values

// // endsWith()
// console.log(str1.endsWith("o")); // true  --it's return Boolean values

// // lastindexof()
// console.log(str1.lastIndexOf("l"));
// // match()
// let text2 = "The rain in SPAIN stays mainly in the plain";
// console.log(text2.match("ain"));
// // match() using a regular expression
// let text1 = "The rain in SPAIN stays mainly in the plain";
// console.log(text1.match(/ly/));

// //substring() is similar to slice().
// let text3 = "Apple, Banana, Kiwi";
// console.log(text3.slice(7, 13));

// //toLowerCase()
// console.log(text3.toLowerCase());

// // toUpperCase()
// console.log(text3.toUpperCase());

// //replace()
// let Ntext = "Please visit Microsoft!";

// console.log(Ntext.replace("Microsoft", "Facebook"));
// // using using a regular expression
// console.log(Ntext.replace(/Microsoft/, "Facebook"));

// // repeat

// let doubletext = "Hello world!";
// console.log(doubletext.repeat(2)); // Hello world!Hello world!

// // search
// let searchtext = "Mr. Blue has a blue house";
// console.log(searchtext.search("blue")); //15  --Index No
// // slice
// let slicetext = "Hello world!";
// console.log(slicetext.slice(0, 5));
// //split
// let splittext = "How are you doing today?";
// console.log(splittext.split(" ")); // (5) ['How', 'are', 'you', 'doing', 'today?']
// // startsWith
// let startsWith_text = "Hello world, welcome to the universe.";
// console.log(startsWith_text.startsWith("Hello")); // true

// to string
let string_text = 547812;
console.log(typeof string_text); // Number
let result = string_text.toString();
console.log(typeof result); // string
console.log(result);

// // trim()
// let trim_text = "     Hello India!     ";
// console.log(trim_text.trim());

// //**************Array Methods**************//

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const array1 = ["Emil", "Tobias", "Linus", "Cecilie", "Lone"];
// // Join Method
// console.log(fruits.join(" # "));
// // pop Methods
// fruits.pop(); // deleted last item
// console.log(fruits); // deleted last item
// // push Methods
// fruits.push("Kiwi"); //  adding the last
// console.log(fruits);
// // shift() Method removes the first array element
// fruits.shift();
// console.log(fruits); // (4) ['Orange', 'Lemon', 'Apple', 'Mango']
// // unshift() Method Add the first array element
// fruits.unshift("Lemon");
// console.log(fruits); // (5) ['Lemon', 'Orange', 'Lemon', 'Apple', 'Mango']
// //concat() method -- creates a new array
// console.log(fruits.concat(array1)); // (10) ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango', 'Emil', 'Tobias', 'Linus', 'Cecilie', 'Lone']
// // splice()
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);
// //slice() method out a part of an array starting from array element
// console.log(fruits.slice(1, 3)); //part of array  ---// (2) ['Orange', 'Lemon']

// //***********Ternary Operator***********//
// let marks = 50;
// let marks_resul = marks >= 40 ? "pass" : "fail";
// console.log(marks_resul);

// //***********Template Literals***********//

// console.log(`This is sampile Template Literals ${str1} ${str2}`);

// // if ...else if ...else//

// const number = 200;

// if (number > 0) {
//   console.log("The number is positive");
// } else if (number == 0) {
//   console.log("The number is 0");
// } else {
//   console.log("The number is negative");
// }

// //Switch Cases
// // Set the student's grade
// const grade = 87;
// switch (true) {
//   case grade >= 90:
//     console.log("Your Grade is  A");
//     break;
//   case grade >= 80:
//     console.log("Your Grade is B");
//     break;
//   case grade >= 70:
//     console.log("Your Grade is C");
//     break;
//   case grade >= 60:
//     console.log("Your Grade is D");
//     break;

//   default:
//     console.log("Your Grade is  F");
// }

// //**************Loops**************//

// // While Loop

// let i = 1,
//   n = 5; // initialize the variable
// // while loop from i = 1 to 5
// while (i <= n) {
//   // condition applying
//   console.log(i);
//   i += 1; // update the value
// }
// // do...while loop from 1 to 5
// do {
//   console.log(i);
//   i++;
// } while (i <= n);
// // For In
// const string = "code";
// // using for...in loop
// for (let i in string) {
//   console.log(i);
// }
// // For Of
// for (let i of string) {
//   console.log(i);
// }
