const router = require('express').Router();
const { Transaction } = require('../../models');
const { Account } = require('../../models');
const withAuth = require('../../utils/auth');
const crypto = require('crypto');

//Create a new transaction
router.post('/', withAuth, async (req, res) => {
  //let trans_id = 1;
  let transAmount = parseFloat(req.body.amount).toFixed(2);
  //Inverse amount for secont transaction
  let inverseTransAmount = transAmount * -1;
  let trans_id = crypto.randomUUID();
  try {
    const newTransaction = await Transaction.create({
      transaction_amount: transAmount,
      transaction_id: trans_id,
      account_id: req.body.account_from_id,
      user_id: req.session.user_id,

    });
    const newTransaction2 = await Transaction.create({
      transaction_amount: inverseTransAmount,
      transaction_id: trans_id,
      account_id: req.body.account_to_id,
      user_id: req.session.user_id,
    });

    const output = {
      transaction_id: trans_id,
      transaction_amount: transAmount,
      from_account: req.body.account_from_id,
      to_account: req.body.account_to_id,
      user_id: req.session.user_id
    }

    res.status(200).json(output);
  } catch (err) {
    console.log(trans_id)
    res.status(400).json(err);
  }
});

//Get a transaction by its ID
router.get('/:id', withAuth, async (req, res) => {
  try {

    const transactions = await Transaction.findAll({
      where: {
        transaction_id: req.params.id,

      },
    });
    if (!transactions) {
      res.status(404).json({ message: 'No transaction found with this id!' });
      return;
    }

    res.status(200).json(transactions);
  } catch (err) {
    console.log(trans_id)
    res.status(400).json(err);
  }
});

// Get all transactions for account
router.get('/', withAuth, async (req, res) => {
  try {
    const transactionsForAccount = await Transaction.findAll({
      include: [ { model:Account, 
      where: {
        user_id: req.session.user_id,
        id:req.body.account_id,
      },
    }],
      
      // where: {
      //   //account_id:req.body.account_id,
      // },

    });
    if (!transactionsForAccount) {
      res.status(404).json({ message: 'No transactions found for this account' });
      return;
    }
    res.status(200).json(transactionsForAccount);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Get All transactions for a month for an account

module.exports = router;