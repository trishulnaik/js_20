const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const resetBtn = document.getElementById('reset');
const chooseBtn = document.getElementById('chooseScreen');
//select the media screen
async function selectMediaScreen(){
  try{
    const mediaScreen = await navigator.mediaDevices.getDisplayMedia();
    chooseBtn.parentElement.hidden = true;
    videoElement.srcObject = mediaScreen;
    videoElement.onloadedmetadata = () => {videoElement.play()};
  }
  catch (error){
    // error work
  }
}

button.addEventListener('click', async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

chooseBtn.addEventListener('click',()=>selectMediaScreen());

reset.addEventListener('click',()=>{
  location.reload();
})

