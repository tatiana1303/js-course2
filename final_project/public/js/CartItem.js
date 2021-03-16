export const CartItem = {
    props: ['cartItem'],
    emits: ['remove'],
    template: `
        <div class="cart-item">
             <img :src="cartItem.pic" :alt="cartItem.product_name" class="cart-item__img">
             <div class="cart-item__text">
                <p class="cart-item__title">{{cartItem.product_name}}</p>
                <p class="cart-item__details">{{cartItem.quantity}} x &#36;{{cartItem.price}}</p>
            </div>
             <button class="cart-item__del-btn" @click="$emit('remove', cartItem)">&times;</button>
        </div>    
                    
    `
};

