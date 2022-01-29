document.addEventListener('keydown', (e) => {
    let audio = new Audio()
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