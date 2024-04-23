const express = require("express");
const {
  getContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

// //GET OCNTACTE ROUTE
// router.route("/").get(getContact);

// //POST OCNTACTE ROUTE
// router.route("/").post(createContact);

// //GET CONTACT BY ID
// router.route("/:id").get(getContactById);

// //UPDATE OCNTACTE ROUTE
// router.route("/:id").put(updateContact);

// //DELETE OCNTACTE ROUTE
// router.route("/:id").delete(deleteContact);

// token validation after making contacts route PRIVATE
router.use(validateToken);

// combine all matching route
router.route("/").get(getContact).post(createContact);
router
  .route("/:id")
  .get(getContactById)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
