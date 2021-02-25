
const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

let getRequest = (url, cb) => {
    return new Promise((resolve, reject) =>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                resolve(xhr);
                return
            }

            if (xhr.status !== 200) {
                reject('some error');

            }

            cb(xhr.responseText);
        }
    })


};

//let getRequest = (url, cb) => {
//    let xhr = new XMLHttpRequest();
//    // window.ActiveXObject -> new ActiveXObject();
//    xhr.open('GET', url, true);
//    xhr.onreadystatechange = () => {
//        if (xhr.readyState !== 4) {
//            return;
//        }
//
//        if (xhr.status !== 200) {
//            console.log('some error');
//            return;
//        }
//
//        cb(xhr.responseText);
//    }
//};


class Products {
    products = [];
    container = null;

    constructor(selector) {
        this.container = document.querySelector(selector);
        this._fetchData()
            .then(() => this._render());
    }

    calcSum() {
        return this.products.reduce((accum, item) => accum += item.price, 0);
    }

    _fetchData() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                for (let product of data) {
                    this.products.push(new ProductItem(product));
                }
            })
    }

    _render() {
        for (let product of this.products) {
            if (product.rendered) {
                continue;
            }

            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
}

class ProductItem {
    title = '';
    price = 0;
    id = 0;
    img = '';
    rendered = false;

    constructor(product, img = 'https://placehold.it/200x150') {
        ({ product_name: this.title, price: this.price, id_product: this.id } = product);
        this.img = img;
    }

    render() {
        this.rendered = true;
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn" id="${this.id}">Купить</button>
                 </div>
             </div>`
    }
}


class Cart extends Products {
    idBtn = '';
    orderList = [];
    buyBtns = document.querySelectorAll('.buy-btn');
    ;

    constructor() {
        super()
        this.buyBtns = document.querySelectorAll('.buy-btn');
        this.openCart()
        this.clickHandler();
        this.getIdButton();

    }

    openCart() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.cart').classList.toggle('cart-on');

        });
    }

    clickHandler() {
        this.buyBtns.forEach(buyBtn => {
            buyBtn.addEventListener('click', this.getIdButton);
            buyBtn.addEventListener('click', this._fetchData);
        });
    }

    getIdButton(idBtn) {
        this.buyBtns.forEach(buyBtn => {
               idBtn = document.querySelector('.buy-btn').getAttribute('id');
               return idBtn;
              });
    }

    _fetchData() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                for (let cartProduct of data) {
                    if (data.includes(this.id_product === this.idBtn)) {
                        this.orderList.push(new CartItem(cartProduct));
                    }
                }
            })
    }

    _render() {
        for (let cartProduct of this.orderList) {
            if (cartProduct.rendered) {
                continue;
            }
            document.querySelector('.cart').insertAdjacentHTML('afterbegin', cartProduct.render())
        }
    }
}


   class CartItem {
    title = '';
    price = 0;
    id = 0;
    img = '';
    rendered = false;

    constructor(cartProduct, img = 'https://placehold.it/100x100 ') {
        ({ product_name: this.title, price: this.price, id_product: this.id } = cartProduct);
        this.img = img;
    }

    render() {
        this.rendered = true;
        return `<div class="cart-item">
            <img src="${this.img}" alt="${this.title}">
            <div class="cart-text">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
            </div>
        </div>`
    }



}

const list = new Products('.products');
console.log(list.calcSum());
const cart = new Cart();







