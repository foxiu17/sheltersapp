const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const petSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  sex: {
    type: String,
    required: false
  },
  shelter: {
    type: Schema.Types.ObjectId,
    ref: "Shelter"
  },
  accounts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Account"
    }
  ],
  images: {
    name: {
      type: String,
      required: false
    },
    publicId: {
      type: String,
      required: false
    }
  }
});

module.exports = mongoose.model("Pet", petSchema);
