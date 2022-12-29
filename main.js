const audioplayer = document.querySelector('.audioplayer')
const playpausebutton =document.querySelector('.playpause')
let play =true;

playpausebutton.addEventListener('click',()=>{
    if(play)
        {
         audioplayer.play();
         play=!play;
         playpausebutton.style.backgroundImage="url(pause.png)";
        }
    else
        {
        audioplayer.pause();
        play=!play;
        playpausebutton.style.backgroundImage="url(play.png)";
        }
})