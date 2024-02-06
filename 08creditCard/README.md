# Key Learnings: Credi Card App
 
## State Management with `useState`
Leveraged the `useState` hook to manage and update the state of various form inputs, including cardholder name, card number, expiration month and year, and CVC.

## Form Submission and Validation without `react-hook-form` Package
Implemented a form submission function (handleSubmit) to validate user inputs and display appropriate `error messages`. Form fields include cardholder name, card number, month, year, and CVC.

## Dynamic Card Preview
Displayed a dynamic card preview on the left side of the form, updating in `real-time` based on user input. Achieved this by dynamically `rendering card` details on the front and back of the card.

## useRef Hook: Refs for Form Reset
Utilized the useRef hook to create a reference `formReset` to the form, enabling easy and efficient reset of form fields after submission.

## Regular Expressions for Input Validation
Implemented regular expressions (isValidName and isValidNumber) for validating cardholder names and numeric inputs, ensuring data integrity.

