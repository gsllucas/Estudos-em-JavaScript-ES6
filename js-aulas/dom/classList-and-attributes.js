const page = document.querySelector('.container')

// CLASSES

page.className // retorna a classe em string
page.classList.add('azul') // adiciona uma classe 
page.classList.add('classe1', 'classe2') // add duas classes
page.classList.remove() // revome uma classe
// page.classList.toggle() // troca se houver ou se não houver
// page.classList.contains() // true ou false
// page.classList.replace() // faz a troca de classes

// ATRIBUTOS

/* page.getAttribute()
page.setAttribute()
page.hasAttribute()
page.removeAttribute() */

console.log(page.getAttribute('id'))

console.log(page.setAttribute('alt', 'Imagem'))

console.log(page)

if (page.hasAttribute('src')) {
    console.log('possui id')
} else {
    console.log('não possui')
}

page.removeAttribute('id')

// console.log(page)

const lastDiv = document.querySelector('#lastDiv')
const buttonElement = document.querySelector('.btn')

buttonElement.onclick = () => {
    lastDiv.classList.remove('blocks')
    lastDiv.classList.add('blocks-blue')
}

// Exercicies

const blocks = document.querySelectorAll('.container div')

blocks.forEach((item) => {

    item.classList.add('ativo')

})

console.log(blocks)




