import express from 'express';
import Card from '../models/Card';

const router = express.Router();
module.exports = router;


router.route('/').get((req,res) => {
  Card.find((err,cards) => {
    if (err)
      console.log(err);
    else
      res.json(cards);
  });
});

router.route('/:id').get((req,res) => {
  Card.findById(req.params.id, (err,card) => {
    if (err)
      console.log(err);
    else{
      res.json(card);
    }
  });
});

router.route('/add').post((req,res) => {
  let card = new Card(req.body);
  card.save().then(card => {
      res.status(200).json({'card': 'Added successfully'});
    })
    .catch(err => {
      res.status(400).send('Failed to create a new record');
    });
});

router.route('/update/:id').post((req,res) => {
  Card.findById(req.params.id, (err, card) => {
    if (!card)
      return next(new Error('Could not load document'));
    else{
      card.collection = req.body.collection;
      card.front = req.body.front;
      card.back = req.body.back;

      card.save().then(card => {
        res.json('Update done');
      }).catch(err => {
        res.status(400).send('Update failed');
      });
    }

  });
});

router.route('/delete/:id').get((req,res) => {
  Card.findByIdAndRemove({_id: req.params.id}, (err,card) =>{
    if (err)
      res.json(err);
    else{
      res.json('Deleted successfully');
    }
  });
});
