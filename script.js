let quote = {};
// fetch json data
async function fetchData(){
  const apiUrl = await fetch('https://type.fit/api/quotes');
  const apiData = await apiUrl.json();
  // console.log(apiData);
  quote = randomPicker(apiData);
  quote_text.textContent = quote.text;
  (quote.author) ? author.textContent = quote.author : author.textContent = 'Unknown';
  showHideContainer(quoteContainer,loaderContainer)
  if(quote.author===null) hideELementNode(wikiBtn);  
}

//random picker function 
function randomPicker(dataObj){
  return dataObj[Math.floor(Math.random() * dataObj.length)]
}


const quote_text = document.querySelector('.quote-text');
const author = document.querySelector('.author');
const nextQuoteBtn = document.querySelector('#next-qoute'); 
const wikiBtn = document.querySelector('#wikipedia-icon');
const quoteContainer = document.querySelector('.quote-container');
const loaderContainer = document.querySelector('.loding-container');

showHideContainer(loaderContainer,quoteContainer)
fetchData();

function showHideContainer(showELement,hideElement){
  showELement.hidden = false;
  hideElement.hidden = true;
}
function hideELementNode(element){
  element.hidden = true;
}

// button click events
nextQuoteBtn.addEventListener('click',()=>window.location.reload());
wikiBtn.addEventListener('click',()=> window.open(`https://en.wikipedia.org/wiki/${quote.author}`,'_blank'))