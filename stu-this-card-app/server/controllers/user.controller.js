import express from 'express';
import User from '../models/User';

const router = express.Router();
module.exports = router;


router.route('/').get((req,res) => {
  User.find((err,users) => {
    if (err)
      console.log(err);
    else
      res.json(users);
  });
});

router.route('/:id').get((req,res) => {
  User.findById(req.params.id, (err,user) => {
    if (err)
      console.log(err);
    else{
      res.json(user);
    }
  });
});

router.route('/add').post((req,res) => {
  let user = new User(req.body);
  user.save().then(user => {
      res.status(200).json({'user': 'Added successfully'});
    })
    .catch(err => {
      res.status(400).send('Failed to create a new record');
    });
});

router.route('/update/:id').post((req,res) => {
  User.findById(req.params.id, (err, user) => {
    if (!user)
      return next(new Error('Could not load document'));
    else{
      user.name = req.body.name;
      user.email = req.body.email;

      user.save().then(user => {
        res.json('Update done');
      }).catch(err => {
        res.status(400).send('Update failed');
      });
    }

  });
});

router.route('/delete/:id').get((req,res) => {
  User.findByIdAndRemove({_id: req.params.id}, (err,user) =>{
    if (err)
      res.json(err);
    else{
      res.json('Deleted successfully');
    }
  });
});
