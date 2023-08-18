const router = require('express').Router();

//Functions that were created in the userController.js.
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../controllers/userController');

// route: /api/users
router.route('/').get(getUsers).post(createUser);

// route: /api/users/:userId
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

// route: /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;