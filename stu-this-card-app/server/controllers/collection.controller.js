import express from 'express';
import Collection from '../models/Collection';

const router = express.Router();
module.exports = router;


router.route('/').get((req,res) => {
  Collection.find((err,collections) => {
    if (err)
      console.log(err);
    else
      res.json(collections);
  });
});

router.route('/:id').get((req,res) => {
  Collection.findById(req.params.id, (err,collection) => {
    if (err)
      console.log(err);
    else{
      res.json(collection);
    }
  });
});

router.route('/add').post((req,res) => {
  let collection = new Collection(req.body);
  collection.save().then(collection => {
      res.status(200).json({'collection': 'Added successfully'});
    })
    .catch(err => {
      res.status(400).send('Failed to create a new record');
    });
});

router.route('/update/:id').post((req,res) => {
  Collection.findById(req.params.id, (err, collection) => {
    if (!collection)
      return next(new Error('Could not load document'));
    else{
      collection.name = req.body.name;
      collection.creator = req.body.creator;

      collection.save().then(collection => {
        res.json('Update done');
      }).catch(err => {
        res.status(400).send('Update failed');
      });
    }

  });
});

router.route('/delete/:id').get((req,res) => {
  Collection.findByIdAndRemove({_id: req.params.id}, (err,collection) =>{
    if (err)
      res.json(err);
    else{
      res.json('Deleted successfully');
    }
  });
});
