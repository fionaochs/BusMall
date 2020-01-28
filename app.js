import { productsData } from './api.js';
import { ProductsArray } from './productsArray.js';

const newImageTags = document.querySelector('img');
const newRadioTags = document.querySelector('input');
const product1Name = document.getElementById('product1');

const products = new ProductsArray(productsData);

let productResults = [];

// let chosenProducts = 

// newRadioTags.addEventListener((radioTag) => {
//     radioTag.addEventListener('click',() => {
//         if (radioTag.value === newProduct1.id){
           
//             if(!)
//             const newProductResult = {
//                 id: productsData.get('id'),
//                 name: productsData.get('name'),
//                 image: productsData.get('image'),
//                 quantity: 1
//             };
//            productResults.push(newProductResult);
//         } else 
//             productsResult.quantity++;
//     });
// });



// initializeNewProducts(){
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
    }   console.log(newProduct3);

// };
const product1Object = newProduct1;
product1Object.textContent = product1Object.name;
const product1Image = document.getElementById('product1Img');
product1Image.src = product1Object.image;


const product2Object = newProduct2;
product2Object.textContent = product2Object.name;
const product2Image = document.getElementById('product2Img');
product2Image.src = product2Object.image;


const product3Object = newProduct3;
product3Object.textContent = product3Object.name;
const product3Image = document.getElementById('product3Img');
product3Image.src = product3Object.image;

document.querySelector('button').addEventListener('click', initializeNewProducts);
initializeNewProducts();