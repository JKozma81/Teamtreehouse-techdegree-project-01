// FSJS - Random Quote Generator

//The quotes are in the quotes.js file


// Create the getRandomQuuote function and name it getRandomQuote
// Create the printQuote funtion and name it printQuote


//Generate a random number between 0 and "range"
function getRandomNumber(range) {
  let randomNumber = Math.floor(Math.random() * range + 1);
  return randomNumber;
}

//Get a random quote from an array
function getRandomQuote(array) {
  let randomQuote = array[getRandomNumber(array.length) - 1];
  return randomQuote;
}

//Generate a random background color 
function getRandomColor() {
  let randomColor = 'rgb(' + getRandomNumber(256) + ',' + getRandomNumber(256) + ',' + getRandomNumber(256) + ')';
  return randomColor;
}

//Printing out the quote to the page
function printQuote() {
  let selectedQuote = getRandomQuote(quotes);

  let htmlCode = '<p class="quote">' + selectedQuote.quote + '</p><p class="source">' + selectedQuote.source + '<span class="citation">' + selectedQuote.citation + '</span><span class="year">' + selectedQuote.year + '</span></p>';

  let color = getRandomColor();

  document.getElementById('quote-box').innerHTML = htmlCode;

  document.querySelector('body').style.backgroundColor = color;
  document.getElementById('loadQuote').style.backgroundColor = color;
}

//On button click a random quote is printed
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

document.getElementById('loadQuote').addEventListener("click", stop, false);

function start() {
  let intervalID = setInterval(printQuote, 5000);
  return intervalID;
}

function stop() {
  clearInterval(intervalID);
}

//start();

