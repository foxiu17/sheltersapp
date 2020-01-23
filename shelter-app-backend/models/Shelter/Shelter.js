const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shelterSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  lat: {
    type: String,
    required: false
  },
  lng: {
    type: String,
    required: false
  },
  voivodeship: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  pets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pet"
    }
  ]
});

module.exports = mongoose.model("Shelter", shelterSchema);
