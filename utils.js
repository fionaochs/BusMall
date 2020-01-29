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
