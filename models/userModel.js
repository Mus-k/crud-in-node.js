const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is required"],
    trim: true,
    maxLength: [30, "Name must be less than chars.."],
  },

  email: {
    type: String,
    require: [true, "Email is required"],
    unique: true,
  },
});

module.exports = mongoose.model("User", userSchema);
