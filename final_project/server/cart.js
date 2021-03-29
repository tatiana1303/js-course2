const add = (cart, req) => {
    cart.contents.push(req.body);
    return JSON.stringify(cart, null, 4);
};

const update = (cart, req) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    cart.countGoods = cart.contents.reduce((accum, item) => accum + item.quantity, 0);
    cart.amount = cart.countGoods * (cart.contents.reduce((accum, item) => accum + item.price, 0));
    return JSON.stringify(cart, null, 4);
};
const del = (cart, req) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    cart.contents.splice(cart.contents.indexOf(find), 1);
    cart.countGoods = cart.contents.reduce((accum, item) => accum + item.quantity, 0);
    cart.amount = cart.countGoods * (cart.contents.reduce((accum, item) => accum + item.price, 0));
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    update,
    del
};