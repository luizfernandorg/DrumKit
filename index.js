const drums = document.querySelectorAll(".drum")
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
        console.log("This is not th right instrument!")
    }
}
const audio = new Audio()
drums[0].addEventListener("click", (e) => {
    playSound('w')
})
drums[1].addEventListener("click", (e) => {
    playSound('a')
})
drums[2].addEventListener("click", (e) => {
    playSound('s')
})
drums[3].addEventListener("click", (e) => {
    playSound('d')
})
drums[4].addEventListener("click", (e) => {
    playSound('j')
})
drums[5].addEventListener("click", (e) => {
    playSound('k')
})
drums[6].addEventListener("click", (e) => {
    playSound('l')
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