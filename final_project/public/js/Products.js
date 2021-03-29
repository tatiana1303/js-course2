import {ProductItem} from "./ProductItem.js";

export const Products = {
    inject: ['API', 'getJson'],
    components: {
        ProductItem
    },
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],

        }
    },

   mounted() {

        this.getJson(`/api/products` + window.location.pathname)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);

                }
            });
    },
    template:  `
        <div class="product__cards">
                <ProductItem 
                v-for="el of products" 
                :key="el.id_product"
                :product="el"
                >
                </ProductItem>
         </div>
    `
};