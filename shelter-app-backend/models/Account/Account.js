const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountSchema = new Schema({
  type: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  favoritePets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pet"
    }
  ]
});

module.exports = mongoose.model("Account", accountSchema);
