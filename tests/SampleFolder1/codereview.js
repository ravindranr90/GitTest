const browserVersion = "Chrome"; // Global variable

function getBrowserVersion() {
    console.log("Global browserVersion before shadowing: " + browserVersion);

    if (browserVersion == "Chrome") {
        // Shadowing using var
        var browserVersion = 10; 
        console.log("Inside 'if' with var, browserVersion: " + browserVersion); // Local scope due to var
    }

    console.log("After 'if' with var, browserVersion: " + browserVersion); // Still 10 because var is function-scoped

    if (browserVersion === 10) {
        // Shadowing using let
        let browserVersion = 12; 
        console.log("Inside 'if' with let, browserVersion: " + browserVersion); // Block scope due to let
    }

    console.log("After 'if' with let, browserVersion: " + browserVersion); // Still 10 because let is block-scoped
}

getBrowserVersion();

console.log("Global browserVersion outside function: " + browserVersion); // Should still be "Chrome"
