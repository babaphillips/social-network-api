const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUserById,
  deletePizzaUserById,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUser).post(createUser);

// /api/users/:id
router
  .route("/:id")
  .get(getUserById)
  .put(updateUserById)
  .delete(deletePizzaUserById);

router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
