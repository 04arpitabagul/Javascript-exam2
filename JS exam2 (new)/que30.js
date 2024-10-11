// ### 30. **Find Method**

// - Task: Use the `find()` method to locate the first student in an array of objects whose age is 18.
// - Rubric: 3 points for correct use of `find()`, 2 points for output.

const students = [
    { 
        name: "Damon Salvatore",
         age: 20
     },
    { 
        name: "stefan Salvatore", 
        age: 18 
    },
    {
         name: "Elena Gilbert",
          age: 21
     },
    { 
        name: "nina Brown",
         age: 18 
    }
  ];
  
  // Use find() method to locate the first student whose age is 18
  const student18 = students.find((student) => student.age === 18);
  
  // Log the found student's details
  console.log("First student who is 18:");
  console.log(`Name: ${student18.name}`);
  console.log(`Age: ${student18.age}`);
  