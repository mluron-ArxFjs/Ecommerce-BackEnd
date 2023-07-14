// import models
const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foriegnKey: 'product_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foriegnKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foriegnKey: 'product_id',
  as: 'product_tags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foriegnKey: 'tag_id',
  as: 'product_tags'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};