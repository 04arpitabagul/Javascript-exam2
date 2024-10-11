// ### 29. **Object within Array**

// - Task: Create an array of objects where each object represents a student with properties (name, age). Print each student's name using a loop.
// - Rubric: 4 points for array and object structure, 1 point for loop.

const students = [
    { 
        name: "Arpita", 
        age: 20 
    },
    { 
        name: "alana",
         age: 22 
    },
    { 
        name: "alia", 
        age: 21 
    }
  ];
  
  // Loop through the array and print each student's name
  console.log("Student Names:");
  for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
  }
  