const Shelter = require("../../models/Shelter/Shelter");
const Pet = require("../../models/Pet/Pet");

module.exports = {
  shelters: async ({ id, name, voivodeship, city, limit }) => {
    if (id) {
      const shelter = await Shelter.findOne({ _id: id }).populate("pets");

      if (!shelter) {
        throw new Error("Shelter doesn't exist!");
      } else {
        return [{ ...shelter._doc, _id: shelter._id }];
      }
    }
    if (name || city || voivodeship) {
      const shelters = await Shelter.find(name ? { name: name } : {})
        .find(city ? { city: city } : {})
        .find(voivodeship ? { voivodeship: voivodeship } : {})
        .populate("pets")
        .limit(limit);

      if (shelters.length === 0) {
        throw new Error("Shelters don't exists!");
      } else {
        return shelters.map(shelter => {
          return {
            ...shelter._doc,
            _id: shelter._id
          };
        });
      }
    }

    const shelters = await Shelter.find()
      .populate("pets")
      .limit(limit);
    if (shelters) {
      return shelters.map(shelter => {
        return { ...shelter._doc, _id: shelter._id };
      });
    } else {
      throw new Error("Empty");
    }
  },
  addShelter: async args => {
    const shelter = new Shelter({
      name: args.name,
      lat: args.lat,
      lng: args.lng,
      voivodeship: args.voivodeship,
      city: args.city,
      description: args.description
    });

    return shelter.save();
  },
  removeShelter: async ({ id }) => {
    if (id) {
      const findShelter = await Shelter.findById(id);
      const pets = findShelter.pets;
      const shelter = await Shelter.deleteOne({ _id: id });

      pets.forEach(async element => {
        await Pet.deleteOne({ _id: element });
      });

      if (shelter.deletedCount === 0) {
        return { done: false };
      } else {
        return { done: true };
      }
    }
  }
};
