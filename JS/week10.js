// time to do some comparison operators and other stuff

console.log("Hello! This works!")

//lets use console log to show comparison operators:
console.log("Comparison operators:")
console.log("Is 1 < 2 ?", 1 < 2); //true
console.log("Is 1 > 2? ", 1 > 2); //false
console.log("1 <= 2", 1 <= 2); //true
console.log("1 >= 2", 1 >= 2); //false
console.log("1 == 2", 1 == 2); //false
console.log("1 != 2", 1 != 2); //true
console.log(1 === 2); //false
console.log(1 !== 2); //true

console.log("Is 2 === 2?", 2 === 2); //triple comparison leads to less bugs
console.log("Is 2 == 2?", 2 == '2'); //there's something weird about this I guess
console.log("Is 2 === '2'?", 2 === '2'); //false

//use === and !== as much as possible instead of == and !=

//here's and ID from the HTML file comparison-1 (there's four of em)
//out html document has span elements with ids
//we can use that to adjust innerText for those spans - we could also adjust innerHTML (but that is more dangerous)
document.getElementById("comparison-1.0").innerText = (8 === 8); //true

//how is this code read?
//document gets the whole web document for out webpage
//then we say we want to get an element by its id
//by W3C standards there should be only one element with a specific id
//if there are multiple elements with the same id, only the first one is returned
//then we adjust the innerText of that element to be the result of the comparison 1 < 2

//let's use const for comparison-2
const comparison2 = document.getElementById("comparison-2");
comparison2.innerText = 8 === 9; //false

//now let's use !==
const comparison3 = document.getElementById("comparison-3");
const result3 = 5 !== 6;
comparison3.innerText = result3; //true

//let's make an error
// document.getElementById("comparison-20").innerText = 8 === 8;

//let's use some logical operators
console.log("Logical operators:")
console.log("true && true", true && true); //true
console.log("true && false", true && false); //false
console.log("false && true", false && true); //false
console.log("false && false", false && false); //false
console.log("true || true", true || true); //true
console.log("true || false", true || false); //true
console.log("false || true", false || true); //true
console.log("false || false", false || false); //false
console.log("!true", !true); //false
console.log("!false", !false); //true

//let's use logical operators in the HTML file
// const logical1 = document.getElementById("logical-1");
// logical1.innerText = (8 === 8) && (9 === 9); 

document.getElementById("logical-1").innerText = (8 === 8) && (9 === 9); //true

document.getElementById("logical-2").innerText = (8 === 8) && (9 === 10); //false

document.getElementById("logical-3").innerText = (8 === 8) || (9 === 10); //true

document.getElementById("logical-4").innerText = (8 === 9) || (9 === 10); //false

document.getElementById("logical-5").innerText = !(8 === 9); //true

document.getElementById("logical-6").innerText = !(8 === 8); //false

//the heck is this?
// let toggle = true; //variable name is descriptiive
// document.getElemenetById("toggle").innerText = toggle; //true
// toggle = !toggle;



//let's use some conditional statements
//lets have a variable isRaining
let isRaining = true;

if(isRaining) {
    document.getElementById("conditional-1").innerText = "It's raining!";
    }
    else {
        document.getElementById("conditional-1").innerText = "It's not raining!";
    }

isRaining = false;

if(isRaining) {
    document.getElementById("conditional-2").innerText = "It's raining!";
    }
    else {
        document.getElementById("conditional-2").innerText = "It's not raining!";
    }

//so based on the value of isRaining we change the innerText of the span element
//in other words, if variable isRaining is true, we say it's raining, otherwise we say it's not raining

let age = 18;
const conditional3 = document.getElementById("conditional-3");
if(age < 18) {
    document.getElementById("conditional-3").innerText = "You can vote!";
    //this is to show the age as well
    conditional3.innerText += " Your age: " + age;
    }
    else if (age > 120){
        document.getElementById("conditional-3").innerText = "You're probably not voting!";
        conditional3.innerText += " Your age: " + age;
    } 
    else {
        document.getElementById("conditional-3").innerText = "You can't vote!";
        conditional3.innerText += " Your age: " + age;
    }
//!!!!!!!!!!!!!!!! You need to swap <18 and >120 to get the correct result! Order matters! It will result in error if you
//put let age = a larger value (e.g. 140)
//THE CURRENT THING IS WRONG!!!!!!!!
    

