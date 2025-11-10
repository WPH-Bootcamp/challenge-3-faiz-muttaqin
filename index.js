'use strict';

// Import prompt-sync for user input in Node.js
const prompt = require('prompt-sync')();

// ========================================
// 1. User Input Handling Functions
// ========================================

/**
 * Gets a valid number input from the user
 * @param {string} promptMessage - The message to display to the user
 * @returns {number} - A valid number
 */
function getValidNumberInput(promptMessage) {
  let userInput;
  let number;
  
  while (true) {
    userInput = prompt(promptMessage);
    number = Number(userInput); // Explicit type conversion
    
    if (!isNaN(number) && userInput.trim() !== '') {
      return number;
    }
    
    console.log("Invalid input! Please enter a valid number.");
  }
}

/**
 * Gets a valid operator input from the user
 * @param {string} promptMessage - The message to display to the user
 * @returns {string} - A valid operator
 */
function getValidOperatorInput(promptMessage) {
  const validOperators = ['+', '-', '*', '/', '%', '**'];
  let operator;
  
  while (true) {
    operator = prompt(promptMessage);
    
    if (validOperators.includes(operator)) {
      return operator;
    }
    
    console.log("Invalid operator! Please enter one of: +, -, *, /, %, **");
  }
}

// ========================================
// 2. Basic Arithmetic Operation Functions
// ========================================

/**
 * Adds two numbers
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts b from a
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides a by b
 * Handles division by zero
 */
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}

/**
 * Returns the modulo of a and b
 */
function modulo(a, b) {
  return a % b;
}

/**
 * Returns a raised to the power of b
 */
function power(a, b) {
  return a ** b;
}

// ========================================
// 3. Main Calculator Logic
// ========================================

console.log("===========================================");
console.log("Welcome to Interactive Calculator & Data Analyzer!");
console.log("===========================================\n");

// Main loop for continuous calculation
while (true) {
  console.log("\n--- New Calculation ---");
  
  // Get user inputs
  const num1 = getValidNumberInput("Enter the first number: ");
  const num2 = getValidNumberInput("Enter the second number: ");
  const operator = getValidOperatorInput("Enter an operator (+, -, *, /, %, **): ");
  
  let result;
  
  // Use switch statement to call appropriate function
  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    case '%':
      result = modulo(num1, num2);
      break;
    case '**':
      result = power(num1, num2);
      break;
    default:
      result = "Error: Unknown operator!";
  }
  
  // ========================================
  // 4. Data Type Analysis & Conditional Output
  // ========================================
  
  console.log("\n--- Result ---");
  console.log(`${num1} ${operator} ${num2} = ${result}`);
  
  // Analyze the result using typeof
  const resultType = typeof result;
  console.log(`\n--- Data Analysis ---`);
  console.log(`Result type: ${resultType}`);
  
  // Check if result is a number
  if (resultType === 'number') {
    // Check if positive, negative, or zero
    if (result > 0) {
      console.log("The result is Positive.");
    } else if (result < 0) {
      console.log("The result is Negative.");
    } else {
      console.log("The result is Zero.");
    }
    
    // Check if integer or floating-point
    if (Number.isInteger(result)) {
      console.log("The result is an Integer.");
    } else {
      console.log("The result is a Floating-point number.");
    }
    
    // Use ternary operator to check even or odd (only for integers)
    if (Number.isInteger(result)) {
      const evenOrOdd = result % 2 === 0 ? "Even" : "Odd";
      console.log(`The result is ${evenOrOdd}.`);
    }
    
    // Complex conditions using logical operators
    if (result > 0 && result % 2 === 0 && Number.isInteger(result)) {
      console.log("Special: The result is Positive and Even!");
    } else if (result > 0 && result % 2 !== 0 && Number.isInteger(result)) {
      console.log("Special: The result is Positive and Odd!");
    }
    
    // Additional analysis
    if (result >= 100 || result <= -100) {
      console.log("The result is a large number (|value| >= 100).");
    }
    
  } else if (resultType === 'string') {
    // Handle error messages
    console.log(`Error occurred: ${result}`);
  } else {
    // Use nullish coalescing operator for undefined/null
    const message = result ?? "Result is undefined or null, something went wrong!";
    console.log(message);
  }
  
  // ========================================
  // 5. Exit Mechanism
  // ========================================
  
  console.log("\n--- Continue? ---");
  const continueCalc = prompt("Do you want to perform another calculation? (yes/no): ");
  
  if (continueCalc.toLowerCase() === 'no' || continueCalc.toLowerCase() === 'n') {
    console.log("\nThank you for using the Interactive Calculator & Data Analyzer!");
    console.log("Goodbye! 👋");
    break; // Exit the while loop
  }
}

