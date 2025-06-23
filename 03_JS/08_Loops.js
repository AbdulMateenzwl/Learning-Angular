console.log("=== for loop ===");
for (let i = 0; i < 5; i++) {
    console.log("for loop:", i);
}

console.log("\n=== while loop ===");
let i = 0;
while (i < 5) {
    console.log("while loop:", i);
    i++;
}

console.log("\n=== do...while loop ===");
let j = 0;
do {
    console.log("do...while loop:", j);
    j++;
} while (j < 5);

console.log("\n=== for...of loop (for arrays) ===");
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log("for...of loop:", fruit);
}

console.log("\n=== for...in loop (for object keys) ===");
let person = { name: "Ali", age: 25, city: "Lahore" };
for (let key in person) {
    console.log(`for...in loop: ${key} = ${person[key]}`);
}

console.log("\n=== break and continue example ===");
for (let k = 0; k < 5; k++) {
    if (k === 2) {
        console.log("Skipping 2 using continue");
        continue; // skip this iteration
    }
    if (k === 4) {
        console.log("Breaking at 4");
        break; // exit loop completely
    }
    console.log("Loop value:", k);
}
