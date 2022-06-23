const router = require('express').Router();
const { Transaction } = require('../../models');
const withAuth = require('../../utils/auth');
const crypto  = require('crypto');


router.post('/', withAuth, async (req, res) => {
    //let trans_id = 1;
    let transAmount=parseFloat(req.body.amount).toFixed(2);
    let inverseTransAmount=transAmount*-1;
    let trans_id = crypto.randomUUID();
    try {
      const newTransaction = await Transaction.create({
        transaction_amount:transAmount,
        transaction_id: trans_id,
        account_id: req.body.account_from_id,
        user_id: req.session.user_id,

      });
      const newTransaction2 = await Transaction.create({
        transaction_amount:inverseTransAmount,
        transaction_id: trans_id,
        account_id:  req.body.account_to_id,
        user_id: req.session.user_id,
      });

      const output={
        transaction_id: trans_id,
        transaction_amount:transAmount,
        from_account: req.body.account_from_id,
        to_account:req.body.account_to_id,
        user_id: req.session.user_id
      }
  
      res.status(200).json(output);
    } catch (err) {
        console.log(trans_id)
      res.status(400).json(err);
    }
  });

  module.exports = router;