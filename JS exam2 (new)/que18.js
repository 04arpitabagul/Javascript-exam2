// ### 18. **Return Value**

// - Task: Write a function that returns whether a number is positive or negative.
// - Rubric: 3 points for logic, 2 points for correct return value.

function determineSign(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
  }
  
  
  console.log(determineSign(5));  
  console.log(determineSign(-3)); 
  console.log(determineSign(0)); 