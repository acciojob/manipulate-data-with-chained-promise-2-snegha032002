//your JS code here. If required.
// Select the output div
const output = document.getElementById("output");

// Function to simulate a delay using a promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function to manipulate the array with promises
function manipulateArray() {
  // Initial array
  const arr = [1, 2, 3, 4];

  // Step 1: Initial promise that resolves after 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  })
    // Step 2: First transformation (Filter out odd numbers)
    .then((arr) => {
      const evenNumbers = arr.filter(num => num % 2 === 0);
      output.textContent = evenNumbers.join(','); // Display even numbers
      return delay(1000).then(() => evenNumbers); // Wait 1 second
    })
    // Step 3: Second transformation (Multiply even numbers by 2)
    .then((evenNumbers) => {
      const doubled = evenNumbers.map(num => num * 2);
      output.textContent = doubled.join(','); // Display the doubled numbers
      return delay(2000).then(() => doubled); // Wait 2 seconds
    });
}

// Call the function to start the process
manipulateArray();
