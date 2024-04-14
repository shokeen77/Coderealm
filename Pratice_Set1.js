// 1 :- Create a variable of type string and try to add a value to it.
var demo = 30;

// 2 :- Use typeOf Operator to find the datatype of the Q1.
console.log(typeof(demo));

// 3 :- Create a const object in javascript can you change it to hold later.
const obj = {
    "Nishant" :"77",
    "Alter" : "false"
}
console.log(obj["Nishant"]);
// const obj = {

// }

// ********* Hence const variable can't be changed later   ********* 
// ********* But values inside the variable can be changed ********* 

// 4 :- Try to add a new key to the const object in above question..Can you able to do it ?
obj.student = "hella";
console.log(obj);

// ********* Hence the new key can be added to the object   ********* 

// 5 :- Write a JS Program to create a word meaning dictionary of 5 words.
const word = {
    "Happy" : "Feeling pleasure",
    "Big"   : "extent",
    "Fast"  : "high speed",
    "Hot"   : "high temprature",
    "Cold"  : "low temprature"
}
console.log(word);