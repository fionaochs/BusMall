import { getProducts, findById } from './utils.js';


export function renderResults(selectedProducts, products){
    const tr = document.createElement('tr');
    const tbody = document.querySelector('.table');

    const nameCell = document.createElement('td');
    nameCell.className = 'align-center';
    nameCell.textContent = products.name;
    tr.appendChild(nameCell);
    
    const votesCell = document.createElement('td');
    votesCell.textContent = selectedProducts.votes;
    tr.appendChild(votesCell);
    
    return tr;
    tbody.appendChild(dom);
}


const products = getProducts();

const results = JSON.parse(localStorage.getItem('results'));




for (let i = 0; i < results.length; i++){
    const possiblyresults = results[i];
    const selectedGood = findById(possiblyresults, possiblyResults.value);
    const dom = renderResults(selectedProducts, selectedGood);
    
}