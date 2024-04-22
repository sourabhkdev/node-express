const dotenv = require("dotenv").config();
const express = require("express");
const errorhandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();
const port = process.env.PORT || 5000;
// Basic GET route
// app.get("/api/contacts", (req, res) => {
//   res.status(200).json({ message: "Get all contacts" });
// });

//Connect databse

app.use(express.json()); // parser middleware to get req body from client
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorhandler); // error handler middlewasre

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
