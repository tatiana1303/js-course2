export const BigCartForm = {
    props: ['calcSum'],
    template: `
<div class="shopping-cart__forms__wrapper container">
    <form class="shopping-cart__form">
        <h1 class="shopping-cart__form-title">Shipping adress</h1>
        <select name="country" id="country" class="shopping-cart__form-select"><option value="">Bangladesh</option></select>
        <input type="text" placeholder="State" class="shopping-cart__form-item">
        <input type="text" placeholder="Postcode/Zip" class="shopping-cart__form-item ">
        <input type="submit" value="Get a quote" class="shopping-cart__form-btn">
    </form>
     <form class="shopping-cart__form">
        <h1 class="shopping-cart__form-title">Coupon discount</h1>
        <p class="shopping-cart__form-subtitle">Enter your coupon code if you have one</p>
        <input type="text" placeholder="State" class="shopping-cart__form-item">
        <input type="submit" value="Apply coupon" class="shopping-cart__form-btn">
    </form>
  <div class="shopping-form__discount__wrapper">
    <form action="" class="shopping-form__discount">
       <div class="shopping-form__discount-text">
        <p class="shopping-form__discount-sub-total">Sub total  &#36;{{calcSum}}</p>
        <p class="shopping-form__discount-total">Grand total <span class="shopping-form__discount-total__price">&#36;{{calcSum}}</span></p>
        </div>
        <input type="submit" class="shopping-form__discount-btn" value="Procced to checkout">
    </form>
    </div>
</div>     
    `
};