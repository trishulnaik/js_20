const COUNT = 10;
const UNSPLASH_KEY = 'ZMrtJvZS3MJbH8e81axvZiTlY5Oyq5SgSZz082png1M';
const splashApi = `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_KEY}&count=${COUNT}`;


const imgContainer = document.querySelector('#imageContainer');

function renderImage(data){
  // console.log(data);
  data.forEach(element => {
    const item = document.createElement('a');
    item.setAttribute('href',element.links.html);
    item.setAttribute('target','_blank');
    const img = document.createElement('img');
    img.setAttribute('src',element.urls.regular);
    item.appendChild(img);
    imgContainer.appendChild(item);
    // imgContainer.appendChild(item);
  });
}

async function getPhotos(){
  try{
    const data = await fetch(splashApi); //response data is in json format.`
    const jsonData = await data.json();
    renderImage(jsonData);
  }
  catch(error){
    // do when something is wrong
  }
}
getPhotos()