
window.addEventListener('load', playMusic);

 let musik = document.querySelector("#backgroundmusic");
 
 
  function playMusic(){
    musik.volume = 0.3;
    musik.loop = true;
    musik.play;
    // if(musik.addEventListener(onclick) == musik.play()){
    //     musik.pause();
    // } 

  }
