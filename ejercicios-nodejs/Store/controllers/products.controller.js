// Libs
const { ref } = require('firebase/storage');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { storage } = require('../utils/firebase');

//Models
const { Product } = require('../models/product.model');
const { Category } = require('../models/category.model');
const { ProductImg } = require('../models/productImg.model');

const getAllProducts = catchAsync(async (req, res) => {

  const products = await Product.findAll({
    include: [
      {
        model: Category,
        attributes: ['name']
      }
    ],
  });

  const productsPromises = products.map(async product => {

    const imgRef = ref(storage, products.ProductImg.imgUrl);
    const url = await getDownloadURL(imgRef);

    product.profileImgUrl = url;

    return product;
  });

  const productsResolved = await Promise.all(productsPromises);

  res.status(200).json({ products });

});

const getProductById = catchAsync(async (req, res) => {

  const { product } = req;

  const newProduct = await Product.findOne({
    include: [{
      model: Category,
      attributes: ['name']
    }],
    where: { id: product.id }
  });

  res.status(200).json({ newProduct });

});

const createProduct = catchAsync(async (req, res) => {

  const { sessionUser } = req;

  const { title, description, quantity, price, categoryId } = req.body;

  const product = await Product.create({
    title,
    description,
    quantity,
    price,
    categoryId,
    userId: sessionUser.id
  });

  const imagesProductsPromise = req.files.map( async (file) => {

    const imgRef = ref(storage, `products/${Date.now()}-${req.file.originalname}`);

    const imgUploaded = await uploadBytes(imgRef, req.file.buffer);

    return await ProductImg.create({ productId: product.id, imgUrl: imgUploaded.metadata.fullpath });
  
  });

  const newProduct = {product, ...imagesProductsPromise};

  await Promise.all(imagesProductsPromise);

  res.status(201).json({ product });

});

const updateProduct = catchAsync(async (req, res) => {

  const { product } = req;

  const { title, description, price, quantity, categoryId } = req.body;

  await product.update({ title, description, price, quantity, categoryId });
  
  res.status(201).json({ status: 'success' });

});

const deleteProduct = catchAsync(async (req, res) => {

  const { product } = req;

  const { status } = req.body;

  await product.update({ status });
  
  res.status(201).json({ status: 'success' });

});

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
