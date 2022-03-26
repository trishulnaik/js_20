let quote = {};
// fetch json data
async function fetchData(){
  const apiUrl = await fetch('https://type.fit/api/quotes');
  const apiData = await apiUrl.json();
  // console.log(apiData);
  quote = randomPicker(apiData);
  quote_text.textContent = quote.text;
  (quote.author) ? author.textContent = quote.author : author.textContent = 'Unknown';
  if(quote.author===null) hideELement(wikiBtn);  
}

//random picker function 
function randomPicker(dataObj){
  return dataObj[Math.floor(Math.random() * dataObj.length)]
}

//hide elements
function hideELement(element){
  element.className = 'hide-element';
}
const quote_text = document.querySelector('.quote-text');
const author = document.querySelector('.author');
const nextQuoteBtn = document.querySelector('#next-qoute'); 
const wikiBtn = document.querySelector('#wikipedia-icon');



fetchData()

// button click events
nextQuoteBtn.addEventListener('click',()=>window.location.reload());
wikiBtn.addEventListener('click',()=> window.open(`https://en.wikipedia.org/wiki/${quote.author}`,'_blank'))