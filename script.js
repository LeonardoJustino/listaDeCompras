let buttonAdd = document.getElementById('buttonAdd');
let listContainer = document.getElementById('listContainer');
let input = document.querySelector('input')


buttonAdd.addEventListener('click', (e)=>{
    e.preventDefault()
    let list = document.createElement('li');
    let check = document.createElement('input')
    let lixeira = document.createElement('img')

    lixeira.src = 'img/lixeira.png'
    check.type = 'checkbox'

    check.classList.add('inputCheck')
    lixeira.classList.add('lixeiraStyle')
    list.innerHTML = input.value

    list.prepend(check);
    listContainer.append(list);
    list.append(lixeira)

    styleList()
    input.value = '';

    lixeira.addEventListener('click', ()=>{
        list.remove()
       

        let alertContainer = document.getElementById('alert')
        let alertText = document.createElement('p')
        let alertIcon = document.createElement('img')
        let iconX = document.createElement('img')
        alertIcon.src = 'img/infoCircle.png';
        iconX.src = 'img/delete-small.png';

        iconX.classList.add('iconX')
        alertIcon.classList.add('alertIcon')
        alertText.classList.add('alertText')
        alertContainer.classList.add('alertContainer')
        alertContainer.classList.add('footer')
        
        alertText.innerText = 'O item foi removido da lista'
        alertContainer.prepend(alertIcon)
        alertContainer.append(alertText)
        alertContainer.append(iconX)
        

        
        setTimeout(()=>{
            alertContainer.innerHTML = '';
            alertContainer.classList.remove('alertContainer', 'footer')
        },3000)
      })
    
})
    
let styleList = ()=>{
    listContainer.classList.add('li')
}

