// ### 27. **Loop through Object**

// - Task: Use a `for-in` loop to iterate over an object’s properties.
// - Rubric: 4 points for loop structure, 1 point for output.


const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Blue",
    mileage: 30000
  };
  
 
  console.log("Car Details:");
  for (const property in car) {
    console.log(`${property}: ${car[property]}`);
  }
  