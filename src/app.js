const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// ------------------------
// Static Variable
// ------------------------
var corsOptions = {
  origin: "http://localhost:3000"
};
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

// App Use

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Connect to MongoDB

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("MongoDB Connected on " + MONGODB_URI))
  .catch((err) => console.log("Error on db connection: " + err.message));

// ---------------------
// App Routes
// ---------------------

// Define Routes
const authRouter = require('./routes/auth');

// Use Routes
app.use("/", authRouter);

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;