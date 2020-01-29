// import { getProducts } from "./utils";

// function renderResults(selectedProducts, products){
//     const tr = document.createElement('tr');


//     const nameCell = document.createElement('td');
//     nameCell.className = 'align-center';
//     nameCell.textContent = products.name;
//     tr.appendChild(nameCell);
    
//     const quantityCell = document.createElement('td');
//     quantityCell.textContent = selectedProducts.quantity;
//     tr.appendChild(quantityCell);
    
//     return tr;
// }
// export default renderResults();


// const tbody = document.querySelector('.table');

// const products = getProducts();

// const results = makeResults();

// for (let i = 0; i < results.length; i++){
//     //loop through the baked goods array
//     const possiblyresultsGood = results[i];
//     //set each item in the cart to line item
//     const selectedGood = findById(products, possiblyCartGood.id);
   
//     //selected good is comparing baked goods list with line items id
//     const dom = renderBakedGoods(possiblyCartGood, selectedGood);
//     //render info and store in dom variable, use cart[i] and the baked good
//     tbody.appendChild(dom);
//     //append, add the changes to the tbody in html
// }