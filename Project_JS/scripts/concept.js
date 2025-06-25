let count = 0;

function handleEventHandling() {
    count++;
    const event = document.getElementById("eventHandlingInput");
    event.value = `Event triggered ${count} times`;
}

function handleAsyncOperation() {
    let output = document.getElementById("asyncOperationOutput");
    output.value = "Starting async operation...";
    setTimeout(() => {
        output.value = "Async operation completed!";
    }, 2000);
}

function handleError() {
    try {
        throw new Error("An error occurred!");
    }
    catch (error) {
        document.getElementById("errorHandlingOutput").value = error.message;
    }
}

function handleLocalStorageSave() {
    const input = document.getElementById("localStorageInput").value;
    localStorage.setItem("savedData", input);
    document.getElementById("localStorageOutput").value = "Data saved to localStorage!";
}

function handleLocalStorageLoad() {
    const data = localStorage.getItem("savedData");
    document.getElementById("localStorageOutput").value = data ? data : "No data found!";
}

function handleArrayManipulation() {
    let output = [];

    // Starting array
    let arr = [1, 2, 3];
    output.push("Initial array: " + JSON.stringify(arr));

    // .push() – Add at end
    arr.push(4);
    output.push("After push(4): " + JSON.stringify(arr));

    // .pop() – Remove from end
    let popped = arr.pop();
    output.push("After pop(): " + JSON.stringify(arr) + " | Popped: " + popped);

    // .unshift() – Add at start
    arr.unshift(0);
    output.push("After unshift(0): " + JSON.stringify(arr));

    // .shift() – Remove from start
    let shifted = arr.shift();
    output.push("After shift(): " + JSON.stringify(arr) + " | Shifted: " + shifted);

    // .map() – Create new array with modified values
    let mapped = arr.map(x => x * 2);
    output.push("After map(x => x * 2): " + JSON.stringify(mapped));

    // .filter() – Create new array with elements that pass condition
    let filtered = arr.filter(x => x > 1);
    output.push("After filter(x => x > 1): " + JSON.stringify(filtered));

    // .reduce() – Reduce to a single value
    let reduced = arr.reduce((acc, curr) => acc + curr, 0);
    output.push("After reduce((acc, curr) => acc + curr, 0): " + reduced);

    // .forEach() – Perform action on each element
    let forEachOutput = [];
    arr.forEach((x, i) => {
        forEachOutput.push(`Index ${i}: ${x}`);
    });
    output.push("Using forEach:\n" + forEachOutput.join('\n'));

    // .find() – Return first matching element
    let found = arr.find(x => x > 1);
    output.push("find(x => x > 1): " + found);

    // .includes() – Check if value exists
    let hasTwo = arr.includes(2);
    output.push("includes(2): " + hasTwo);

    // Show in textarea
    document.getElementById("arrayManipulationTextArea").value = output.join('\n');
}

function handleObjectManipulation() {
    let output = [];

    // Starting object
    let obj = { name: "Ali", age: 25 };
    output.push("Initial object: " + JSON.stringify(obj));

    // Add new property
    obj.city = "Lahore";
    output.push('After adding city: ' + JSON.stringify(obj));

    // Update existing property
    obj.age = 26;
    output.push('After updating age: ' + JSON.stringify(obj));

    // Delete a property
    delete obj.name;
    output.push('After deleting name: ' + JSON.stringify(obj));

    // Check if property exists using "in"
    let hasAge = 'age' in obj;
    output.push("Has 'age' property: " + hasAge);

    // Get all keys
    let keys = Object.keys(obj);
    output.push("Object keys: " + JSON.stringify(keys));

    // Get all values
    let values = Object.values(obj);
    output.push("Object values: " + JSON.stringify(values));

    // Get all entries (key-value pairs)
    let entries = Object.entries(obj);
    output.push("Object entries: " + JSON.stringify(entries));

    // Loop through object with for...in
    let forInOutput = [];
    for (let key in obj) {
        forInOutput.push(`${key}: ${obj[key]}`);
    }
    output.push("Loop using for...in:\n" + forInOutput.join('\n'));

    // Copy object using spread operator
    let copiedObj = { ...obj };
    output.push("Copied object: " + JSON.stringify(copiedObj));

    // Merge two objects
    let obj2 = { country: "Pakistan", age: 30 };
    let merged = { ...obj, ...obj2 };
    output.push("Merged object (obj + obj2): " + JSON.stringify(merged));

    // Destructuring object
    let { city, age } = obj;
    output.push("Destructured city: " + city + " | Destructured age: " + age);

    // Convert object to JSON string
    let jsonString = JSON.stringify(obj);
    output.push("JSON string: " + jsonString);

    // Parse JSON back to object
    let parsedObj = JSON.parse(jsonString);
    output.push("Parsed object from JSON: " + JSON.stringify(parsedObj));

    // Show in textarea
    document.getElementById("objectManipulationTextArea").value = output.join('\n');
}