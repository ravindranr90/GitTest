function calculateGrade(score) {
    // Switch on true to evaluate score ranges
    switch (true) {
        case (score >= 90 && score <= 100):
            return "A";
        case (score >= 80 && score < 90):
            return "B";
        case (score >= 70 && score < 80):
            return "C";
        case (score >= 60 && score < 70):
            return "D";
        case (score >= 0 && score < 60):
            return "F";
        default:
            return "Invalid score"; // Handle out-of-range values
    }
}

// Example usage:
let grade = calculateGrade(85);  // Try with any score
console.log(grade);              // Output: "B"
