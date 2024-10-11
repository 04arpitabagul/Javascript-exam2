// ### 24. **Confirm Box**

// - Task: Use a `confirm` box to ask the user if they want to proceed with an action.
// - Rubric: 2 points for correct use of `confirm()`, 3 points for handling the result.

function confirmAction() {
    const message = "Do you want to proceed with the action?";
    const result = confirm(message);
  
    if (result) {
      alert("You chose to proceed.");
    } else {
      alert("You cancelled the action.");
    }
  }
  
  confirmAction();
  
  