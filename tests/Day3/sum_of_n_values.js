function cumulativeSum(n) {
    let sum = 0; // Initialize sum to 0

    // Iterate from 1 to n
    for (let i = 1; i <= n; i++) {
        sum += i; // Add current number to sum
        console.log(`Current number: ${i}, Cumulative sum: ${sum}`); // Print the current number and sum
    }

    return sum; // Return the final sum
}

// Example call
const result = cumulativeSum(5);
console.log(`Final cumulative sum from 1 to 5 is: ${result}`); // Output: 15