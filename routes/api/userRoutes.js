const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
    deleteThought,
} = require('../../controller/userController');

//get all users
router.route('/').get(getUsers).post(createUser);

//get a single user by id
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

//api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

//api//users/:userId/thoughts/:thoughtId
router.route('/:userId/thoughts/:thoughtId').delete(deleteThought);

module.exports = router;
