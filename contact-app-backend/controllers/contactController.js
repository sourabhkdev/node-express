//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create new contacts
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
  res.status(200).json({ message: "Create contact" });
};

//@desc Get contact by id
//@route GET /api/contacts/:id
//@access public

const getContactById = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

//@desc Update contact by id
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc delte contact by id
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
