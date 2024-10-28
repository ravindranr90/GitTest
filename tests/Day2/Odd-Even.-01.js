// Function to check if a number is odd or even
function isOddOrEven(num) {
    // Check if the number is divisible by 2
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Call the function and print the result
let result = isOddOrEven(5); // You can test with any number
console.log(result); // Output: "Odd"
