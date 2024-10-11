// ### 13. **Array Methods (slice and splice)**

// - Task: Use `splice()` to remove two elements from the middle of an array and `slice()` to create a new array with a portion of it.
// - Rubric: 3 points for `splice()`, 2 points for `slice()`.

let colors = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple"];

console.log("Original Array:");
console.log(colors);

colors.splice(2, 2); 

console.log("\nArray after splice:");
console.log(colors);

let brightColors = colors.slice(0, 2); 

console.log("\nNew Array created with slice():");
console.log(brightColors);

