

function loadMenu(){
    let description = document.querySelector('#description');
    
    let ul = document.createElement('ul');
    
    let arr = ['Bavuma Dhokla', 'Biryani-e-Stonks', 'Kolly ke Kulche', 'Faluda de Rabada'];

    for(let i = 0;i<arr.length;i++){
        let elem = document.createElement('li');
        elem.textContent = arr[i];
        ul.appendChild(elem);
    }
    description.appendChild(ul);
}

export default loadMenu;