// Declare a variable in JS using var
// In a function the javascript moves the decalration of variable on top of function
// It has scope of function, means you can use it anywhere in function
// It can be reassigned
if (true) {
    console.log(data) // This will not give any error as javascript will move the decalration of the varaible to the top of the function
    if (true) {
        var data = 'VAR'
    }
    console.log(data)
}

console.log(data)


// It is block scoped
// It can be reassigned
if (true) {
    let data2 = 'LET'
    console.log(data2)
}

// console.log(data2) // This will give reference Error


// We can declare const
// It will also be block scoped
// It can not be redecalared
const VALUE = 'CONST'

console.log(VALUE)
