const asyncHandler = require("express-async-handler"); // use express-async-handler to eliminate use of try catch

// contact model
const Contact = require("../model/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access PRIVATE

{
  /* while interacting with MOngo db we always get promise and to resolve that promise,
here we will use AYNC AWAIT*/
}

const getContact = asyncHandler(async (req, res) => {
  // get all the contacts with the user who is logged in
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
});

//@desc Create new contacts
//@route POST /api/contacts
//@access PRIVATE

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });

  res.status(201).json(contact);
});

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access PRIVATE

const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
  // res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//@desc Update contact by id
//@route PUT /api/contacts/:id
//@access PRIVATE

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  // checked logged in user id
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user contacts");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
  // res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc delte contact by id
//@route DELETE /api/contacts/:id
//@access PRIVATE

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  // checked logged in user id
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to delete other user contacts");
  }

  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
  // res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
