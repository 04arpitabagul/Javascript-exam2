// ### 15. **Object Method**

// - Task: Add a method to the student object that prints a welcome message.
// - Rubric: 3 points for correct method definition, 2 points for calling the method.

const student = {
  name: "John Doe",
  age: 20,
  grade: 12,

  welcomeMessage() {
    console.log(`Welcome, ${this.name}! You are in grade ${this.grade}.`);
  }
};

student.welcomeMessage();
  