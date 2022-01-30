const drums = document.querySelectorAll(".drum")
const audio = new Audio()
drums[0].addEventListener("click", (e) => {
    if(drums[0].classList.contains('w')){
        audio.src = 'sounds\\tom-1.mp3'
        audio.play()
    }
})
drums[1].addEventListener("click", (e) => {
    if(drums[1].classList.contains('a')){
        audio.src = 'sounds\\tom-2.mp3'
        audio.play()
    }
})
drums[2].addEventListener("click", (e) => {
    if(drums[2].classList.contains('s')){
        audio.src = 'sounds\\tom-3.mp3'
        audio.play()
    }
})
drums[3].addEventListener("click", (e) => {
    if(drums[3].classList.contains('d')){
        audio.src = 'sounds\\tom-4.mp3'
        audio.play()
    }
})
drums[4].addEventListener("click", (e) => {
    if(drums[4].classList.contains('j')){
        audio.src = 'sounds\\snare.mp3'
        audio.play()
    }
})
drums[5].addEventListener("click", (e) => {
    if(drums[5].classList.contains('k')){
        audio.src = 'sounds\\crash.mp3'
        audio.play()
    }
})
drums[6].addEventListener("click", (e) => {
    if(drums[6].classList.contains('l')){
        audio.src = 'sounds\\kick-bass.mp3'
        audio.play()
    }
})

document.addEventListener('keydown', (e) => {
    switch(e.key){
        case 'w':
            audio.src = 'sounds\\tom-1.mp3'
            audio.play()
            break
        case 'a':
            audio.src = 'sounds\\tom-2.mp3'
            audio.play()
            break
        case 's':
            audio.src = 'sounds\\tom-3.mp3'
            audio.play()
            break
        case 'd':
            audio.src = 'sounds\\tom-4.mp3'
            audio.play()
            break
        case 'j':
            audio.src = 'sounds\\snare.mp3'
            audio.play()
            break
        case 'k':
            audio.src = 'sounds\\crash.mp3'
            audio.play()
            break
        case 'l':
            audio.src = 'sounds\\kick-bass.mp3'
            audio.play()
            break
        default:
            console.log("Wrong key")
    }
})