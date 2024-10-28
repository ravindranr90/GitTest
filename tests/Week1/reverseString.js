// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join(''); // Split string into characters, reverse them, and join back into a string
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversed = reverseString(str); // Get the reversed string
    return str === reversed; // Compare the original string with the reversed one
}

// Testing the functions
const testString = "racecar";
console.log("Reversed string: " + reverseString(testString)); // Output: 'racecar'
console.log("Is palindrome: " + isPalindrome(testString)); // Output: true