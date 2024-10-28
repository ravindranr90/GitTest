// Task 1: Function Declaration
function userProfile(name) {
    console.log(`Hello, ${name}!`);
}

// Task 2: Arrow Function
const double = (number) => number * 2;

// Task 3: Anonymous Function with setTimeout
setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);

// Task 4: Callback Function
function getUserData(callback) {
    setTimeout(() => {
        const user = { name: "Alice", age: 25 };
        callback(user);
    }, 3000);  // Simulate data fetching with a 3-second delay
}

// Example usage for all tasks:

// Task 1: Call userProfile function
userProfile("John");  // Output: "Hello, John!"

// Task 2: Call double arrow function
console.log(double(5));  // Output: 10

// Task 4: Call getUserData function with a callback
getUserData(function(user) {
    console.log(`User's name is ${user.name} and age is ${user.age}`);
});
