//1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Using an anonymous function to filter odd numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);

// Using an anonymous function to print odd numbers
oddNumbers.forEach(num => {
  console.log(num);
});

//2

..........................................................................................................................................................................
const stringArray = ["hello world", "goodbye cruel world", "javascript is fun"];

// Using an anonymous function to convert strings to title case
const titleCaseArray = stringArray.map(str => {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
});

// Printing the result
titleCaseArray.forEach(titleCaseString => {
  console.log(titleCaseString);
});


//3
const numbers = [1, 2, 3, 4, 5];

// Using an anonymous function to calculate the sum of all numbers
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Printing the result
console.log("Sum:", sum);
........................................................................................................................

//4
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

// Using an anonymous function to filter prime numbers
const primeNumbers = numbers.filter(num => isPrime(num));

// Printing the result
console.log("Prime Numbers:", primeNumbers);
...............................................................................................................................

//Remove duplicates from an array

const arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1, 7];

// Using an anonymous function to remove duplicates
const uniqueArray = arrayWithDuplicates.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

// Printing the result
console.log("Array with Duplicates:", arrayWithDuplicates);
console.log("Unique Array:", uniqueArray);
.................................................................................................................................................
//Remove duplicates from an array
const arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1, 7];

// Using an anonymous function to remove duplicates
const uniqueArray = arrayWithDuplicates.filter((value, index, array) => {
  return array.indexOf(value) === index;
});

// Printing the result
console.log("Array with Duplicates:", arrayWithDuplicates);
console.log("Unique Array:", uniqueArray);



