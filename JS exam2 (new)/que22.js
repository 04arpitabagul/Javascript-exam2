// ### 22. **Array Filter Method**

// - Task: Write a program that filters out even numbers from an array.
// - Rubric: 3 points for correct use of `filter()`, 2 points for output.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter((num) => num % 2 !== 0);

console.log("Original Array:", numbers);
console.log("Odd Numbers:", oddNumbers);
