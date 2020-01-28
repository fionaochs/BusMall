import { productsData } from './api.js';

export function findById(productsData, someId){
    for (let i = 0; i < productsData.length; i++){
        const selectedGood = productsData[i];
        if (selectedGood.id === someId){
            return selectedGood;
        }
    }
    return null;
}
const makeResults = () => {
    const possibleResults = localStorage.getItem('results');

    if (possibleResults){
        return JSON.parse(possibleResults);
    } 
    else {
        return [];
    }
};
function renderProductsResults(products){
    submitButton.addEventListener('click', () => {
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
    });    
}


function seedProductsIntoLocalStorage(){
    const productsAlreadyExist = localStorage.getItem('products');

    if (!productsAlreadyExist){
        const stringyProducts = JSON.stringify(productsData);
        localStorage.setItem('products', stringyProducts);
    }

}

export function getProducts(){
    seedProductsIntoLocalStorage();
    
    const storedProducts = localStorage.getItem('products');
    const parsedProducts = JSON.parse(storedProducts);

    return parsedProducts;
}
