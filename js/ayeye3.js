let intro = document.getElementById('intro');
let header = document.getElementById('header-main');
let tDays = document.querySelectorAll('.days');
let tHours = document.querySelectorAll('.hours');
let tMin = document.querySelectorAll('.mins');
let tSec = document.querySelectorAll('.secs');
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


function timer() {
    let rem = getTimeRemaining('dec 18, 2022 4:00:00');

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

// handleIntro()