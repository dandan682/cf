const title = document.getElementById('title')
title.innerHTML = 'Cursos'

const descripcion = document.getElementById('description')
description.innerHTML = 'Lista de cursos'

const items = document.querySelectorAll('li:nth-child(even')
for (let i = 0; i < items.length; i++) {
    let element = items[i]
    element.style.background = '#c5c0f7'
}

const element = document.querySelector('div.row > ul.list-group > li')
const list = document.querySelector('ul')

console.log(list.childElementCount)
console.log(list.children)
for (let i = 0; i < list.children.length; i++) {
    console.log(list.children[i])
}
console.log(list.firstElementChild.innerHTML)
console.log(list.lastElementChild);

