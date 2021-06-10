const title = document.getElementById('title')
title.innerHTML = 'Cursos'

const descripcion = document.getElementById('description')
// description.innerHTML = 'Lista de cursos'

const items = document.querySelectorAll('li:nth-child(even')
for (let i = 0; i < items.length; i++) {
    let element = items[i]
    element.style.background = '#c5c0f7'
}

// const input = document.getElementById('input')

const form = document.getElementById('course-form')

form.addEventListener('submit', function(e) { 
    e.preventDefault() 
    let title = document.getElementById('title-form').value
    let description = document.getElementById('description-form').value
    console.log('Title:', title)
    console.log('Descripcion:', description)
})

const checkbox = document.getElementById('checkbox')
let title_form = document.getElementById('title-form')

title_form.addEventListener('change', function() {
    console.log('Cambio de valor')
})

// input.addEventListener('keydown', function(e) {
//     console.log('Tecla presionada:', e.key, 'con un codigo: ', e.keyCode)
// })

// const element = document.querySelector('div.row > ul.list-group > li')
// console.log(element.parentElement)
// console.log(element.nextElementSibling)

// const last_element = document.getElementById('last-course')
// console.log(last_element.previousElementSibling)

// const button = document.querySelector(".btn.btn-primary")

// button.addEventListener('click', function(e){
    // console.log("Hola Mundo!")
    // console.log(e)
    // if (title.style.display !== 'none') {
    //     title.style.display = "none"
    //     description.style.display = "none"
    //     e.target.textContent = 'Mostrar'
    // } else { 
    //     title.style.display = "block"
    //     description.style.display = "block"   
    //     e.target.textContent = "Ocultar"
    // }
//     setTimeout(function(p1, p2, p3) {
//         console.log(p1)
//         console.log(p2)
//         console.log(p3)
//     }, 3000, 'arg1', 'arg2', 'arg3')
// })

const element = document.querySelector('li')
const list = document.querySelector('ul')
const div_row = document.querySelector('.row')
const div_container = document.querySelector('.container')
const body = document.querySelector('body')

// element.addEventListener('click', show_messages) 
// list.addEventListener('click', show_messages) 
// div_row.addEventListener('click', show_messages) 
// div_container.addEventListener('click', show_messages) 
// body.addEventListener('click', show_messages) 

// e.stopPropagation()   

for(let element of document.querySelectorAll('*')) {
    element.addEventListener('click', show_messages)
}

function show_messages(e) {
    console.log('Elemento actual (this):', this.tagName)
    console.log('Elemento que disparo el evento (e.target):', e.target.tagName)
    console.log("\n")
}

// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Hola Mundo!')
// })