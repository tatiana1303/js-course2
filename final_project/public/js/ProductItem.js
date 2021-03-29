export let ProductItem;
ProductItem = {
    props: ['product'],
    template: `
    <div class="product-item">
                     <figure class="product__content">
        <div class="product__img-block"><img v-bind:src="product.pic" alt="product" class="product__img">
        <div class="product__img__hover">
            <button class="product__hover-button" @click="$root.$refs.cart.addProduct(product)">
            <img src="img/product-cart.svg" alt="" class="product__hover-button__img"> Add to Cart</button>
        </div>
        </div>
         <figcaption class="product__label"><a href="single.html" class="product__name">{{product.product_name}}
         <span class="product__price">&#36;{{product.price}}</span></a> </figcaption>
     </figure>
                </div>
    
    `
};