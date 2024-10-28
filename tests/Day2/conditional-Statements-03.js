// Function to launch browser using if-else
function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launching Chrome browser...");
    } else {
        console.log("Launching browser other than Chrome...");
    }
}

// Function to run tests using switch-case
function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running smoke tests...");
            break;
        case "sanity":
            console.log("Running sanity tests...");
            break;
        case "regression":
            console.log("Running regression tests...");
            break;
        default:
            console.log("Running default (smoke) tests...");
    }
}

// Example usage:
launchBrowser("chrome");  // Output: "Launching Chrome browser..."
runTests("regression");   // Output: "Running regression tests..."

launchBrowser("firefox"); // Output: "Launching browser other than Chrome..."
runTests("performance");  // Output: "Running default (smoke) tests..."
