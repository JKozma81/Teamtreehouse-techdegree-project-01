// FSJS - Random Quote Generator

// The quotes are in the quotes.js file
let intervalID = 0
let tempQuotes = []

// Generate a random number
function getRandomNumber (range) {
  let randomNumber = Math.floor(Math.random() * range + 1)
  return randomNumber
}

// Generating the working quote array
function generateQuotes () {
  quotes.map(function (element) {
    tempQuotes.push(element)
  })
}

// Removes quote from the array
function removeQuote (quote, arrayFrom) {
  arrayFrom.splice(arrayFrom.indexOf(quote), 1)
}

// Get a random quote from an array
function getRandomQuote (array) {
  if (array.length === 0) {
    generateQuotes()
  }
  let randomQuote = array[getRandomNumber(array.length) - 1]
  removeQuote(randomQuote, array)
  return randomQuote
}

// Generate a random background color
function getRandomColor () {
  let randomColor = 'rgb(' + getRandomNumber(256) + ',' + getRandomNumber(256) + ',' + getRandomNumber(256) + ')'
  return randomColor
}

// Printing out the quote to the page
function printQuote () {
  stop()
  let selectedQuote = getRandomQuote(tempQuotes)
  let color = getRandomColor()
  let htmlCode = '<p class="quote">' + selectedQuote.quote + '</p><p class="source">' + selectedQuote.source
  let citation = '<span class="citation">' + selectedQuote.citation + '</span>'
  let year = '<span class="year">' + selectedQuote.year + '</span>'
  let end = '</p>'

  if (selectedQuote.hasOwnProperty('citation') && selectedQuote.hasOwnProperty('year')) {
    if (selectedQuote.citation !== '' && selectedQuote.year !== '') {
      htmlCode += citation + year + end
    } else if (selectedQuote.citation !== '' && selectedQuote.year === '') {
      htmlCode += citation + end
    } else if (selectedQuote.citation === '' && selectedQuote.year !== '') {
      htmlCode += year + end
    } else {
      htmlCode += end
    }
  } else if (!selectedQuote.hasOwnProperty('citation') && selectedQuote.hasOwnProperty('year')) {
    if (selectedQuote.year !== '') {
      htmlCode += year + end
    }
  } else if (selectedQuote.hasOwnProperty('citation') && !selectedQuote.hasOwnProperty('year')) {
    if (selectedQuote.citation !== '') {
      htmlCode += citation + end
    }
  } else {
    htmlCode += end
  }
  document.getElementById('quote-box').innerHTML = htmlCode

  document.querySelector('body').style.backgroundColor = color
  document.getElementById('loadQuote').style.backgroundColor = color
  start()
}

// On button click a random quote is printed
document.getElementById('loadQuote').addEventListener('click', printQuote, false)

// Starting the automatic quote printing
function start () {
  intervalID = setInterval(printQuote, 10000)
}

// Stopping the automatic quote printing
function stop () {
  clearInterval(intervalID)
}

// Starts the program
function go () {
  generateQuotes()
  printQuote()
}

window.onload = go()
