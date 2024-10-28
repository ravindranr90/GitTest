const nums = [2, 4, 7, 8, 11, 14];
const target = 18;

function twoSum(nums, target) {
    const results = []; // Initialize an empty array to store results

    // Nested loop to iterate over the array
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) { // Start j from i + 1 to avoid duplicate pairs
            if (nums[i] + nums[j] === target) { // Check if the sum equals the target
                results.push([i, j]); // Add the pair of indices to results
            }
        }
    }

    return results; // Return the results
}

// Example call
console.log(twoSum(nums, target)); // Output: [[2, 4], [1, 5]]
