const drums = document.querySelectorAll(".drum")
const audio = new Audio()
const setInstrumment = (instrument, sound) => {
		audio.src = sound
		audio.play()
		buttonAnimation(instrument)
	}
	
	function playSound(instrument){
		if(instrument === 'w'){
			setInstrumment(instrument, 'sounds\\tom-1.mp3')
		} else if(instrument === 'a'){
			setInstrumment(instrument, 'sounds\\tom-2.mp3')
		} else if(instrument === 's'){
			setInstrumment(instrument, 'sounds\\tom-3.mp3')
		} else if(instrument === 'd'){
			setInstrumment(instrument, 'sounds\\tom-4.mp3')
		} else if(instrument === 'j'){
			setInstrumment(instrument, 'sounds\\snare.mp3')
		} else if(instrument === 'k'){
			setInstrumment(instrument, 'sounds\\crash.mp3')
		} else if(instrument === 'l'){
			setInstrumment(instrument, 'sounds\\kick-bass.mp3')
		} else {
			console.log("This is not the right instrument!")
		}
	}

drums.forEach((v,index) => {
    v.addEventListener("click", (e) => {
        playSound(v.className[0])
    })
})

document.addEventListener('keydown', (e) => {
    playSound(e.key);
})
function buttonAnimation(key){
    console.log(key)
    document.querySelector("."+key).classList.add("pressed")
    
    setTimeout(() => {
        document.querySelector("."+key).classList.remove("pressed")
    },100)
    
}
