
let itemName = prompt("What is the name of the item?");
const basePrice = prompt("What is the base price of the item?");
let blackFriday = prompt("Is today Black Friday?");
let searchEngine = prompt("Did you find this product through a seach engine?");
let comparisonShopping = prompt("Did you visit a comparison-shopping site?");

// declare all final price variables and assign them with the value of the baseprice
let finalPrice2 = basePrice; 
let finalPrice3 = basePrice;
let finalPrice4 = basePrice;

// create equasions for each discount using the matching final price variable
finalPrice2 = basePrice - (basePrice * .25);
finalPrice3 = basePrice * 1.01;
finalPrice4 = basePrice * .9;

// create function that shows a message based on which discount(s) will be provided to the user based on their imput to the prompted questions
function discounts() {
// create message to display user responses
msg = `Item Name: ${itemName} \nBase Price: ${basePrice} \nBlack Friday: ${blackFriday} \nSearch Engine: ${searchEngine} \nComparison shopping: ${comparisonShopping} \n\n`;
// create message to display for each type of discount
msg2 = `It is Black Friday, so we will reduce the price by 25%.The final price is ${finalPrice2}\n`;
msg3 = `The purchaser came through a search engine, so we will increase the price by 1%. The final price is ${finalPrice3}\n`;
msg4 = `The purchaser visited a comparison-shopping site, so we will reduce the price by 10%. The final price is ${finalPrice4}\n`; 

// create if statement using logic operators with every possible combination of user inputs
// alert the messages that correspond with each possible combination of user inputs
    if (blackFriday === "yes" && searchEngine === "yes" && comparisonShopping === "yes") {
        alert(`${msg} ${msg2} ${msg3} ${msg4}`);
    } else if (blackFriday === "yes" && searchEngine === "yes") {
        alert(`${msg} ${msg2} ${msg3}`);
    } else if (blackFriday === "yes" && comparisonShopping === "yes") {
        alert(`${msg} ${msg2} ${msg4}`);    
    } else if (blackFriday === "yes") {
        alert(`${msg} ${msg2}`);
    } else if (searchEngine === "yes" && comparisonShopping === "yes") {
        alert(`${msg} ${msg3} ${msg4}`);
    } else if (searchEngine === "yes") {
        alert(`${msg} ${msg3}`)
    } else if (comparisonShopping === "yes") {
        alert(`${msg} ${msg4}`);
    }
}

discounts();






