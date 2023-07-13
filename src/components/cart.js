import cart from '../model/cart.js';
import bus from '../core/events.js';

export default {
    props: ['small'],
    setup(props) {
        if (props.small) {
            console.log('small cart');
        }
        return { cart, small: props.small };
    },
    methods: {
        removeFromCart(product) {
            console.log(product);
            // dispatch vue event to add product to cart
            bus.emit('remove-from-cart', product);
        },
        isEmpty() {
            return cart.value.length == 0;
        },
        isSmall() {
            return Boolean(this.small);
        },
        cartSize() {
            return cart.value.length;
        }
    },
    template: `
    <div>
        <div v-if="!isSmall()">
            <div class="product card col-lg-6 col-sm-12" v-for="product in cart" :key="product.id" v-if="!isEmpty()">
                <h3>{{ product.name }}</h3>
                <p>{{ product.price }}</p>
                <div class="text-right">
                    <button @click="removeFromCart(product)" class="btn btn-primary ">Remove from cart</button>
                </div>
            </div>
            <div class="card product" v-if="isEmpty()"><h3>Cart is empty</h3></div>
        </div>
        <div v-if="isSmall()"><h3> Items in cart: {{cartSize()}}</h3></div>
    </div>
    `
}

