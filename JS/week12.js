console.log("This is a log function from console");
//we are going to make some of our own functions ;)
//let's define a function to drink coffee

function drinkCoffee(){
    //let's pour milk first
    console.log("I am pouring milk");
    //pour coffee
    console.log("I am pouring coffee");
    //stir it
    console.log("I am stirring it");
    //drink it
    console.log("I am drinking coffee");
}
//we have created an abstraction called drinkCoffee
//so if I need to change the details of the function, I can do it in one place

//now i gotta call the function
drinkCoffee();


//now let's drink a lot of coffee.... (5times?)
// for(let i = 0; i < 5; i++){
//     drinkCoffee();
// }

//instead of making a function to drink coffee or tea, let's make a function to drink any beverage
//we'll make a generic function that takes a parameter
function drinkAny(beverage){
    //since coffee reuqires specific steps, we will check if the beverage is coffee
    if (beverage === "coffee"){
        drinkCoffee();
        //then we return from the function immediately
        return;
    }
    //pour drink
    console.log("I am pouring " + beverage);
    //stir it
    console.log("I am stirring " + beverage);
    //drink it
    console.log("I am drinking " + beverage);
}

//let's drink strawberry milk and other stuff
drinkAny("strawberry milk");
drinkAny("coffee");
drinkAny("tea");

//let's make a function that will take some text and dom id and appent textContent of the dom element
function appendTextToElement(text, id){
    //get the element by id
    let element = document.querySelector("#" + id);
    //append the text to the element
    element.textContent += text;
}
//make a function drink and print
//it will add text to the element and drink the beverage
function drinkAndPrint(beverage, id){
    drinkAny(beverage);
    appendTextToElement(beverage + " was drank. ", id);
}

drinkAndPrint("Coffee", "function-output");

//let's make a function that takes in a drink and returns a string with the message "Drunk" + drink
function drinkAndReturn(drink){
    return "Drank " + drink;
}
//!!!!above is the ideal function in a way that it takes some input and returns some output
//these types of functions are easier to test and debug

//now I can save the result
const result = drinkAndReturn("coffee");

//javascript is weird for string concatenation

//we can make a function to create a greeting from two names
function createGreeting(firstName, lastName){
    return "Hello " + firstName + " " + lastName;
}  

const fryGreetings = createGreeting("Philip", "Fry");
const benderGreetings = createGreeting("Bender", "Rodriguez");

// appendTextToElement(fryGreetings, "function-output");
// appendTextToElement(benderGreetings, "function-output");

//but we want to add this stuff to the list
//let's make a function that takes in ul element and text to be added as li
function addToList (ul,text){ //this function will work with lists and ordered lists
    //create a new li element
    const li = document.createElement("li"); //document is a global object that represents the html document
    //set the textContent of the li element
    li.textContent = text; 
    //at this moment my element is an orphan, it is not part of the DOM
    //append the li element to the ul element
    ul.appendChild(li);
}

//so let's add fryGreeting and benderGreeting to the list
const ul = document.querySelector("#function-list"); //now we need to know the id of the ul element

//add fryGreeting
addToList(ul, fryGreetings);
//add benderGreeting
addToList(ul, benderGreetings);

//default values for some function parameters
//we can set default values for function parameters
//let's make a greeting function that will greet with Hello by defualt
//DEFAULT VALUES SHOULD GO AFTER THE REQUIRED PARAMETERS
//opening is also optional and has a default value of "Hello"
function greet(firstName, lastName = "Stranger", opening = "Hello "){
    return opening + firstName + " " + lastName;
}

console.log(greet("Mr.")); //stranger is default value
//let's give it to our list
addToList(ul, greet("Mr."));

//now let's move on to event listeners
//we can add event listeners to elements
//we first define action that will be taken
//let's make a fucntion that changes the whole body of the page to a random color

functuon changeColor(){
    //get the body element
    const body = document.querySelector("body");
    //generate a random color
    body.style.bacgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
}

//changeColor(); //this will change the color of the body element by directly calling it
//instead we will add this to buttons

//get the button element
const button1 = document.querySelector("#button1");
//add an event listener to the button
//first parameeter is the event name, in this case "click"
// second parameter is the function that will be called when the event happens

button1.addEventListener("click", changeColor);

let counter = 0;

function incrementCounter(){
    counter++;
    const counterElement = document.querySelector("#counter-output");
    counterElemenet.textContent = counter;

}

const counterButton = document.querySelector("#counter-button");

//we can also remove evenet listeners 