const nums = [2, 4, 5, 2, 1, 2];
const k = 2;

function countOccurrences(nums, k) {
    let count = 0;

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === k) {
            count++; // Increment count if element matches k
        }
    }

    return count;
}

// Example call
console.log(countOccurrences(nums, k)); // Output: 