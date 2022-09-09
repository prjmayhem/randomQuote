/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Included quotes for the random quotes
const quotes = [{
        quote: `You are not your job, you’re not how much money you have in the bank. You are not the car you drive. You’re not the contents of your wallet.`,
        source: `Tyler Durden`,
        citation: `Fight Club`,
        year: '1996',
        tag: `Inspirational`
    },
    {
        quote: `Someday, I'll be better
        Now that you're gone, I'll burn all your letters
        And right all your wrongs
        Right now, I am barely off of my knees
        But someday, I'll find peace`,
        source: `Alison Wonderland`,
        citation: `Song Peace`,
        year: `2019`

    },
    {
        quote: `One day I will find the right words, and they will be simple.`,
        source: `Jack Kerouac`,
        citation: `The Dharma Bums`


    },
    {
        quote: `It is during our darkest moments that we must focus to see the light. `,
        source: `Aristotle`


    },
    {
        quote: `Only a life lived for others is a life worthwhile.`,
        source: `Albert Einstein`

    }

];

// List of global variables
let randomNumber;
let array = [];
let rgb;

//function to generate random RGB colors
function randomRGB() {
    rgb = Math.floor(Math.random() * 256);
    return rgb;
}


//random quote function that produces a quote object 
function getRandomQuote(arr) {

    randomNumber = Math.floor(Math.random() * arr.length);
    array = arr[randomNumber];
    return array;
}


//function that will run the getRandomQuote.  It will change the background color and produce a new quote
function printQuote() {
    let quote = getRandomQuote(quotes);
    let html = `<p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}</p>`
    if (quote.citation) {
        html += `<span class="citation">${quote.citation}</span>`
    }
    if (quote.year) {
        html += `<span class="year">${quote.year}</span>`
    }
    if (quote.tag) {
        html += `<span class="tag">  ${quote.tag}</span>`

    }
    document.body.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
    document.getElementById('quote-box').innerHTML = html;
}


//If button is manually selected, this will add a new quote on the page
document.getElementById('load-quote').addEventListener("click", printQuote, false);

//auto update for quotes when it's not clicked
setInterval(printQuote, 10000);