
const router = require('express').Router();
const { Product, Tag, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Route to find all tags
router.get('/', (req, res) => {
  // be sure to include its associated Product data
  Tag.findAll(
    {
      include: {
        model: Product,
        attributes: ["product_name", "price", "stock", "category_id"],
        as: 'product_tags'
      }
    })
    .then(Data => res.json(Data))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Route to find a single tag by its `id`
router.get('/:id', (req, res) => {
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ["product_name", "price", "stock", "category_id"],
        as: 'product_tags'
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Route to create a new tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Route to update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: "No tag can be found with that ID" });
        return;
      }
      res.json(dbTagData);
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// Route to delete a tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;

