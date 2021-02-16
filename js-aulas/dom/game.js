const btnShuffle = document.querySelector('.btnShuffle')// 
const btnLight = document.querySelector('.btnLight')

const menuSelect = document.querySelectorAll('.menuSelect')

// Activates
menuSelect.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('border')
    })
})

// Gera cores aleatórias nos blocos

const blocks = document.querySelectorAll('.flex div')

var randomNumbers = () => Math.floor(Math.random() * 4)

var colors = [
    'blue',
    'red',
    'green',
    'yellow'
]

btnShuffle.addEventListener('click', () => {
    blocks.forEach((item) => {
        item.classList.remove(colors[randomNumbers()])
        item.classList.add(colors[randomNumbers()])
    })
})

// Restarta o jogo

const btnRestart = document.querySelector('.btnRestart')

btnRestart.addEventListener('click', () => {
    blocks.forEach((item) => {
        item.classList.remove('blue', 'red', 'yellow', 'green')
    })

    menuSelect.forEach((item) => {
        item.classList.remove('border')
    })
})

// Desativa os blocos com a cor selecionada no menu de cores

btnLight.addEventListener('click', () => {

    

})

















