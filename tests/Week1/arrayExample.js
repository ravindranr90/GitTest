// Creating an array with mixed data types
let languages = [
    'JavaScript', // string
    'Python',     // string
    'Java',       // string
    42,           // number
    true,         // boolean
    { name: 'C++' } // object
];

// Accessing elements
console.log(languages[0]); // Output: JavaScript
console.log(languages[3]); // Output: 42

// Adding an element
languages.push('Ruby');
console.log(languages); // Output: ['JavaScript', 'Python', 'Java', 42, true, { name: 'C++' }, 'Ruby']

// Looping through the array
languages.forEach(function(item) {
    console.log(item);
    
});
