// const EventEmitter = require('events');

// const customEmitter = new EventEmitter();

// customEmitter.on('response', () => {
//   console.log('Data recieved');
// });

// customEmitter.emit('response');

const express = require('express');
const app = express();

const { products } = require('./data');

// api to get all products
app.get('/api/products', (req, res) => {
  res.json(newProduct);
});

// api to get all products without some params
app.get('/api/products', (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

//api to get a single product i.e params
app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist');
  }
  res.json(singleProduct);
});

//api query and search
app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    return (sortedProducts = sortedProducts.slice(0, Number(limit)));
  }
  if (sortedProducts.length < 1) {
    return res
      .status(200)
      .json({
        data: {
          status: 'successful',
          data: 'Product does not exist in our search',
        },
      });
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log('user hit the resource');
});
