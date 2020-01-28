export class ProductsArray {
    constructor(products){
        this.products = products.slice();
    }

//get copy of products from array and make copy so have comparison


    getProducts() {
        return this.products;
    }


    //remove product from the array

    removeProductById(someId) {
        this.products.forEach((products, i) => {
            if (someId === products.id){
                this.products.splice(i, 1);
            }
        });
    }

    getProductById(someId){
        let productMatch;

        this.products.forEach(products => {
            if (someId === products.id){
                productMatch = true;
            }
        });
        return productMatch;
    }

    hasAnyProducts(){
        return this.products.length;
    }

    getRandomProduct(){
        const randomProductIndex = Math.floor(Math.random() * this.products.length);
        return this.products[randomProductIndex];
    }
};