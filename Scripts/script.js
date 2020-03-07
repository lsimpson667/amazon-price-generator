
let itemName = prompt("What is the name of the item?");

const basePrice = prompt("What is the base price of the item?");

let blackFriday = prompt("Is today Black Friday?");

let searchEngine = prompt("Did you find this product through a seach engine?");

let comparisonShopping = prompt("Did you visit a comparison-shopping site?");

// create message with user entries
let msg = `Item Name: ${itemName} \n Base Price: ${basePrice} \n Black Friday: ${blackFriday} \n Search Engine: ${searchEngine} \n Comparison shopping: ${comparisonShopping}`;
console.log(msg);

// include final price in the if statemet
let finalPrice = basePrice;

// if statement that increases or decreases the item (Use logic operators)

if (blackFriday === "yes") {
    finalPrice = basePrice - (basePrice * .25);
    msg = `${msg} It is Black Friday, so we will reduce the price by 25%.The final price is ${finalPrice}\n`;
    
}

if (searchEngine === "yes") {
    finalPrice = basePrice * 1.01;
    msg = `${msg} The purchaser came through a search engine, so we will increase the price by 1%. The final price is ${finalPrice}\n`;
    
}

if (comparisonShopping === "yes") {
    finalPrice = basePrice * .9;
    msg = `${msg} The purchaser visited a comparison-shopping site, so we will reduce the price by 10%. The final price is ${finalPrice}\n`; 
    
};


// Alert a message that coresponds with yes or no answers
alert(msg)










