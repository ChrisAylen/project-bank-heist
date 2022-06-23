const router = require('express').Router();
const { Account } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newAccount = await Account.create({
      account_name:req.body.account_name,
      balance:req.body.balance,
      interest_rate:req.body.interest_rate,
      user_id: req.session.user_id,
    });
    

    res.status(200).json(newAccount);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const newAccount = await Account.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!newAccount) {
      res.status(404).json({ message: 'No account found with this id!' });
      return;
    }

    res.status(200).json(newAccount);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
