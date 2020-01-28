import { productsData } from './api.js';
import { ProductsArray } from './productsArray.js';
import { findById, getProducts } from './utils.js';

// const newRadioTags = document.querySelector('input');
const resultsDisplay = document.getElementById('results');
const submitButton = document.getElementById('submitButton');
const product3Input = document.getElementById('product3Input');

const products = new ProductsArray(productsData);

let productResults = getProducts();

let chosenProducts = 0;


const initializeNewProducts = () => {
    const newProduct1 = products.getRandomProduct();
    let newProduct2 = products.getRandomProduct();
    

    while (newProduct1.id === newProduct2.id){
        newProduct2 = products.getRandomProduct();
    } 
    
    let newProduct3 = products.getRandomProduct();
    while (newProduct1.id === newProduct3.id || newProduct2.id === newProduct3.id){
        newProduct3 = products.getRandomProduct();
    }   
    

    const product1Object = newProduct1;
    product1Object.textContent = product1Object.name;
    const product1Image = document.getElementById('product1Img');
    product1Image.src = product1Object.image;
    const radioButton1 = document.getElementById('product1Input');
    radioButton1.value = newProduct1.id;
    const product1Name = document.getElementById('product1Name');
    product1Name.textContent = product1Object.name;

    const radioButton2 = document.getElementById('product2Input');
    radioButton2.value = newProduct2.id;
    const product2Object = newProduct2;
    product2Object.textContent = product2Object.name;
    const product2Image = document.getElementById('product2Img');
    product2Image.src = product2Object.image;
    const product2Name = document.getElementById('product2Name');
    product2Name.textContent = product2Object.name;

    const radioButton3 = document.getElementById('product3Input');
    radioButton3.value = newProduct3.id;
    const product3Object = newProduct3;
    product3Object.textContent = product3Object.name;
    const product3Image = document.getElementById('product3Img');
    product3Image.src = product3Object.image;
    const product3Name = document.getElementById('product3Name');
    product3Name.textContent = product3Object.name;
    product3Input.value = product3Object.id;


};

const makeResults = () => {
    const possibleResults = localStorage.getItem('results');

    if (possibleResults){
        return JSON.parse(productResults);
    } 
    else {
        return [];
    }
};
initializeNewProducts();

const productSelected = document.querySelector('input:checked');

function renderProductsResults(products){
    const getProducts = getProducts();
    const results = makeResults();

    let productChoiceResults = findById(getProducts, products.id);
    console.log(productChoiceResults);

    if (!productChoiceResults){
        const selectedResultsObject = {
            id: productSelected.value,
            votes: 1
        };
        results.push(selectedResultsObject);
    } else 
        productChoiceResults.quantity++;

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
        submitButton.style.visibility = 'hidden';
    }
    
});

