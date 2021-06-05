const title = document.getElementById('title')
title.innerHTML = 'Cursos'

const descripcion = document.getElementById('description')
description.innerHTML = 'Lista de cursos'

const items = document.querySelectorAll('li:nth-child(even')
for (let i = 0; i < items.length; i++) {
    let element = items[i]
    element.style.background = '#f2f2f2'
}

const element = document.querySelector('div.row > ul.list-group > li')
