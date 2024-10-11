// ### 23. **Array Reduce Method**

// - Task: Write a program that uses `reduce()` to sum up the elements in an array.
// - Rubric: 3 points for correct use of `reduce()`, 2 points for result.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log("Array:", numbers);
console.log("Sum:", sum);




