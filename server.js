const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = process.env.PORT || 3000
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://RichworkoutDB:menosta316@ds121622.mlab.com:21622/heroku_407pfzsp", {
  useNewUrlParser: true,
  useFindAndModify: false
});
// routes
app.use(require("./routes/api"));
app.use(require("./routes/html"))
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});