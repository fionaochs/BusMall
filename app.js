import { productsData } from './api.js';
import { ProductsArray } from './productsArray.js';
import { findById, getProducts } from './utils.js';

const newRadioTags = document.querySelector('input');
const resultsDisplay = document.getElementById('results');
const submitButton = document.getElementById('submitButton');
const product3Input = document.getElementById('product3Input');

const products = new ProductsArray(productsData);

let productResults = getProducts();

let chosenProducts = 0;


const makeResults = () => {
    const possibleResults = localStorage.getItem('results');

    if (possibleResults){
        return JSON.parse(productResults);
    } 
    else {
        return [];
    }
};

const initializeNewProducts = () => {
    const newProduct1 = products.getRandomProduct();
    let newProduct2 = products.getRandomProduct();
    console.log(newProduct1);

    while (newProduct1.id === newProduct2.id){
        newProduct2 = products.getRandomProduct();
    } 
    console.log(newProduct2);

    let newProduct3 = products.getRandomProduct();
    while (newProduct1.id === newProduct3.id || newProduct2.id === newProduct3.id){
        newProduct3 = products.getRandomProduct();
    }   
    console.log(newProduct3);

    const product1Object = newProduct1;
    product1Object.textContent = product1Object.name;

    const product1Image = document.getElementById('product1Img');
    product1Image.src = product1Object.image;

    const product1Name = document.getElementById('product1Name');
    product1Name.textContent = product1Object.name;

    const product2Object = newProduct2;
    product2Object.textContent = product2Object.name;
    const product2Image = document.getElementById('product2Img');
    product2Image.src = product2Object.image;
    const product2Name = document.getElementById('product2Name');

    product2Name.textContent = product2Object.name;


    const product3Object = newProduct3;
    product3Object.textContent = product3Object.name;
    const product3Image = document.getElementById('product3Img');
    product3Image.src = product3Object.image;
    const product3Name = document.getElementById('product3Name');

    product3Name.textContent = product3Object.name;
    product3Input.value = product3Object.id;

};
// document.querySelector('button').addEventListener('click', initializeNewProducts);

initializeNewProducts();

// newRadioTags.addEventListener((radioTag) => {
//     radioTag.addEventListener('click',() => {
//         if (radioTag.value === newProduct1.id){
         
// });
function renderProductsResults(products){
    const results = makeResults();

    let productChoiceResults = findById(results, products.id);

    if (!productChoiceResults){
        const productChoice = {
            id: products.id,
            quantity: 1
        };
        results.push(productChoice);
    } else productChoiceResults.quantity++;

    const newResultsState = JSON.stringify(results);
    localStorage.setItem('results', newResultsState);

}

submitButton.addEventListener('click', () => {
    console.log(document.querySelector('input:checked'));
    renderProductsResults();
    initializeNewProducts();
    chosenProducts++;
    if (chosenProducts > 25){
        resultsDisplay.style.visibility = 'visible';
        submitButton.disabled = 'true';
    }
    
});

