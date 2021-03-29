import {CartItem} from "./CartItem.js";
import {BigCartItem} from "./BigCartItem.js"
import {BigCartForm} from "./BigCartForm.js"

export const Cart = {
    inject: ['API', 'getJson', 'putJson', 'postJson', 'deleteJson'],

    components: {
        CartItem,
        BigCartItem,
        BigCartForm,
    },

props:['big'],

    data() {
        return {
            showCart: false,
            cartUrl: '/getBasket.json',
            cartItems: [],
            totalprice: this.totalprice,
            quantities: this.quantities,
            inputNumber: this.inputNumber,

        }


    },
    computed: {
        calcQuantity(product){
            return this.quantities = this.cartItems.reduce((accum, item) => accum + item.quantity, 0);

        },
        calcSum(product) {
            return this.totalprice = (this.cartItems.reduce((accum, item) => accum + item.price, 0)) * this.quantities;

                },

    },

    methods: {

        addProduct(product){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.putJson(`/api/cart/${find.id_product}`, { quantity: 1})
                    .then(data => {
                        if (data.result) {
                            find.quantity++ ;
                        }
                    });
                return
            }

            const prod = Object.assign({quantity: 1}, product);

            this.postJson(`/api/cart`, prod)
                .then(data => {
                    if (data.result) {
                        this.cartItems.push(prod);
                    }
                });
        },
        remove(product) {
            if (product.quantity > 1) {
                this.putJson(`/api/cart/${product.id_product}`, { quantity: -1 })
                    .then(data => {
                        if (data.result) {
                            product.quantity--
                        }
                    });
            } else {
                this.deleteJson(`/api/cart/${product.id_product}`)
                    .then(data => {
                        if (data.result) {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1);
                        }
                    })
            }
        },

        },

    mounted() {
        this.getJson(`/api/cart`)
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
            });
    },
    template: ` 
    <div v-if="big">
    <div class="shopping-list container bigCart" >
  
      <div class="shopping-list__item">
        <div class="shopping-list__header-item">Product details</div>
        <div class="shopping-list__header-item">Unite price</div>
        <div class="shopping-list__header-item">Quantity</div>
        <div class="shopping-list__header-item">Shipping</div>
        <div class="shopping-list__header-item">Subtotal</div>
        <div class="shopping-list__header-item">Action</div>
      
    </div>
                    <BigCartItem 
                    v-for="item of cartItems" 
                    :key="item.id_product"
                    :cartItem="item"
                    @remove="remove"
                    ></BigCartItem>
        </div>          
       <div class="shopping-list__button container">
    <button type="submit" class="shopping-list__btn-clear" ><p>Clear shopping cart</p></button>
    <button class="shopping-list__btn-clear"><a href="catalog.html">Continue shopping</a></button>
     </div>
     <BigCartForm :calcSum="calcSum"></BigCartForm>
    </div>
 
<div class="cart"  v-else>
<div class="header__cart-btn__wrapper">
    <button class="header__cart" type="button" @click="showCart = !showCart"><img src="img/cart.svg" alt=""></button>
            <div class="header__cart-count" v-if="cartItems.length">{{calcQuantity}}</div>
            </div>
            <div class="cart-block__wrapper" v-show="showCart" >
           
                <div class="cart-block" >
                 <p v-if="!cartItems.length">Cart is empty</p>
                    <div v-else>
                    <CartItem 
                    v-for="item of cartItems" 
                    :key="item.id_product"
                    :cartItem="item"
                    @remove="remove"
                    ></CartItem>
                    <p class="cart-block__total-price">Total &#36;{{calcSum}}</p>
                    </div>
                    <button class="cart-block__btn"><a href="checkout.html" class="cart-block__btn-value">Checkout</a></button>
                    <button class="cart-block__btn"><a href="shoping-cart.html" class="cart-block__btn-value">Go to Cart</a></button>
                </div>
            </div>
           </div>
  
    `

};
