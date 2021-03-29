export const BigCartItem = {
    props: ['cartItem'],
    emits: ['remove'],
    template: `
<div class="shopping-list__item"> 
        <div class="shopping-list__information"> 
           <div class="shopping-list__information-detail"> 
            <img :src="cartItem.pic" alt="" class="shopping-list__img"> 
            <div class="shopping-list__product-subscribe"> 
                <p class="shopping-list__product-name">{{cartItem.product_name}}</p> 
                <p class="shopping-list__product-property">Color: <span class="shopping-list__product-property__span">Red</span></p> 
                 <p class="shopping-list__product-property">Size: <span class="shopping-list__product-property__span">XII</span></p> 
            </div> 
            </div> 
        </div> 
        <div class="shopping-list__information-more">{{cartItem.price}}</div> 
        <div class="shopping-list__information-more"><p class="shopping-list__information-more__quantity">{{cartItem.quantity}}</p></div> 
        <div class="shopping-list__information-more">Free</div> 
        <div class="shopping-list__information-more">&#36;{{cartItem.quantity*cartItem.price}}</div> 
        <div class="shopping-list__information-more"><button class="shopping-list__information-more__btn" @click="$emit('remove', cartItem)">&times;</button></div> 
         
    </div> 
                
    `
};
