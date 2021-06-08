const title = document.getElementById('title')
title.innerHTML = 'Cursos'

const descripcion = document.getElementById('description')
// description.innerHTML = 'Lista de cursos'

const items = document.querySelectorAll('li:nth-child(even')
for (let i = 0; i < items.length; i++) {
    let element = items[i]
    element.style.background = '#c5c0f7'
}

// const element = document.querySelector('div.row > ul.list-group > li')
// console.log(element.parentElement)
// console.log(element.nextElementSibling)

// const last_element = document.getElementById('last-course')
// console.log(last_element.previousElementSibling)

const button = document.querySelector(".btn.btn-primary")

button.addEventListener('click', function(e){
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
    setTimeout(function(p1, p2, p3) {
        console.log(p1)
        console.log(p2)
        console.log(p3)
    }, 3000, 'arg1', 'arg2', 'arg3')
})