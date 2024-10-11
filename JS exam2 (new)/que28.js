// ### 28. **Function Returning Object**

// - Task: Write a function that returns an object with details of a book (title, author, year).
// - Rubric: 3 points for correct function, 2 points for object return.

function createBook(title, author, year) {
    return {
      title,
      author,
      year
    };
  }
  
  // Call the function and store the returned object
  const book1 = createBook("To Kill a Mockingbird", "Harper Lee", 1960);
  
  // Log the book details
  console.log("Book Details:");
  console.log(`Title: ${book1.title}`);
  console.log(`Author: ${book1.author}`);
  console.log(`Year: ${book1.year}`);
  