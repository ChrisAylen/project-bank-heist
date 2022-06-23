const router = require('express').Router();
const { Account } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
    try {
      const newAccount = await Account.create({
        account_name:req.body.account,
        balance:req.body.balance,
        interest_rate:req.body.interest_rate,
        user_id: req.session.user_id,
      });
      
  
      res.status(200).json(newAccount);
    } catch (err) {
      res.status(400).json(err);
    }
  });