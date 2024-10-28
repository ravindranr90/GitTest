// Create a Promise named conditionalPromise
const conditionalPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random(); // Generate a random number between 0 and 1

    if (randomNumber > 0.5)
         {
        
        resolve("Resolved successfully"); // Resolve the promise if the number is greater than 0.5
    } else {
        reject("Rejected"); // Reject the promise otherwise
    }
    console.log(randomNumber)
});

// Use the conditionalPromise and handle the resolved or rejected value
conditionalPromise
    .then((message) => {
        console.log(message); // Log resolved message
    })
    .catch((error) => {
        console.log(error); // Log rejected message
    });
    