// primitive 

//all primitives data types are call by value
// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt
const score=100
const scoreValue=100.3

const isLoggedIn= false
const outsideTemp=null          //typeof(null)-->object 
let userEmail; //undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)    //it returns false coz symbol returns different values 

const bigNumber=123456781212n



// Reference(non primitive)
// Arrays, Objects,Functions

const heroes=["shaktiman","naagraj","doga"]

let myObj={
    name: "manish",
    age: 22,
}


const myFunction=function(){          //return type function
    console.log("hello world");
}

console.log(typeof(bigNumber))