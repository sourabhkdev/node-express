const express = require("express");
const router = express.Router();

//GET OCNTACTE ROUTE
router.route("/").get((req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

//POST OCNTACTE ROUTE
router.route("/").post((req, res) => {
  res.status(200).json({ message: "Create contact" });
});

//GET CONTACT BY ID
router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}`});
});

//UPDATE OCNTACTE ROUTE
router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}`});
});

//DELETE OCNTACTE ROUTE
router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}`});
});

module.exports = router;
