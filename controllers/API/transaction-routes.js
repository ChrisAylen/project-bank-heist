const router = require('express').Router();
const { Transaction } = require('../../models');
const withAuth = require('../../utils/auth');
//const crypto  = require('crypto');


router.post('/', withAuth, async (req, res) => {
    let trans_id = 1;
    try {
      //let trans_id = crypto.randomUUID();
      const newTransaction = await Transaction.create({
        transaction_amount:req.body.amount,
        transaction_id: trans_id,
        account_id: req.body.account_from_id,
        user_id: req.session.user_id,

      });
      const newTransaction2 = await Transaction.create({
        transaction_amount:req.body.amount*-1,
        transaction_id: trans_id,
        account_id:  req.body.account_to_id,
        user_id: req.session.user_id,
      });

      
  
      res.status(200).json(newTransaction);
    } catch (err) {
        console.log(trans_id)
      res.status(400).json(err);
    }
  });

  module.exports = router;