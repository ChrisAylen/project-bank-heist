const router = require('express').Router();
const { User, Account } = require('../models');
const withAuth = require('../utils/auth');
const { Op } = require("sequelize");

// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});





router.get('/accounts', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Account }],
      });
      const user = userData.get({ plain: true });

        
      res.render('accounts', {
        user,
        
        logged_in: req.session.logged_in,
        });
  } catch (err) {
    res.status(500).json(err);
  }
}
);

router.get('/account/:id', async (req, res) => {
  try {
    const accountData = await Account.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Transaction,
          attributes: ['date_created', 'transaction_amount', 'transaction_id'],
        },
      ],
    });

    const accounts = accountData.get({ plain: true });
    console.log(accounts)

    res.render('accountPage', {
      ...accounts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/transfer', withAuth, async (req, res) => {
  try {
    console.log(req.session.user_id)
    const transferData = await User.findAll({
      where: {
        id:{
          [Op.ne]: req.session.user_id
        }
      },
      attributes: { exclude: ['password'] },
      include: [{ model: Account }],
      });

    const current_userData= await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{model: Account}],
    });

    const current_user = current_userData.get({ plain: true });
    const transfer = transferData.map((project) => project.get({ plain: true }));

    console.log(transfer)

      res.render('banktransfer', {
        current_user,
        transfer,
        logged_in: req.session.logged_in,
        });
  } catch (err) {
    res.status(500).json(err);
  }
}
);





router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/sign-up', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});


module.exports = router;
