const pianoKeys = document.querySelectorAll('.key')
let slider = document.querySelector('#volumeRange')

function playSound(newUrl) {
    var sound = new Audio(newUrl)
    sound.volume = 0.15
    sound.play()
    slider.addEventListener('change', e => {
        sound.volume = e.currentTarget.value
    })
}

pianoKeys.forEach((pianoKey, i) => {
    const number = i === 0 ? '02' : i === 1 ? '04' : i === 2 ? '07' : i === 3 ? '09' : i === 4 ? '11' : i === 5 ? '14' : i === 6 ? '16' 
    : i === 7 ? '18' : i === 8 ? '21' : i === 9 ? '23' : i === 10 ? '01' : i === 11 ? '03' : i === 12 ? '05' : i === 13 ? '06' : i === 14 ? '08' 
    : i === 15 ? '10' : i === 16 ? '12' : i === 17 ? '13' : i === 18 ? '15' : i === 19 ? '17' : i === 20 ? '19' : i === 21 ? '20' : i === 22 ? '22' 
    : i === 23 ? '24' : i = 1
    const newUrl = 'keys/key' + number + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newUrl))
})