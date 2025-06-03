let intro = document.getElementById('intro');
let header = document.getElementById('header-main');
let tDays = document.querySelectorAll('.days');
let tHours = document.querySelectorAll('.hours');
let tMin = document.querySelectorAll('.mins');
let tSec = document.querySelectorAll('.secs');
let remDays = document.getElementById('rem-days');
let remDays2 = document.querySelector('#rem-days2 span');

let headerCountdown = document.getElementById('header-countdown');

let prompt = document.getElementById('prompt')
let playbtn = document.getElementById('play')
let mutebtn = document.getElementById('mute')
let remember = document.getElementById('remember')

let invitebtn = document.getElementById('invitebtn')
invitebtn.onclick = async () => {
    if(navigator.share) {
        const shareData = {
            title: 'AYEYE the Musical 2',
            text: 'AYEYE the Musical 2 | A Christmas Musical organised by Foursquare Gospel Church, Jebako',
            url: 'http://foursquarejebako.org.ng/ayeye.html',
          }
        try {
          await navigator.share(shareData);
        } catch(error) {
        }
      } else {
        // you could do a fallback solution here ...
        window.open('whatsapp://send?text=AYEYE the Musical 2 | A Christmas Musical organised by Foursquare Gospel Church, Jebako', "_blank");
      }
}

function handleIntro() {
    setTimeout(() => {
        prompt.hidden = false
    }, 600)
    playbtn.onclick = () => {
        let audio = document.getElementById('audio')
        audio.play()
        intro.hidden = true
        pageEntered()
        
    }
    mutebtn.onclick = () => {
        intro.hidden = true
        pageEntered()
    }
}

function changeHeaderBg() {
    let i = 0;
    let images = ['images/IMG_0572.jpg','images/IMG_0586.jpg', 'images/IMG_6514.jpg', 'images/IMG_6492.jpg', 'images/IMG_0604.jpg', 'images/IMG_0529.jpg', 'images/IMG_0567.jpg', 'images/IMG_0520.jpg', 'images/IMG_6491.jpg', 'images/IMG_0548,jpg'];

    setInterval(() => {
        header.style.backgroundImage = `url(${images[i]})`
        if (i == 7) {
            i = 0;
        } else {
            i++
        }
        
    }, 3500)
}


function timer() {
    let rem = getTimeRemaining('dec 19, 2021 3:30:00');
    
    remDays.innerText = rem.days > 0 ? `${rem.days} days` : `${rem.hours} hours`
    remDays2.innerText = rem.days > 0 ? `${rem.days} days` : `${rem.hours} hours`
    tDays.forEach((el) => {
        el.innerText = rem.days
    })
    tHours.forEach((el) => {
        el.innerText = rem.hours
    })
    tMin.forEach((el) => {
        el.innerText = rem.minutes
    })
    tSec.forEach((el) => {
        el.innerText = rem.seconds
    })
}

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
  
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
}

function imageStack() {
    let forward = document.getElementById('forward')
    let backward = document.getElementById('backward')
    let stackfront = document.getElementById('stack-front')
    let i = 0;
    let images = ['images/IMG_6504.jpg', 'images/IMG_6492.jpg', 'images/IMG_0586.jpg', 'images/IMG_6491.jpg','images/IMG_6591.jpg', 'images/IMG_0520.jpg','images/IMG_6595.jpg'];

    forward.onclick = () => {
        stackfront.src = images[i]
        i++
        if (i == 6) {
            i = 0;
        }
    }
    
    backward.onclick = () => {
        stackfront.src = images[i]
        if (i == 0) {
            i = 5;
        } else {
            i--
        }
        
        
    }

}



function pageEntered() {
    window.scrollTo(0, 0)
    setTimeout(() => {
        let remContainer = document.getElementById('rem-container');
        let headerTimer = document.getElementById('header-timer');
        remContainer.classList.add('hide')
        remContainer.onanimationend = () => {
            remContainer.hidden = true
            headerTimer.hidden = false
        }
    }, 1000)
}



setInterval(() => {
    timer()
}, 1000)
changeHeaderBg()
handleIntro()
imageStack()