const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThoughtById,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// GET all and POST at api/thoughts
router.route("/").get(getAllThought).post(createThought);

// GET one, PUT and DELETE at api/thoughts/:id
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThoughtById);

// POST at api/thoughts/:thoughtsId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
