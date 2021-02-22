class Products {
    data = [];
    products = [];
    container = null;

    constructor(selector) {
        this.container = document.querySelector(selector);
        this._fetchData();
        this._render();
        this._sumOfProducts();
    }

    _fetchData() {
        this.data = [
            { title: 'Notebook', id: 1, price: 2000 },
            { title: 'Keyboard', id: 2, price: 200 },
            { title: 'Mouse', id: 3, price: 100 },
            { title: 'Gamepad', id: 4, price: 87 }
        ];
    }

    _render() {
        for (let data of this.data) {
            const product = new ProductItem(data);
            this.products.push(product);
            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
    _sumOfProducts() {
        const totalPrice = this.data.reduce(function(prevPrice, currentPrice){
            return prevPrice + currentPrice.price;
        }, 0)
        this.container.insertAdjacentHTML('afterend', `<p class="container">Сумма всех товаров каталога ${totalPrice}`);


    }
}

class ProductItem {
    title = '';
    price = 0;
    id = 0;
    img = '';

    constructor(product, img = 'https://placehold.it/200x150') {
        ({ title: this.title, price: this.price, id: this.id } = product);
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}



class Cart {
    // cartItems array - массив   выбранных товаров

    // orderList array - массив товаров из заказа

    // openCart() открытие корзины

    // closeCart() - закрывает корзину

    // render()- товар с  разметкой добавляется  в массив orderList

    // sumOfCart() - подсчет суммы заказа

    // ordering() - оформление заказа

    // 

}

class CartItem {
    // cartItems - товар

    // addProduct() - метод который создает разметку товара (название, цена, картинка, id, колличество)

    // deleteProduct() - удаление товара из корзины

}

const list = new Products('.products');


