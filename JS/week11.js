console.log("Let's talk about switch statemens and loops in Javascript");

//switch statements
//are used to perform different actions based on different conditions
//use the switch statement to select one of many code blocks to be executed
//the switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case


//let's get the day automatically
// const today = new Date();
// console.log(today);
// const day = today.toLocaleString('default', {weekday: 'long'});


//this is a very inefficient way of writing this type of code
const day = "Thursday";
let message = "";

switch(day) {
    case "Monday":
        console.log("It's Monday!");
        message = "Damn, it's the start of the week..."
        break;
    case "Tuesday":
        console.log("It's Tuesday!");
        message = "It's still the start of the week..."
        break;
    case "Wednesday":
        console.log("It's Wednesday!");
        message = "It's the middle of the week!"
        break;
    case "Thursday":
        console.log("It's Thursday!");
        message = "So close to the end of the work week ;d"
        break;
    case "Friday":
        console.log("It's Friday!");
        break;
    case "Saturday":
        console.log("It's Saturday!");
        break;
    case "Sunday":
        console.log("It's Sunday!");
        break;
    default:
        console.log("I don't know what day it is!");
}

console.log("Today is " + day)

const switchExample = document.querySelector(".switch-example");


let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

//let's loop from 1 to 3 and add text to block-n div
let j = 1;
while (j <= 3) {
    const block = document.querySelector(".block-" + j);
    block.textContent = "This is a thingymajig added through javascript" + j;
    j++;
}

//this loop creates an input window that will keep asking for input until the user types "exit" or the counter reaches 10
counter = 1;
//change false to true to run the loop
while (false) {
    const input = prompt("Enter 'exit' to exit this window");
    console.log("Your counter is " + counter);
    if (input === "exit" || counter >= 10) {
        console.log("Exiting...");
        break;
    }
    counter++;
}

//something something, continue?

//for loops
for (let k = 1; k <= 3; k++) {
    console.log("The number is " + k);
    //alternative syntax for concatenation
    console.log(`The number, again, is ${k}`);
}

//check the class recording cus I missed this part too ;D

