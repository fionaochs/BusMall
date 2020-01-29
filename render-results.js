function renderResults( , products){
    const tr = document.createElement('tr');


    const nameCell = document.createElement('td');
    nameCell.className = 'align-center';
    nameCell.textContent = products.name;
    tr.appendChild(nameCell);
    
    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);
    
    return tr;
}
export default renderResults();