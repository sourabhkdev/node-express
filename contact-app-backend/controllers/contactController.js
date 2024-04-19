const asyncHandler = require("express-async-handler"); // use express-async-handler to eliminate use of try catch

//@desc Get all contacts
//@route GET /api/contacts
//@access public

{
  /* while interacting with MOngo db we always get promise and to resolve that promise,
here we will use AYNC AWAIT*/
}

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

//@desc Create new contacts
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields mandatory");
  }
  res.status(200).json({ message: "Create contact" });
});

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access public

const getContactById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//@desc Update contact by id
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc delte contact by id
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
