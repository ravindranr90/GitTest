function numberType(number) {
    // Check if the number is positive, negative, or zero
    if (number > 0) {
        return "Positive";  // If the number is greater than 0
    } else if (number < 0) {
        return "Negative";  // If the number is less than 0
    } else {
        return "Zero";      // If the number is equal to 0
    }
}

// Example usage:
let result = numberType(-5);  // Try with any number
console.log(result);          // Output: "Negative"
