import express from 'express';
import Client from '../models/Client';

const router = express.Router();
module.exports = router;


router.route('/').get((req,res) => {
  Client.find((err,clients) => {
    if (err)
      console.log(err);
    else
      res.json(clients);
  });
});

router.route('/:id').get((req,res) => {
  Client.findById(req.params.id, (err,client) => {
    if (err)
      console.log(err);
    else{
      res.json(client);
    }
  });
});

router.route('/add').post((req,res) => {
  let client = new Client(req.body);
  client.save().then(client => {
      res.status(200).json({'client': 'Added successfully'});
    })
    .catch(err => {
      res.status(400).send('Failed to create a new record');
    });
});

router.route('/update/:id').post((req,res) => {
  Client.findById(req.params.id, (err, client) => {
    if (!client)
      return next(new Error('Could not load document'));
    else{
      client.name = req.body.name;
      client.description = req.body.description;
      client.status = req.body.status;

      client.save().then(client => {
        res.json('Update done');
      }).catch(err => {
        res.status(400).send('Update failed');
      });
    }

  });
});

router.route('/delete/:id').get((req,res) => {
  Client.findByIdAndRemove({_id: req.params.id}, (err,client) =>{
    if (err)
      res.json(err);
    else{
      res.json('Deleted successfully');
    }
  });
});
