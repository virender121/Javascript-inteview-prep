/*
in javascript  a map is a collection of  key value pair where each key can be any value
(including object and function ) and each value can also be any value.
Map are implemented using the map as a constructor and can be used to store and 
retrieve data efficiently.

Map are similar to objects but there are some important difference  is that object 
can have key of any datatype.Maps also have built in method for adding and removing
key-value pairs, iterating over their keys and values  and other useful operations.
*/

// create New Map

const myMap = new Map([
    ["key1","value1"],
    ["key2","value2"],
    ["key3","value3"],
])

// To add a new key-value pair to a map use the set() method.
myMap.set("key4","value4")

// To retrieve the value associated with a key in a map use the get() method.

const value = myMap.get("key1")

// to check if a key exist in a map use the has() method.

const exists = myMap.has("key1") //output :- true
// to remove key value pair from a map use delete() method.
myMap.delete("key1")

// to get no. of key value pair use size property.
const count = myMap.size