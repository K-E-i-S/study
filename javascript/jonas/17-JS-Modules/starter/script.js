// Importing module
//import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
//addToCart('bread', 5);
//console.log(price, tq);

console.log('inporting module');


//import * as ShppingCart from "./shoppingCart.js";
//console.log(ShppingCart);
//ShoppingCart.addToCart('bread', 5);
//console.log(ShppingCart.totalPrice);


import add, { cart } from "./shoppingCart.js";
//console.log(add);

//const add = new URL('./shoppingCart.js', import.meta.url);

add('pizza', 5);
add('tomato', 5);

console.log(cart);

/*
const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
j
    return { title: data.at(-1).title, text: data.at(-1).body };
}

const lastPost = getLastPost();
console.log(lastPost);

// mot very clean
//lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/


// module pattern
/*
const shoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart (shipping cost ${shippingCost})`);
    };

    const orderToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} ordered to cart`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 2);
console.log(shoppingCart2);
*/

// CommonJS

const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart (shipping cost ${shippingCost})`);
};
export  { addToCart as AddToCart };

// Import 
const  addTocart = require('./shoppingCart.js');
console.log(addTocart);


//import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
    cart: [
        { product: 'bread', wuantity: 5 },
        { product: 'pizza', wuantity: 5 }
    ],
    user: { loggedIn: true }
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
    module.hot.accept();
}

class Person {
    #greeting = 'Hey';
    constructor(name) {
        this.name = name;
        console.log(`${this.#greeting}, ${this.name}`);
    }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
//import 'core-js/stable/array/find';