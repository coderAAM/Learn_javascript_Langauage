// class No 2 <--------------> class 1 Uploded on github account



// let a = parseFloat(prompt("Enter your number"));
// switch (a) {
//      case 3:

//           console.log("right Answer");
//           break;
//      case 4:
//           console.log("Wrong Answer")
//           break;
//      default:
//           console.log("Sorry Try again")
//           break;
// }

// let a = prompt("Enter any letter a to z afind correct letter");
// switch (a) {
//      case 'c':
//      case 'C':
//           console.log("right answer ")
//           break
//      default:
//           console.log("Wrong answer ")
//           break;
// }

// let num1 = parseFloat(prompt("Enter the first number"));

// let op = prompt("whic operator do you want to perform +,-,*,/");
// switch (op) {
//      case '+':
//           let num2 = parseFloat(prompt("Enter the Second number"));
//           console.log("sum = ", num1 + num2);
//           break;
//      case '-':
//           let num3 = parseFloat(prompt("Enter the Second number"));
//           console.log("sub = ", num1 - num3);
//           break;
//      case '*':
//           let num4 = parseFloat(prompt("Enter the Second number"));
//           console.log("Multi = ", num1 * num4);
//           break;
//      case '/':
//           let num5 = parseFloat(prompt("Enter the Second number"));
//           console.log("divided = ", num1 / num5);
//           break;
//      default:
//           console.log("Wrong Number!")
//           break;
// }

//Question No:1
// let user = parseFloat(prompt("Enter the Number: "));

// if (user >= 0) {
//      console.log("Number is postive");
// } else if (user <= 0) {
//      console.log("Number is Negative");
// }
// Question No:2
// let user = prompt("Enter any Letter A to Z");
// switch (user) {
//      case 'a':
//           console.log("a is a vowel wprd ");
//           break;
//      case 'e':
//           console.log("e is vowel word");
//           break;
//      default:
//           console.log("Invailde charater");
//           break;
// }

//question No: 3
// let num1 = 20;
// let num2 = 30;
// let max = Math.max(num1, num2);
// console.log("maximum Number is: ", max);

//Question No: 4
// let a = parseFloat(prompt("Enter the first number:"))
// let b = parseFloat(prompt("Enter the second number"))

// if (a % b === 0) {
//      console.log(a + "is divided by" + b);
// } else {
//      console.log(a + "is not divded By" + b);
// }
//All Right

//Question No: 5
// skip
// this concept is for loop
//User se ek number lo aur uska multiplication table print karo (1 se 10 tak).
// let table = parseFloat(prompt("Enter the number"));
// for (let i = 1; i <= 10; i++) {
//      console.log(table, "X", i, "=", table * i);
// }
// now it's fine
// Question NO: 10
//User se ek number lo aur uske factorial ka result print karo.
// let num = parseFloat(prompt("Enter the Number"));
// let a = 1;
// if (num < 0) {
//      console.log("negative number is not factorial");
// } else {
//      for (let i = 0; i < num; i++) {
//           a *= i;
//           console.log(`a of ${num} is: ${a}`);
//      }
// }

//solving the for loop questions
// 1 se 10 tak ke numbers print karo.
// for (let i = 1; i <= 10; i++) {
//      console.log("number", i);
//      1
// }

// 1 se 100 tak ke even numbers print karo.
// function iseven(val) {
//      if (val % 2 == 0) {
//           console.log(val + " Even Number");
//      } else {
//           console.log(val + " Odd Number");
//      }
// }
// iseven(11);
// function iseven(val) {
//      if (val % 2 == 0) {
//           console.log(val + " Even Number");
//      } else {
//           console.log(val + " Odd Number");
//      }
// }
// iseven(11);

// Question No 2:1 se 100 tak ke even numbers print karo.
// for (let i = 1; i <= 100; i++) {
//      if (i % 2 == 0) {
//           console.log(i);
//      }

// }
// for (let i = 1; i <= 10; i++) {
//      console.log("Number= ", i)
// }

//question No 3 1 se 50 tak ke odd numbers print karo.
// for (let i = 0; i <= 50; i++) {
//      if (i % 2 !== 0) {
//           console.log(i);
//      }
// }

// question No:4 User se ek number lo, uska multiplication table (1 se 10 tak) print karo.
// let user = parseFloat(prompt("Enter the Number"));
// for (let i = 1; i <= 10; i++) {
//      console.log(user, "X", i, "=", user * i);

// }

//question No:5
// 10 se 1 tak reverse order me numbers print karo.
// for (let i = 10; i >= 1; i--) {
//      console.log(i);

// }
//question No:6 1 se 20 tak ke numbers ka sum calculate karo.
// let sum = 0;
// for (let i = 1; i <= 20; i++) {
//      sum = sum + i;
//      console.log("Sum after adding", i, "is", sum);
// }
// console.log("Total sum is", sum);

//question No:8
//1 se 100 tak ke numbers me se sirf woh numbers print karo jo user ke diye number se divisible hain.
// let user = parseFloat(prompt("Enter the number to check divisibility:"));
// for (let i = 1; i <= 100; i++) {
//      if (i % user === 0) {
//           console.log(i + " is divisible by " + user);
//      }
// }

// Array Questions
// let arr1 = [1, 2, 3, 4, 5, 6];
// console.log(arr1[3])

// let arr1 = [1, 2, 3, 4, 5];
// let userInput = parseFloat(prompt("Enter any number 1,2,3,4,5 and find the index"));
// let index = arr1.indexOf(userInput);

// if (index !== -1) {
//      console.log("Index of", userInput, "is", index);
// } else {
//      console.log("Number not found in array");
// }
//   index      0       1       2        3         4        5
// let arr2 = ["Ahmed", "Ali", "Mughal", "bilal", "Ayan", "Fozan"];
// let arr1 = [1, 2, 3, 4, 5]
// console.log("name", arr2[2], arr1[2]);
// so index store kar ta hai aapne ander value ko i mean data ko

// Array Second Question

// pale index banalo fir value ko add kar do index mai
// const arr1 = [];
// arr1[0] = "Ali";
// arr1[1] = "Ahmed";
// console.log(arr1[1]);

// now moving on next question
// ab hum html se karte hai javascript ko solve
// ius se pale yar stream ko like tu kardo
//i hope you are understand js
// const arr1 = [];
// arr1[0] = "Ahmed";
// arr1[1] = " Ali";
// arr1[2] = " Ayan";
// arr1[1] = " Abdul Moiz";
// document.getElementById('demo').innerHTML = arr1;
// let arr1 = [1, 2, 3, , 4];

// let user = parseFloat(prompt("Enter the number ,1,2,3,4"));
// let name = prompt("Enter your name ")
// let index = arr1.indexOf(user);

// if (index !== -1) {
//      console.log("inderOf", user, "is", index, name);
// } else {
//      console.log("Number is not found in array")
// }

