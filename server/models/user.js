const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^[A-Z][a-z]*$/.test(v),
      message: (props) =>
        `${props.value} should start with a capital letter and contain only letters.`,
    },
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^[A-Z][a-z]*$/.test(v),
      message: (props) =>
        `${props.value} should start with a capital letter and contain only letters.`,
    },
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^\d{10}$/.test(v),
      message: (props) => `${props.value} must be a 10-digit number.`,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: (props) => `${props.value} is not a valid email address.`,
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (v) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(v),
      message: (props) =>
        `Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.`,
    },
  },
  category: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
