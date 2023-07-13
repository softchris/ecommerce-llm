import Cart from '../components/cart.js'

const CartRoute = {
    template: `
      <h2>Cart</h2>
      <Cart :cart="cart"></Cart>
    `,
    components: {
        Cart
    }
}

export default CartRoute;