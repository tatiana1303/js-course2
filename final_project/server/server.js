const express = require('express');
const fs = require('fs');
const cartRouter = require('./cartRouter');


const app = express();

app.use(express.json());
app.use( '/', express.static('public'));
app.use('/api/cart', cartRouter);


app.get('/api/products/:page', (req, res) => {
    let page =  req.params.page;
    let count = req.query.count;
    switch (page){
        case 'index.html':
             count = 8;
            break;
        case 'catalog.html':
           count = 9;
           break;
        case 'single.html':
            count = 4;
            break;
    }
    fs.readFile('server/db/products.json', 'utf8', (err, products) => {
        newData = JSON.parse(products);
        newData.length = count;
         data = JSON.stringify(newData);
        if (err) {
            res.send({ result: 0, text: 'error' });
            return;
        }
        res.send(data);
    })
});


app.listen(3000, () => console.log('Server started....'));

