function intersection(arr1, arr2) {
    var result = []; // Initialize an empty array for the result
    // Loop through the first array
    for (var i = 0; i < arr1.length; i++) {
        var current = arr1[i]; // Current element from arr1
        // Check if current element is in arr2 and not already in the result
        if (arr2.includes(current) && !result.includes(current)) {
            result.push(current); // Add the element to the result
        }
    }
    return result; // Return the intersection array
}
// Example calls
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]
console.log(intersection([1, 2, 2, 3], [2, 2, 4])); // Output: [2]
console.log(intersection([7, 8, 9], [10, 11, 12])); // Output: []
console.log(intersection([1, 2, 3], [1, 2, 3])); // Output: [1, 2, 3]
