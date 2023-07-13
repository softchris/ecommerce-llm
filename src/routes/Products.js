import bus from '../core/events.js';

// create component for products
const Products = { 
    setup() {
        let products = Vue.ref([]);
        let search = Vue.ref('');
        let filtered_products = Vue.ref({ filtered: [] } );

        fetch("/data/products.json")
          .then(response => response.json())
          .then(data => {
            for(let p of data.products) {
                products.value.push(p);
            }
            filtered_products.value
                .filtered = products.value;
        });

        return { products, search, filtered_products };
    },
    data: () => ({ search: '', filtered_products: [], products: [] }),
    methods: {
        addToCart(product) {
            console.log(product);
            // dispatch vue event to add product to cart
            bus.emit('add-to-cart', product);
        },
        searchProduct(props, event) {
            console.log("search", this.search);
            this.filtered_products.filtered = this.products.filter((product) => product.name.includes(this.search));

            console.log("filtered", this.filtered_products.filtered);
            // TODO: Korey, filter products based on LLM search
        }
    },
    template: `
        <h2>Products</h2>
            <div class="form-group">
                <label for="search">Search product..</label>
                <input 
                    id="search" 
                    class="form-control" 
                    type="text" v-model="search" placeholder="Search products" /> 
                <button class="btn" @click="searchProduct()">Search</button> 
        </div>

        <div class="product card col-md-12" v-for="product in filtered_products.filtered" :key="product.id">
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
            <div class="text-right">
                <button @click="addToCart(product)" class="btn btn-primary ">Add to cart</button>
            </div>
        </div>
    ` 
}

export default Products;