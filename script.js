window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const promises = [
  new Promise((resolve) => setTimeout(() => resolve('Promise 1'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 2'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 3'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 4'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 5'), getRandomTime())),
];

// Helper function to generate random time between 1 and 5 seconds
function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
}

// Promise.any to wait for the first promise to resolve
Promise.any(promises)
  .then((result) => {
    // Print the result to the output div
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = result;
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
  });







