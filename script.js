const teclas = document.querySelectorAll('.tecla')

teclas.forEach(tecla => {
    tecla.addEventListener('click', () => playNote(tecla))
})

function playNote(tecla) {
    const noteAudio = document.getElementById(tecla.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    tecla.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        tecla.classList.remove('active')
    }) 
}



const A440 = document.getElementById('A440') 
const A392 = document.getElementById('A392') 
const harp_440 = document.getElementById('harp_440')
const harp_392 = document.getElementById('harp_392')

A440.addEventListener('click', () => {
    harp_392.classList.remove('show')
    harp_440.classList.add('show')
})

A392.addEventListener('click', () => {
    harp_440.classList.remove('show')
    harp_392.classList.add('show')
})