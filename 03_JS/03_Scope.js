// Types
// Global - Decalred outside all functions
// Function - Declared inside of function
let data = 'Val'
function demo() {
    var x = 10;
    let y = 20;
    if (true) {
        let z = 30;
    }
    // console.log(z); // Error: z is not defined

    // Global variables can be accessed any where
    console.log(data)
}

demo();