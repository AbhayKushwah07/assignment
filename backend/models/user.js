const mongoose = require("mongoose");
const { Schema } = mongoose;

const userschema = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("user", userschema);
