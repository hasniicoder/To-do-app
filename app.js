let button = document.querySelector('#butn')
let input = document.querySelector('input')
let ul = document.querySelector('ul')

button.addEventListener('click', function() {
    let li = document.createElement('li')
    li.textContent = input.value
let delbtn = document.createElement('button')
delbtn.textContent = 'delete'
delbtn.classList.add('btn')
li.appendChild(delbtn)
    ul.appendChild(li)

    delbtn.addEventListener('click',function() {
        let par = delbtn.parentElement
        par.remove()
        
    })
    input.value = '';
})