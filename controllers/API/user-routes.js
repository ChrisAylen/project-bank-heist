const router = require("express").Router();
const { User, Account } = require("../../models");

// The `/api/user` endpoint
//we REALLY dont want this endpoint to be public!!
// router.get("/", async (req, res) => {
//   try {
//     const userData = await User.findAll();
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/:id", async (req, res) => {
//   // find one user by its `id` value
//   // be sure to include its associated Products
//   try {
//     const categoryData = await Category.findByPk(req.params.id, {
//       include: [{ model: Product }],
//     });
//     res.status(200).json(categoryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// CREATE new user

const current_account= "current account";
const balance= 10;
const saving_account= "saving account";
const saving_balance= 0;

router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      
    });
    
    const user = userData.get({ plain: true });

    const newAccount = await Account.create({
      account_name:current_account,
      balance:balance,
      user_id: user.id
    });

    const new_savingAccount = await Account.create({
      account_name:saving_account,
      balance:saving_balance,
      user_id: user.id
    });


    const output= {
      user_name: req.body.username,
      email: req.body.email,
      account_name:[current_account, saving_account],
      balance:[balance, saving_balance],
    }


      req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = userData.id;


      res.status(200).json(output);
    });

  
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      //Comment:  Not returning the hash of the password
      res.json({ message: 'You are now logged in!' });
      //res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
