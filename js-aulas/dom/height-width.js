 //Height and Width

const div = document.querySelector('.container')

div.clientHeight // height + padding
div.offsetHeight // height + padding + border
div.scrollHeight // height total, mesmo dentro do scroll do elemento

div.clientWidth // width + padding
div.offsetWidth // width + padding + border
div.scrollWidth // width total, mesmo dentro do scroll do elemento

div.offsetTop // distância do elemento até o topo da tela
div.offsetLeft // distância do elemento até o lado esquerdo da tela

const bounding = div.getBoundingClientRect()

console.log(div.clientWidth)

