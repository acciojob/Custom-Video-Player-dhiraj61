/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const play = document.getElementById('play');
const pause = document.getElementById('pause');


pause.style.display = "none";

toggle.addEventListener('click',()=>{
	if(video.paused || video.ended){
		play.style.display = "none";
		pause.style.display = "block";
		video.play();
	}else{
		play.style.display = "block";
		pause.style.display = "none";
		video.pause();
	}
})

video.addEventListener("timeupdate",()=>{
	progressBar.style.flexBasis = video.currentTime + "%";
	progressBar.style.width = video.currentTime + "%";
})

ranges.forEach(element =>{
	element.addEventListener('input',()=>{
		if(element.name == 'volume'){
			video.volume = element.value;
		}else{
			video.playbackRate = element.value;
		}
	})
})

skipButtons.forEach(element =>{
	element.addEventListener('click',()=>{
		video.currentTime += parseFloat(element.dataset.skip);
	})
})