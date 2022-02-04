const drums = document.querySelectorAll(".drum")
const audio = new Audio()

function playSound(instrument){
    if(instrument === 'w'){
        audio.src = 'sounds\\tom-1.mp3'
        audio.play()
    } else if(instrument === 'a'){
        audio.src = 'sounds\\tom-2.mp3'
        audio.play()
    } else if(instrument === 's'){
        audio.src = 'sounds\\tom-3.mp3'
        audio.play()
    } else if(instrument === 'd'){
        audio.src = 'sounds\\tom-4.mp3'
        audio.play()
    } else if(instrument === 'j'){
        audio.src = 'sounds\\snare.mp3'
        audio.play()
    } else if(instrument === 'k'){
        audio.src = 'sounds\\crash.mp3'
        audio.play()
    } else if(instrument === 'l'){
        audio.src = 'sounds\\kick-bass.mp3'
        audio.play()
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
    switch(e.key){
        case 'w':
            playSound('w')
            break
        case 'a':
            playSound('a')
            break
        case 's':
            playSound('s')
            break
        case 'd':
            playSound('d')
            break
        case 'j':
            playSound('j')
            break
        case 'k':
            playSound('k')
            break
        case 'l':
            playSound('l')
            break
        default:
            console.log("Wrong key")
    }
})