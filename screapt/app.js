// const clockBox = document.querySelector(".clock-box")


// let now = new Date();
// let hour = now.getHours();
// let minute = new.getMinutes();
// let second = new.getSecond();
// clockBox.innerHTML = hour + ":" + minute + ":" +second

// function currentTime() {
//   let date = new Date(); 
//   let hh = date.getHours();
//   let mm = date.getMinutes();
//   let ss = date.getSeconds();
//   let session = "AM";

//   if(hh === 0){
//       hh = 12;
//   }
//   if(hh > 12){
//       hh = hh - 12;
//       session = "PM";
//    }

//    hh = (hh < 10) ? "0" + hh : hh;
//    mm = (mm < 10) ? "0" + mm : mm;
//    ss = (ss < 10) ? "0" + ss : ss;
    
//    let time = hh + ":" + mm + ":" + ss + " " + session;

//   document.getElementById("clock").innerText = time; 
//   let t = setTimeout(function(){ currentTime() }, 1000);
// }

// currentTime();

// function startTime() {
//   const today = new Date();
//   let h = today.getHours();
//   let m = today.getMinutes();
//   let s = today.getSeconds();
//   m = checkTime(m);
//   s = checkTime(s);
//   document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
//   setTimeout(startTime, 1000);
// }

// function checkTime(i) {
//   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//   return i;
// }
// const clockBox = document.querySelector(".clock-box");

// var audio = new Audio("dom.mp3");
// let futureTime = new Date("October 21, 2022 16:32:15").getTime();
// audio.setAttribute('crossorigin', 'anonymous');

// start.addEventListener('click', () => {
//     let h = setInterval(() => {
  
//       let now = new Date().getTime();
//       let difference = futureTime - now;
//       var kun = Math.floor(difference / (1000 * 60 * 60 * 24));
//       var soat = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       var minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//       var sekund = Math.floor((difference % (1000 * 60)) / 1000);
    
//       clockBox.innerHTML = `${kun} days ${soat} hours ${minute} minutes ${sekund}`;
    
//       if(difference <= 0){
//         clearInterval(h);
//         clockBox.innerHTML = "You are late!"
//         audio.play("dom.mp3")
//         // when the sound has been loaded, execute your code
//       }
//     }, 1000);
// })



setInterval(showTime, 1);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    // let ms = time.getMilliseconds();
 
 
    if (hour > 24) {
        hour -= 24;
        
    }
    if (hour == 0) {
        hr = 24;
       
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    // ms = ms < 10 ? "0" + ms : ms ;
 
    let currentTime = hour + ":"+ min + ":" + sec ;
    // ":" + ms
 
    document.getElementById("clock")
            .innerHTML = currentTime;
}

