const btn = document.querySelector('.btn');
const input = document.querySelector('.inputPlace');
const result = document.querySelector('.todo-list');


btn.addEventListener('click', (e) => {
    console.log(input.value)

    if (input.value === '') return
    createDeleteElements(input.value)
    input.value = ''
    
})

function createDeleteElements(value){
    console.log(value)

    const btn = document.createElement('button')
    const div = document.createElement('div')
    div.className = 'tasktodo'
    div.textContent = value

    
    btn.className = 'clouse-task-btn'
    btn.textContent = 'close'
    div.appendChild(btn)
    
    btn.addEventListener('click', (e) =>{
        result.removeChild(div)
    })

    result.appendChild(div)

}
