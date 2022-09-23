const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// /api/comments/<pizzaId>
router.route("/:userId").get(getAllThought).post(createThought);

// /api/:userId/:thoughtId/
router
  .route("/:userId/:thoughtId")
  .get(getThoughtById)
  .put(updateThoughtById)
  .put(addReaction)
  .delete(deleteThoughtById);

// /api/Thoughts/<userId>/<thoughtId>
router.route("/:userId/:thoughtId/:reactionId").delete(deleteReaction);

module.exports = router;
