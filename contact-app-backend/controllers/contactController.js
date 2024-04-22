const asyncHandler = require("express-async-handler"); // use express-async-handler to eliminate use of try catch

// contact model
const Contact = require("../model/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public

{
  /* while interacting with MOngo db we always get promise and to resolve that promise,
here we will use AYNC AWAIT*/
}

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
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
  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  res.status(201).json(contact);
  // res.status(200).json({ message: "Create contact" });
});

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access public

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
//@access public

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
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
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
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
