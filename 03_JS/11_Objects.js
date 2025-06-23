//  Creating an object
const person = {
    name: 'Ali',
    age: 25,
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};

console.log("Greet:", person.greet());

//  Accessing properties
console.log("Dot notation:", person.name);       // 'Ali'
console.log("Bracket notation:", person['age']); // 25

//  Adding a property
person.job = 'Developer';
console.log("After adding job:", person.job);    // 'Developer'

//  Deleting a property
delete person.age;
console.log("After deleting age:", person.age);  // undefined

//  Object methods
console.log("Object.keys():", Object.keys(person));       // ['name', 'greet', 'job']
console.log("Object.values():", Object.values(person));   // ['Ali', [Function], 'Developer']
console.log("Object.entries():", Object.entries(person)); // [['name','Ali'], ['greet', fn], ['job','Developer']]

//  Object.assign()
const extra = { city: 'Lahore' };
const merged = Object.assign({}, person, extra);
console.log("Merged with Object.assign():", merged);

//  Spread operator
const clone = { ...person };
console.log("Clone with spread:", clone);

//  JSON.stringify()
const jsonString = JSON.stringify(person);
console.log("JSON string:", jsonString);

//  Destructuring
const { name, job } = person;
console.log("Destructured name:", name); // 'Ali'
console.log("Destructured job:", job);   // 'Developer'
