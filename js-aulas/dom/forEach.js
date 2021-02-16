const imgs = document.querySelectorAll('.paragrafos p')

// FOR EACH
// 1 - Retorna a tag e o conteúdo no primeiro parâmetro do callback
// 2 - O segundo parâmetro retorna o index do array 
// 3 - Retorna o próprio array (NodeList)

imgs.forEach((item, index, array) => {
    console.log(item, index, array)
})

// Transformar itens num array
// Array.from(item que precisar ser transformado)

const paragraph = document.getElementsByClassName('paragraph')
const paragraphArray = Array.from(paragraph)

paragraphArray.forEach((item) => {
    console.log()
})


console.log(paragraph) // Retorna um HTMLCollection

paragraph.forEach(() => {
    console.log('Teste')
})