import { getProducts, findById } from './utils.js';

const products = getProducts();
const results = JSON.parse(localStorage.getItem('results'));
const tbody = document.querySelector('.table');

export function renderResults(selectedProducts, products){
    const tr = document.createElement('tr');
    

    const nameCell = document.createElement('td');
    nameCell.className = 'align-center';
    nameCell.textContent = products.name;
    tr.appendChild(nameCell);
    
    const votesCell = document.createElement('td');
    votesCell.textContent = selectedProducts.votes;
    tr.appendChild(votesCell);
    
    return tr;
    
}



// for (let i = 0; i < results.length; i++){
//     const possiblyResults = results[i];
//     const selectedGood = findById(products, possiblyResults.id);
//     const dom = renderResults(possiblyResults, selectedGood);
//     tbody.appendChild(dom);
// }