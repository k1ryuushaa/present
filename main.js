var interval =5000;
setTimeout(step,interval);
function step(){
    document.querySelector('.loading').style.display="none";
}

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

const audio = document.getElementById('music')
  const start = document.querySelector('.start')
  const end = document.querySelector('.end')
  const progressBar = document.querySelector('.progress-bar')
  const now = document.querySelector('.now')
 const playpause=document.querySelector('.playpausevoice')
 let play1=true;
  function conversion (value) {
    let minute = Math.floor(value / 60)
    minute = minute.toString().length === 1 ? ('0' + minute) : minute
    let second = Math.round(value % 60)
    second = second.toString().length === 1 ? ('0' + second) : second
    return `${minute}:${second}`
  }

  audio.onloadedmetadata = function () {
    end.innerHTML = conversion(audio.duration)
    start.innerHTML = conversion(audio.currentTime)
  }

playpause.addEventListener('click',()=>{
    if(play1)
    {
    audio.play();
     play1=!play1;
     playpause.style.backgroundImage="url(pausevoice.png)";
     playpause1.style.backgroundImage="url(playvoice.png)";
     playpause2.style.backgroundImage="url(playvoice.png)";
     playpause3.style.backgroundImage="url(playvoice.png)";
     playpause4.style.backgroundImage="url(playvoice.png)";
     playpause5.style.backgroundImage="url(playvoice.png)";
     audio1.pause()
     audio2.pause()
     audio3.pause()
     audio4.pause()
     audio5.pause()
    }
else
    {
    audio.pause();
    play1=!play1;
    playpause.style.backgroundImage="url(playvoice.png)";
    }
})
  progressBar.addEventListener('click', function (event) {
    let coordStart = this.getBoundingClientRect().left
    let coordEnd = event.pageX
    let p = (coordEnd - coordStart) / this.offsetWidth
    now.style.width = p.toFixed(3) * 100 + '%'

    audio.currentTime = p * audio.duration
    audio.pause()
  })

  setInterval(() => {
    start.innerHTML = conversion(audio.currentTime)
    now.style.width = audio.currentTime / audio.duration.toFixed(3) * 100 + '%'
  }, 1000)

  const audio1 = document.getElementById('music1')
  const start1 = document.querySelector('.start1')
  const end1 = document.querySelector('.end1')
  const progressBar1 = document.querySelector('.progress-bar1')
  const now1 = document.querySelector('.now1')
 const playpause1=document.querySelector('.playpausevoice1')
 let play2=true;

  audio1.onloadedmetadata = function () {
    end1.innerHTML = conversion(audio1.duration)
    start1.innerHTML = conversion(audio1.currentTime)
  }

playpause1.addEventListener('click',()=>{
    if(play2)
    {
    audio1.play();
     play2=!play2;
     playpause1.style.backgroundImage="url(pausevoice.png)";
     playpause.style.backgroundImage="url(playvoice.png)";
     playpause2.style.backgroundImage="url(playvoice.png)";
     playpause3.style.backgroundImage="url(playvoice.png)";
     playpause4.style.backgroundImage="url(playvoice.png)";
     playpause5.style.backgroundImage="url(playvoice.png)";
     audio.pause()
     audio2.pause()
     audio3.pause()
     audio4.pause()
     audio5.pause()
    }
else
    {
    audio1.pause();
    play2=!play2;
    playpause1.style.backgroundImage="url(playvoice.png)";
    }
})
  progressBar1.addEventListener('click', function (event) {
    let coordStart = this.getBoundingClientRect().left
    let coordEnd = event.pageX
    let p = (coordEnd - coordStart) / this.offsetWidth
    now1.style.width = p.toFixed(3) * 100 + '%'

    audio1.currentTime = p * audio1.duration
    audio1.pause()
  })

  setInterval(() => {
    start1.innerHTML = conversion(audio1.currentTime)
    now1.style.width = audio1.currentTime / audio1.duration.toFixed(3) * 100 + '%'
  }, 1000)

  const audio2 = document.getElementById('music2')
  const start2 = document.querySelector('.start2')
  const end2 = document.querySelector('.end2')
  const progressBar2 = document.querySelector('.progress-bar2')
  const now2 = document.querySelector('.now2')
 const playpause2=document.querySelector('.playpausevoice2')
 let play3=true;

  audio2.onloadedmetadata = function () {
    end2.innerHTML = conversion(audio2.duration)
    start2.innerHTML = conversion(audio2.currentTime)
  }

playpause2.addEventListener('click',()=>{
    if(play3)
    {
    audio2.play();
     play3=!play3;
     playpause2.style.backgroundImage="url(pausevoice.png)";
     playpause1.style.backgroundImage="url(playvoice.png)";
     playpause.style.backgroundImage="url(playvoice.png)";
     playpause3.style.backgroundImage="url(playvoice.png)";
     playpause4.style.backgroundImage="url(playvoice.png)";
     playpause5.style.backgroundImage="url(playvoice.png)";
     audio1.pause()
     audio.pause()
     audio3.pause()
     audio4.pause()
     audio5.pause()
    }
else
    {
    audio2.pause();
    play3=!play3;
    playpause2.style.backgroundImage="url(playvoice.png)";
    }
})
  progressBar2.addEventListener('click', function (event) {
    let coordStart = this.getBoundingClientRect().left
    let coordEnd = event.pageX
    let p = (coordEnd - coordStart) / this.offsetWidth
    now2.style.width = p.toFixed(3) * 100 + '%'

    audio2.currentTime = p * audio1.duration
    audio2.pause()
  })

  setInterval(() => {
    start2.innerHTML = conversion(audio2.currentTime)
    now2.style.width = audio2.currentTime / audio2.duration.toFixed(3) * 100 + '%'
  }, 1000)

  const audio3 = document.getElementById('music3')
  const start3 = document.querySelector('.start3')
  const end3 = document.querySelector('.end3')
  const progressBar3 = document.querySelector('.progress-bar3')
  const now3 = document.querySelector('.now3')
 const playpause3=document.querySelector('.playpausevoice3')
 let play4=true;

  audio3.onloadedmetadata = function () {
    end3.innerHTML = conversion(audio3.duration)
    start3.innerHTML = conversion(audio3.currentTime)
  }

playpause3.addEventListener('click',()=>{
    if(play4)
    {
    audio3.play();
     play4=!play4;
     playpause3.style.backgroundImage="url(pausevoice.png)";
     playpause1.style.backgroundImage="url(playvoice.png)";
     playpause2.style.backgroundImage="url(playvoice.png)";
     playpause.style.backgroundImage="url(playvoice.png)";
     playpause4.style.backgroundImage="url(playvoice.png)";
     playpause5.style.backgroundImage="url(playvoice.png)";
     audio1.pause()
     audio2.pause()
     audio.pause()
     audio4.pause()
     audio5.pause()
    }
else
    {
    audio3.pause();
    play4=!play4;
    playpause3.style.backgroundImage="url(playvoice.png)";
    }
})
  progressBar3.addEventListener('click', function (event) {
    let coordStart = this.getBoundingClientRect().left
    let coordEnd = event.pageX
    let p = (coordEnd - coordStart) / this.offsetWidth
    now3.style.width = p.toFixed(3) * 100 + '%'

    audio3.currentTime = p * audio3.duration
    audio3.pause()
  })

  setInterval(() => {
    start3.innerHTML = conversion(audio3.currentTime)
    now3.style.width = audio3.currentTime / audio3.duration.toFixed(3) * 100 + '%'
  }, 1000)

  const audio4 = document.getElementById('music4')
  const start4 = document.querySelector('.start4')
  const end4 = document.querySelector('.end4')
  const progressBar4 = document.querySelector('.progress-bar4')
  const now4 = document.querySelector('.now4')
 const playpause4=document.querySelector('.playpausevoice4')
 let play5=true;

  audio4.onloadedmetadata = function () {
    end4.innerHTML = conversion(audio4.duration)
    start4.innerHTML = conversion(audio4.currentTime)
  }

playpause4.addEventListener('click',()=>{
    if(play5)
    {
    audio4.play();
     play5=!play5;
     playpause4.style.backgroundImage="url(pausevoice.png)";
     playpause1.style.backgroundImage="url(playvoice.png)";
     playpause2.style.backgroundImage="url(playvoice.png)";
     playpause3.style.backgroundImage="url(playvoice.png)";
     playpause.style.backgroundImage="url(playvoice.png)";
     playpause5.style.backgroundImage="url(playvoice.png)";
     audio1.pause()
     audio2.pause()
     audio3.pause()
     audio.pause()
     audio5.pause()
    }
else
    {
    audio4.pause();
    play5=!play5;
    playpause4.style.backgroundImage="url(playvoice.png)";
    }
})
  progressBar4.addEventListener('click', function (event) {
    let coordStart = this.getBoundingClientRect().left
    let coordEnd = event.pageX
    let p = (coordEnd - coordStart) / this.offsetWidth
    now4.style.width = p.toFixed(3) * 100 + '%'

    audio4.currentTime = p * audio4.duration
    audio4.pause()
  })

  setInterval(() => {
    start4.innerHTML = conversion(audio4.currentTime)
    now4.style.width = audio4.currentTime / audio4.duration.toFixed(3) * 100 + '%'
  }, 1000)

  const audio5 = document.getElementById('music5')
  const start5 = document.querySelector('.start5')
  const end5 = document.querySelector('.end5')
  const progressBar5 = document.querySelector('.progress-bar5')
  const now5 = document.querySelector('.now5')
 const playpause5=document.querySelector('.playpausevoice5')
 let play6=true;

  audio5.onloadedmetadata = function () {
    end5.innerHTML = conversion(audio5.duration)
    start5.innerHTML = conversion(audio5.currentTime)
  }

playpause5.addEventListener('click',()=>{
    if(play6)
    {
    audio5.play();
     play6=!play6;
     playpause5.style.backgroundImage="url(pausevoice.png)";
     playpause1.style.backgroundImage="url(playvoice.png)";
     playpause2.style.backgroundImage="url(playvoice.png)";
     playpause3.style.backgroundImage="url(playvoice.png)";
     playpause.style.backgroundImage="url(playvoice.png)";
     playpause4.style.backgroundImage="url(playvoice.png)";
     audio1.pause()
     audio2.pause()
     audio3.pause()
     audio.pause()
     audio4.pause()
    }
else
    {
    audio5.pause();
    play6=!play6;
    playpause5.style.backgroundImage="url(playvoice.png)";
    }
})
  progressBar5.addEventListener('click', function (event) {
    let coordStart = this.getBoundingClientRect().left
    let coordEnd = event.pageX
    let p = (coordEnd - coordStart) / this.offsetWidth
    now5.style.width = p.toFixed(3) * 100 + '%'

    audio5.currentTime = p * audio5.duration
    audio5.pause()
  })

  setInterval(() => {
    start5.innerHTML = conversion(audio5.currentTime)
    now5.style.width = audio5.currentTime / audio5.duration.toFixed(3) * 100 + '%'
  }, 1000)