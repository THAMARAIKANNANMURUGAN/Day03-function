
//Print odd numbers in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Using an arrow function to filter odd numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);

// Using an arrow function to print odd numbers
oddNumbers.forEach(num => console.log(num));
...............................................................................................................................
//Convert all the strings to title caps in a string array

const stringArray = ["hello world", "goodbye cruel world", "javascript is fun"];

// Using an arrow function to convert strings to title case
const titleCaseArray = stringArray.map(str =>
  str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
);

// Printing the result
titleCaseArray.forEach(titleCaseString => console.log(titleCaseString));
............................................................................................................................................
//Sum of all numbers in an array
const numbers = [1, 2, 3, 4, 5];

// Using an arrow function to calculate the sum of all numbers
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Printing the result
console.log("Sum:", sum);
.................................................................................................................................................
//Return all the prime numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Helper function to check if a number is prime
const isPrime = num => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// Using an arrow function to filter prime numbers
const primeNumbers = numbers.filter(num => isPrime(num));

// Printing the result
console.log("Prime Numbers:", primeNumbers);


