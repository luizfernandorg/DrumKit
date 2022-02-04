const drums = document.querySelectorAll(".drum")
const audio = new Audio()

function playSound(instrument){
    if(instrument === 'w'){
        audio.src = 'sounds\\tom-1.mp3'
        audio.play()
        buttonAnimation(instrument)
    } else if(instrument === 'a'){
        audio.src = 'sounds\\tom-2.mp3'
        audio.play()
        buttonAnimation(instrument)
    } else if(instrument === 's'){
        audio.src = 'sounds\\tom-3.mp3'
        audio.play()
        buttonAnimation(instrument)
    } else if(instrument === 'd'){
        audio.src = 'sounds\\tom-4.mp3'
        audio.play()
        buttonAnimation(instrument)
    } else if(instrument === 'j'){
        audio.src = 'sounds\\snare.mp3'
        audio.play()
        buttonAnimation(instrument)
    } else if(instrument === 'k'){
        audio.src = 'sounds\\crash.mp3'
        audio.play()
        buttonAnimation(instrument)
    } else if(instrument === 'l'){
        audio.src = 'sounds\\kick-bass.mp3'
        audio.play()
        buttonAnimation(instrument)
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