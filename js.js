
const timerWrapper = document.querySelector('.timer');
const timer = document.querySelector('.timer span');
const timerBar = document.querySelector('.timer div');
var currentTime=document.getElementById('currentTime');
var totalTime=document.getElementById('totalTime');
var myVideo = document.getElementById("video1"); 
var myslider=document.getElementById('myRange');
var myhdbutton=document.getElementById('hd');
var myPTPbutton=document.getElementById('PTP');
var myloopbutton=document.getElementById('loop');
var mynoloopbutton=document.getElementById('noloop');
var myccbutton=document.getElementById('cc');
var myplaybutton=document.getElementById('play');
var container=document.getElementById('container');
var size=document.getElementById('size');
var resize=document.getElementById('resize');
var sender=document.getElementById('sender');
var receiver=document.getElementById('receiver');
var btnbtnwarning=document.getElementById('btnbtn');
var nosubtitle=document.getElementById('turnoff');
var english=document.getElementById('english');
var chinese=document.getElementById('chinese');
var time=document.getElementById('time');
var audio=document.getElementById('volume-button');
//document.getElementById('tracks').hidden=true;
const timeElapsed = document.getElementById('time-elapsed');
const duration = document.getElementById('duration');

// formatTime takes a time length in seconds and returns the time in
// minutes and seconds
function formatTime(timeInSeconds) {
const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

return {
    minutes: result.substr(3, 2),
    seconds: result.substr(6, 2),
};
};

// initializeVideo sets the video duration, and maximum value of the
// progressBar
function initializeVideo() {
const videoDuration = Math.round(myVideo.duration);
const time = formatTime(videoDuration);
duration.innerText = `${time.minutes}:${time.seconds}`;
duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}
myVideo.addEventListener('loadedmetadata', initializeVideo);
// updateTimeElapsed indicates how far through the video
// the current playback is
function updateTimeElapsed() {
const time = formatTime(Math.round(myVideo.currentTime));
timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}
myVideo.addEventListener('timeupdate', updateTimeElapsed);
mynoloopbutton.hidden=true;
btnbtnwarning.hidden=true;
nosubtitle.hidden=true;
english.hidden=true;
chinese.hidden=true;
sender.hidden=true;
receiver.hidden=true;
mynoloopbutton.hidden=true;
//myVideo.volume=slideraudio.value;
//slideraudio.value=myVideo.volume;


if(size.hidden==false){
resize.hidden=true;
}else{
resize.hidden=false;
}

// Assign an ontimeupdate event to the <video> element, and execute a function if the current playback position has changed
myVideo.ontimeupdate = function() {myFunction()};

function myFunction() {
myslider.value=myVideo.currentTime;
myslider.max=myVideo.duration;
// Display the current position of the video in a <p> element with id="demo"
currentTime.innerHTML=myVideo.currentTime;
totalTime.innerHTML=myVideo.duration;
}
myVideo.addEventListener('timeupdate', setTime);
function setTime() {
let minutes = Math.floor(myVideo.currentTime / 60);
let seconds = Math.floor(myVideo.currentTime - minutes * 60);
let minuteValue;
let secondValue;

if (minutes < 10) {
    minuteValue = '0' + minutes;
} else {
    minuteValue = minutes;
}

if (seconds < 10) {
    secondValue = '0' + seconds;
} else {
    secondValue = seconds;
}

let mediaTime = minuteValue + ':' + secondValue;
timer.textContent = mediaTime;

let barLength = timerWrapper.clientWidth * (myVideo.currentTime/myVideo.duration);
timerBar.style.width = barLength + 'px';
}

myslider.oninput = function() {
myVideo.currentTime = this.value;
}
function playPause() { 
    if (myVideo.paused){
        myVideo.play(); 
        alert('video play');
        myplaybutton.style.backgroundImage='url("iconfinder_icon-ios7-pause_211791.png")';
        }
else {
    myVideo.pause();
    myplaybutton.style.backgroundImage='url("Basic_Elements_(138).png")';

    alert('video puase');
    } 
};


function loop() { 
    myVideo.loop=true;
    alert('video loop');

    mynoloopbutton.hidden=false;
} 
function noloop() { 
    myVideo.loop=false;
    alert('video noloop');
    myloopbutton.style.backgroundColor = "transparent";
    mynoloopbutton.hidden=true;
} 
function HD() {
hd1()
myhdbutton.style.opacity="1";
alert('video resolation HD')
}
function CC(){
english.hidden=false;
chinese.hidden=false;
nosubtitle.hidden=false;
setTimeout (function(){
    english.hidden=true;
    chinese.hidden=true;
    nosubtitle.hidden=true;
},9000);
myccbutton.style.opacity="1";
}

function openFullscreen() {
if (container.requestFullscreen) {
    alert('video full screen');
    container.requestFullscreen();
    resize.hidden=false;
    size.hidden=true;
    time.style.fontSize='xx-large';
    myplaybutton.style.top="92%";
    myslider.style.top="92%";
    myloopbutton.style.top="92%";
    mynoloopbutton.style.top="92%";
    resize.style.top="92%";
   // resizer.style.top="92%";
    audio.style.top="92%";
    time.style.top="92%";
    time.style.top="95%"; 
    myloopbutton.style.left="85%";
    mynoloopbutton.style.left="85%";
    resize.style.top="92%";
    //resizer.style.top="92%";
    audio.style.top="92%";
    resize.style.left="94.5%";
    audio.style.left="90%";
    myslider.style.left="50%";
    time.style.top="92%";
    time.style.left="16%"; 
    myPTPbutton.style.top="10.3%";
    myccbutton.style.top="10.8%";
    myhdbutton.style.top="10.4%";
    myPTPbutton.style.left="84%";
    myccbutton.style.left="89%";
    myhdbutton.style.left="94%";
    myplaybutton.style.left="6%";

    resize.style.width="2.5%";
    resize.style.height="3%";

    audio.style.width="2.5%";
    audio.style.height="3%";

    myloopbutton.style.width="2.5%";
    myloopbutton.style.height="3%";
    mynoloopbutton.style.width="2.5%";
    mynoloopbutton.style.height="3%";

    myhdbutton.style.width="3%";
    myhdbutton.style.height="4%";

    myccbutton.style.width="3%";
    myccbutton.style.height="4%";

    myPTPbutton.style.width="3%";
    myPTPbutton.style.height="4%";

} else if (container.webkitRequestFullscreen) {
    alert('video full screen'); /* Safari */
    container.webkitRequestFullscreen();
    resize.hidden=false;
    size.hidden=true;
    time.style.fontSize='x-large';
    myplaybutton.style.top="92%";
    myslider.style.top="91.5%";
    myloopbutton.style.top="92%";
    mynoloopbutton.style.top="92%";
    myloopbutton.style.left="85%";
    mynoloopbutton.style.left="85%";
    resize.style.top="92%";
    //resizer.style.top="92%";
    audio.style.top="92%";
    resize.style.left="94.5%";
    audio.style.left="90%";
    myslider.style.left="50%";
    time.style.top="92%";
    time.style.left="16%"; 
    myPTPbutton.style.top="10.3%";
    myccbutton.style.top="10.8%";
    myhdbutton.style.top="10.4%";
    myPTPbutton.style.left="84%";
    myccbutton.style.left="89%";
    myhdbutton.style.left="94%";
    myplaybutton.style.left="6%";

    resize.style.width="2.5%";
    resize.style.height="3%";

    audio.style.width="2.5%";
    audio.style.height="3%";

    myloopbutton.style.width="2.5%";
    myloopbutton.style.height="3%";
    mynoloopbutton.style.width="2.5%";
    mynoloopbutton.style.height="3%";

    myhdbutton.style.width="3%";
    myhdbutton.style.height="4%";

    myccbutton.style.width="3%";
    myccbutton.style.height="4%";

    myPTPbutton.style.width="3%";
    myPTPbutton.style.height="4%";
    //size.style.width="1%";
} else if (container.msRequestFullscreen) {
    alert('video full screen'); /* IE11 */
    container.msRequestFullscreen();
    resize.hidden=false;
    size.hidden=true;
    time.style.fontSize='xx-large';
    myplaybutton.style.top="92%";
    myslider.style.top="92%";
    myloopbutton.style.top="92%";
    mynoloopbutton.style.top="92%";
    resize.style.top="92%";
    resizer.style.top="92%";
    audio.style.top="92%";
    time.style.top="92%"; 
    myloopbutton.style.left="85%";
    mynoloopbutton.style.left="85%";
    //resize.style.top="92%";
    //resizer.style.top="92%";
    audio.style.top="92%";
    resize.style.left="94.5%";
    audio.style.left="90%";
    myslider.style.left="50%";
    time.style.top="92%";
    time.style.left="16%"; 
    myPTPbutton.style.top="10.3%";
    myccbutton.style.top="10.8%";
    myhdbutton.style.top="10.4%";
    myPTPbutton.style.left="84%";
    myccbutton.style.left="89%";
    myhdbutton.style.left="94%";
    myplaybutton.style.left="6%";

    resize.style.width="2.5%";
    resize.style.height="3%";

    audio.style.width="2.5%";
    audio.style.height="3%";

    myloopbutton.style.width="2.5%";
    myloopbutton.style.height="3%";
    mynoloopbutton.style.width="2.5%";
    mynoloopbutton.style.height="3%";

    myhdbutton.style.width="3%";
    myhdbutton.style.height="4%";

    myccbutton.style.width="3%";
    myccbutton.style.height="4%";

    myPTPbutton.style.width="3%";
    myPTPbutton.style.height="4%";
}

}
function closeFullscreen() {
if (document.exitFullscreen) {
    alert('video close full screen');
    document.exitFullscreen();
    resize.hidden=true;
    size.hidden=false;
    time.style.fontSize='large';
    myplaybutton.style.top="87%";
    myslider.style.top="87%";
    myloopbutton.style.top="87%";
    mynoloopbutton.style.top="87%";
    resize.style.top="87%";
    //resizer.style.top="87%";
    audio.style.top="87%";
    time.style.top="87%";
    myloopbutton.style.left="77%";
    mynoloopbutton.style.left="77%";
    resize.style.top="92%";
    //resizer.style.top="92%";
    myslider.style.left="45%";
    time.style.left="13%"; 
    myPTPbutton.style.top="11%";
    myccbutton.style.top="11.7%";
    myhdbutton.style.top=" 11.2%";
    myPTPbutton.style.left="76.5%";
    myccbutton.style.left="84.3%";
    myhdbutton.style.left="92.5%";
    myplaybutton.style.left="6%";

    resize.style.width="2.5%";
    resize.style.height="3%";

    audio.style.width="3.1%";
    audio.style.height="4.3%";

    myloopbutton.style.width="3%";
    myloopbutton.style.height="4.5%";
    mynoloopbutton.style.width="3%";
    mynoloopbutton.style.height="4.5%";

    myhdbutton.style.width="4%";
    myhdbutton.style.height="5.5%";
    audio.style.left="85%";
    myccbutton.style.width="4%";
    myccbutton.style.height="6.4%";

    myPTPbutton.style.width="4.2%";
    myPTPbutton.style.height="5%";
     
} else if (document.webkitExitFullscreen) {
    alert('video close full screen'); /* Safari */
    document.webkitExitFullscreen();
    resize.hidden=true;
    size.hidden=false;
    time.style.fontSize='large';
    myplaybutton.style.top="87%";
    myslider.style.top="87%";
    myloopbutton.style.top="87%";
    mynoloopbutton.style.top="87%";
    resize.style.top="87%";
    //resizer.style.top="87%";
    audio.style.top="87%";
    time.style.top="87%";
    myloopbutton.style.left="77%";
    mynoloopbutton.style.left="77%";
    resize.style.top="92%";
    //resizer.style.top="92%";
    myslider.style.left="45%";
    time.style.left="13%"; 
    myPTPbutton.style.top="11%";
    myccbutton.style.top="11.7%";
    myhdbutton.style.top=" 11.2%";
    myPTPbutton.style.left="76.5%";
    myccbutton.style.left="84.3%";
    myhdbutton.style.left="92.5%";
    myplaybutton.style.left="6%";
    audio.style.left="85%";
    resize.style.width="2.5%";
    resize.style.height="3%";

    audio.style.width="3.1%";
    audio.style.height="4.3%";

    myloopbutton.style.width="3%";
    myloopbutton.style.height="4.5%";
    mynoloopbutton.style.width="3%";
    mynoloopbutton.style.height="4.5%";

    myhdbutton.style.width="4%";
    myhdbutton.style.height="5.5%";

    myccbutton.style.width="4%";
    myccbutton.style.height="6.4%";

    myPTPbutton.style.width="4.2%";
    myPTPbutton.style.height="5%";

} else if (document.msExitFullscreen) {
    alert('video close  full screen'); /* IE11 */
    document.msExitFullscreen();
    resize.hidden=true;
    size.hidden=false;
    time.style.fontSize='large';
    myplaybutton.style.top="87%";
    myslider.style.top="87%";
    myloopbutton.style.top="87%";
    mynoloopbutton.style.top="87%";
    resize.style.top="87%";
    //resizer.style.top="87%";
    audio.style.top="87%";
    audio.style.left="85%";
    time.style.top="87%";
    myloopbutton.style.left="77%";
    mynoloopbutton.style.left="77%";
    resize.style.top="92%";
    //resizer.style.top="92%";
    myslider.style.left="45%";
    time.style.left="13%"; 
    myPTPbutton.style.top="11%";
    myccbutton.style.top="11.7%";
    myhdbutton.style.top=" 11.2%";
    myPTPbutton.style.left="76.5%";
    myccbutton.style.left="84.3%";
    myhdbutton.style.left="92.5%";
    myplaybutton.style.left="6%";

    resize.style.width="2.5%";
    resize.style.height="3%";

    audio.style.width="3.1%";
    audio.style.height="4.3%";

    myloopbutton.style.width="3%";
    myloopbutton.style.height="4.5%";
    mynoloopbutton.style.width="3%";
    mynoloopbutton.style.height="4.5%";

    myhdbutton.style.width="4%";
    myhdbutton.style.height="5.5%";

    myccbutton.style.width="4%";
    myccbutton.style.height="6.4%";

    myPTPbutton.style.width="4.2%";
    myPTPbutton.style.height="5%";
}
}
function PTP(){
sender.hidden=false;
receiver.hidden=false;
setTimeout (function(){
    sender.hidden=true;
receiver.hidden=true;
},5000);
}
var videoElement = document.querySelector("video");
var textTracks = videoElement.textTracks; // one for each track element
var textTrack = textTracks[0]; // corresponds to the first track element
var kind = textTrack.kind // e.g. "subtitles"
var mode = textTrack.mode


function nosubtitles(){
video.addEventListener('timeupdate',function(){
    for (var i = 0; i < video.textTracks.length; i++) {
        video.textTracks[i].mode = 'hidden';
        
    }
},false);
english.hidden=true;
        chinese.hidden=true;
        nosubtitle.hidden=true;
        myccbutton.style.opacity="0.5";
}
function en(){
myVideo.addEventListener('timeupdate',function(){
    myVideo.textTracks[0].mode = 'showing';
    
    
},false);
english.hidden=true;
    chinese.hidden=true;
    nosubtitle.hidden=true;
}



var video=document.getElementById('video1');
const volumeButton = document.getElementById('volume-button');
const volumeIcons = document.querySelectorAll('.volume-button use');
const volumeMute = document.querySelector('use[href="#volume-mute"]');
const volumeLow = document.querySelector('use[href="#volume-low"]');
const volumeHigh = document.querySelector('use[href="#volume-high"]');
const volume = document.getElementById('volume');

// updateVolume updates the video's volume
// and disables the muted state if active
function updateVolume() {
if (video.muted) {
    video.muted = false;
}

video.volume = volume.value;
}

volume.addEventListener('input', updateVolume);

// updateVolumeIcon updates the volume icon so that it correctly reflects
// the volume of the video
function updateVolumeIcon() {
volumeIcons.forEach(icon => {
    icon.classList.add('hidden');
});

volumeButton.setAttribute('data-title', 'Mute (m)')

if (video.muted || video.volume === 0) {
    volumeMute.classList.remove('hidden');
    volumeButton.setAttribute('data-title', 'Unmute (m)')
} else if (video.volume > 0 && video.volume <= 0.5) {
    volumeLow.classList.remove('hidden');
} else {
    volumeHigh.classList.remove('hidden');
}
}
video.addEventListener('volumechange', updateVolumeIcon);
// toggleMute mutes or unmutes the video when executed
// When the video is unmuted, the volume is returned to the value
// it was set to before the video was muted
function toggleMute() {
video.muted = !video.muted;

if (video.muted) {
    audio.style.backgroundImage='url("noaudio.png")';
    volume.setAttribute('data-volume', volume.value);
    alert('video mute');
    volume.value = 0;
} else {
    volume.value = volume.dataset.volume;
    audio.style.backgroundImage='url("0e0f87ea9efc2a148bec1eae7e7e9265 (1).png")';
    alert('video no mute');
}
}

volumeButton.addEventListener('click', toggleMute);


// hideControls hides the video controls when not in use
// if the video is paused, the controls must remain visible
function hideControls() {
if (video.paused) {
    return;
}

videoControls.classList.add('hide');
}

// showControls displays the video controls
function showControls() {
    videoControls.classList.remove('hide');
}
video.addEventListener('mouseenter', showControls);
video.addEventListener('mouseleave', hideControls);
videoControls.addEventListener('mouseenter', showControls);
videoControls.addEventListener('mouseleave', hideControls);
// keyboardShortcuts executes the relevant functions for
// each supported shortcut key
function keyboardShortcuts(event) {
const { key } = event;
switch(key) {
    case 'k':
    togglePlay();
    animatePlayback();
    if (video.paused) {
        showControls();
    } else {
        setTimeout(() => {
        hideControls();
        }, 2000);
    }
    break;
    case 'm':
    toggleMute();
    break;
    case 'f':
    toggleFullScreen();
    break;
    case 'p':
    togglePip();
    break;
}
}
document.addEventListener('keyup', keyboardShortcuts);




var getVideo = document.getElementById("video1");
var getSource = document.getElementById("sourceVideo");
function changeSource(vid) {
    var geturl = vid.id;
    getSource .setAttribute("src", geturl);
    getVideo .load()
    getVideo .play();
    getVideo .volume = 0.5;
}
function hd1(){
    myVideo.src="yt1s.com - COVID19 Vaccines Interview with an Expert_1080p.mp4";
    myVideo.load();
    myVideo.play();
}
// function videoLow(){
//     myVideo.src="yt1s.com - Dr Andrew Badley discusses new COVID19 virus variant_v240P.mp4";
//     myVideo.load();
//     myVideo.play();
// }
