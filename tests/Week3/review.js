// Declare a const name as browserVersion (global) and Assign value as Chrome
const browserversion="chrome"

// Create a function by name getBrowserVersion
function browsername(){

    //Declare a local variable (browserVersion)(outside the block)
    var browserVersion1 =9

    //Create if condition inside function to check if browser is chrome, then
    if (browserversion=="chrome") {

        // print that variable inside function (outside block)
        console.log("chrome version is " +browserVersion1)
    }
    else{
        let browserVersion2 =10
        console.log("other version is"+ browserVersion2)
    }
    

    
}
//Call that function from the javascript
 browsername()
 console.log (browserVersion1)