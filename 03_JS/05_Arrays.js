// Starting array
let arr = [1, 2, 3];
console.log("Initial array:", arr);

// .push() – Add at end
arr.push(4);
console.log("After push(4):", arr);

// .pop() – Remove from end
let popped = arr.pop();
console.log("After pop():", arr, "| Popped:", popped);

// .unshift() – Add at start
arr.unshift(0);
console.log("After unshift(0):", arr);

// .shift() – Remove from start
let shifted = arr.shift();
console.log("After shift():", arr, "| Shifted:", shifted);

// .map() – Create new array with modified values
let mapped = arr.map(x => x * 2);
console.log("After map(x => x * 2):", mapped);

// .filter() – Create new array with elements that pass condition
let filtered = arr.filter(x => x > 1);
console.log("After filter(x => x > 1):", filtered);

// .reduce() – Reduce to a single value
let reduced = arr.reduce((acc, curr) => acc + curr, 0);
console.log("After reduce((acc, curr) => acc + curr, 0):", reduced);

// .forEach() – Perform action on each element
console.log("Using forEach:");
arr.forEach((x, i) => {
    console.log(`Index ${i}:`, x);
});

// .find() – Return first matching element
let found = arr.find(x => x > 1);
console.log("find(x => x > 1):", found);

// .includes() – Check if value exists
let hasTwo = arr.includes(2);
console.log("includes(2):", hasTwo);
