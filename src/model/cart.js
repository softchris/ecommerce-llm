import bus from '../core/events.js';

let cart = Vue.ref([]);

bus.on('remove-from-cart', (product) => {
    console.log('remove-from-cart', product);
    let index = cart.value.indexOf(product);
    cart.value.splice(index, 1);
});

export default cart;