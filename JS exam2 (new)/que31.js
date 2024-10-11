// ### 31. **Math Functions**

// - **Task**: Use JavaScript Math functions to perform the following:
//     1. Find the maximum and minimum values from a list of numbers.
//     2. Generate a random number between 1 and 100.
//     3. Round a number to its nearest integer.

// Task 1: Find maximum and minimum values
const numbers = [12, 45, 7, 23, 56, 89, 34];
const maxVal = Math.max(...numbers);
const minVal = Math.min(...numbers);

console.log(`Maximum value: ${maxVal}`);
console.log(`Minimum value: ${minVal}`);

// Task 2: Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Random number: ${randomNumber}`);

// Task 3: Round a number to its nearest integer
const numToRound = 43.7;
const roundedNum = Math.round(numToRound);
console.log(`Rounded number: ${roundedNum}`);

