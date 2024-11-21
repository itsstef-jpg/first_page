//make sure to write a lot of comments to explain to your future self what the hell you're doing lol
console.log("Hello world!");
console.log(2+2);
document.body.style.backgroundColor = "cornsilk";
// let's us do the magic of math 
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log("This is the leftover of 20/6", 20%6);
console.log(2**3);
console.log("Parentheses math", 2*4+(2+2))
console.log("Power!", 2**3, 5**5)
console.log("Square root", Math.sqrt(16));
console.log("Random number", Math.random());
console.log("Random number between 1 and 10", Math.floor(Math.random()*10)+1);
console.log("Cosine", Math.cos(1));
console.log("Sine", Math.sin(1));
console.log("Tangent", Math.tan(1));
console.log("Absolute value", Math.abs(-1));
console.log("Ceiling", Math.ceil(1.1));
console.log("Floor", Math.floor(1.9));
console.log("Round", Math.round(1.5));
console.log("Round up", Math.round(1.1));
console.log("Round down", Math.round(1.9));
console.log("Logarithm", Math.log(10));
console.log("Exponential", Math.exp(1));
console.log("Pi", Math.PI);
console.log("Euler's number", Math.E);
console.log("Minimum", Math.min(1,2,3,4,5));
console.log("Maximum", Math.max(1,2,3,4,5));
console.log("Absolute value", Math.abs(-1));

// it's time to deal with variables - store values to use later
let x = 2; //recommended way to declare variables is let
let y = 3;
let z = x + y;
console.log("x + y =", z);

//storing strings
let myName = "Stef";
let university = "RTU DITEF";
let sentence = "My name is " + myName + " and I study at " + university;
console.log(sentence);

// let's add this sentence to the div with id "my-custom-text"
document.getElementById("my-custom-text").innerHTML = sentence; //not the bestest way to do this?

document.getElementById("my-custom-text-2").textContent = sentence; //this is better

//chaning value (because things happen in order, as usual in programming)
x = 203;
y = 304;
z = x + y;
console.log("x + y =", z);

//note: use short but descriptive variable names!!!
//variables are CASE SENSITIVE
//stick to camelCase for variable names
//myVariableName is the way to go, don't do this - my_variable_name

//there is an older way of declaring variables - var
//don't use this no more

//there is also const for constant variables
//you don't expect this variable to change
//usually, start with const and move to let if you need to change the value later
//less errors in the future if you stick to constant values
const todaysLesson = "2024.10.13";
console.log(todaysLesson);
todaysLesson = "2024.10.14"; //this will throw an error
console.log(todaysLesson);