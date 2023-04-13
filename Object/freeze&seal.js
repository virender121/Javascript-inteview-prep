// Object.freeze

const myObject ={
    name : "John",
    age : 35
}
Object.freeze(myObject)

myObject.age = 50  // This line will have  no effect

console.log(myObject)

// Object.seal
const myObject1 ={
    name : "John",
    age : 35
}
Object.seal(myObject1)

myObject1.age = 55// This line will have effect

myObject1.job = "Developer" // THIS LINE WILL HAVE NO EFFECT

console.log(myObject1)
