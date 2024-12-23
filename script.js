let buttonAdd = document.getElementById('buttonAdd');
let listContainer = document.getElementById('listContainer');
let input = document.querySelector('input');

window.addEventListener('load', ()=>{ // criando um evento de quando a página carregar 
    let savedItems = JSON.parse(localStorage.getItem('listItems')); //JSON.parse(...): Converte esse texto em um array de objetos (cada objeto tem text e checked).
    savedItems.forEach(item =>{
        let list = document.createElement('li');
        let check = document.createElement('input');
        let lixeira = document.createElement('img');


        lixeira.src = 'img/lixeira.png';
        check.type = 'checkbox';
        check.classList.add('inputCheck');
        lixeira.classList.add('lixeiraStyle');
        check.checked = item.checked;// Define se o checkbox está marcado
        list.innerHTML = item.text;
        
        list.prepend(check);
        listContainer.append(list);
        list.append(lixeira);

        lixeira.addEventListener('click', ()=>{
            list.remove()
            saveToLocalStorage();
        });

        check.addEventListener('change', saveToLocalStorage());
    });
});

// 2. Atualizar o localStorage ao adicionar ou remover itens
function saveToLocalStorage(){
    let items = []; // vai armazenar os itens
    document.querySelectorAll('#listContainer li').forEach(item =>{
        let text = item.childNodes[1].textContent.trim();
        let checked = item.querySelector('input[type="checkbox"]').checked;
        items.push({text, checked});

    });
    localStorage.setItem('listItems', JSON.stringify(items)); // Salva no localStorage
}

// 3. Modificar o evento de clique do botão para salvar os itens
buttonAdd.addEventListener('click', (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
        alert("Por favor, insira um item válido.");
    } else {
        let list = document.createElement('li');
        let check = document.createElement('input');
        let lixeira = document.createElement('img');

        lixeira.src = 'img/lixeira.png';
        check.type = 'checkbox';
        check.classList.add('inputCheck');
        lixeira.classList.add('lixeiraStyle');
        list.innerHTML = input.value;

        list.prepend(check);
        listContainer.append(list);
        list.append(lixeira);

        input.value = ''; // Limpa o campo de entrada

        
        lixeira.addEventListener('click', () => {
            list.remove();

            saveToLocalStorage();

            showAlert();
        });

        check.addEventListener('change', saveToLocalStorage);

        saveToLocalStorage(); // Atualiza o localStorage ao adicionar um item
    }
});


    function showAlert(){
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
        },3000)}
      
    
    