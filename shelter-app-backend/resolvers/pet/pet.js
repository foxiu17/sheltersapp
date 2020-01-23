const Pet = require("../../models/Pet/Pet");
const Shelter = require("../../models/Shelter/Shelter");
const Account = require("../../models/Account/Account");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

module.exports = {
  pets: async ({
    id,
    name,
    shelterId,
    voivodeship,
    city,
    limit,
    age,
    type
  }) => {
    if (id) {
      const pet = await Pet.findById(id).populate("shelter");
      if (!pet) {
        throw new Error("Pet doesn't exist!");
      } else {
        return [{ ...pet._doc, _id: pet._id }];
      }
    }

    if (name || shelterId || age || type || city || voivodeship) {
      const pets = await Pet.find(name ? { name: name } : {})
        .find(type ? { type: type } : {})
        .find(age ? { age: { $lt: age } } : {})
        .populate("shelter")
        .limit(limit);

      let shelterPets;
      if (shelterId) {
        shelterPets = pets.filter(pet => {
          return pet.shelter._id.toString() === shelterId.toString();
        });
      }

      if (city) {
        shelterPets = pets.filter(pet => {
          return pet.shelter.city.toString() === city.toString();
        });
      }

      if (voivodeship) {
        shelterPets = pets.filter(pet => {
          return pet.shelter.voivodeship.toString() === voivodeship.toString();
        });
      }

      if (shelterPets && shelterPets.length > 0) {
        return shelterPets.map(pet => {
          return { ...pet._doc, _id: pet._id };
        });
      } else if (shelterPets && shelterPets.length === 0) {
        throw new Error("Pets don't exists!");
      } else if (pets) {
        return pets.map(pet => {
          return { ...pet._doc, _id: pet._id };
        });
      } else {
        throw new Error("Empty");
      }
    }

    const pets = await Pet.find()
      .populate("shelter")
      .populate("accounts")
      .limit(limit);

    if (pets) {
      return pets.map(pet => {
        return { ...pet._doc, _id: pet._id };
      });
    } else {
      throw new Error("Empty");
    }
  },
  userPets: async ({ userID, name, voivodeship, city, limit, age, type }) => {
    const pets = await Pet.find()
      .populate("shelter")
      .populate("accounts")
      .limit(limit);

    if (pets) {
      const filteredPet = [];
      pets.forEach(pet => {
        pet.accounts.forEach(account => {
          if (account._id.toString() === userID.toString()) {
            filteredPet.push({ ...pet._doc });
          }
        });
      });
      if (filteredPet.length > 0) {
        return filteredPet.map(pet => {
          return { ...pet };
        });
      } else return [];
    } else throw new Error("Error, pets not found");
  },
  addFavoritePet: async ({ id, userID }) => {
    await Pet.findById(id, (err, doc) => {
      if (err) return err;
      if (doc) {
        doc.accounts.push(userID);
        doc.save();
      }
    });
    await Account.findById(userID, (err, doc) => {
      if (err) return err;
      if (doc) {
        doc.favoritePets.push(id);
        doc.save();
      }
    });

    return { done: true };
  },
  removeFavoritePet: async ({ id, userID }) => {
    await Pet.findById(id, (err, doc) => {
      if (err) return err;
      if (doc) {
        const newAccount = doc.accounts.filter(account => {
          return account.toString() !== userID.toString();
        });
        doc.accounts = newAccount;
        doc.save();
      }
    });
    await Account.findById(userID, (err, doc) => {
      if (err) return err;
      if (doc) {
        const newPets = doc.favoritePets.filter(pet => {
          return pet.toString() !== id.toString();
        });
        doc.favoritePets = newPets;
        doc.save();
      }
    });

    return { done: true };
  },
  addPet: async args => {
    const pet = new Pet({
      type: args.type,
      name: args.name,
      age: args.age,
      description: args.description,
      sex: args.sex,
      shelter: args.shelter,
      images: args.images
    });
    let pets;
    return pet
      .save()
      .then(result => {
        pets = { ...result._doc, _id: result._doc._id.toString() };
        return Shelter.findById({ _id: args.shelter });
      })
      .then(shelter => {
        if (!shelter) {
          throw new Error("Shelter doesn't exist!");
        }
        shelter.pets.push(pet);
        return shelter.save();
      })
      .then(result => {
        return pets;
      });
  },
  removePet: async ({ id }) => {
    if (id) {
      const pet = await Pet.deleteOne({ _id: id });

      if (pet.deletedCount === 0) {
        return { done: false };
      } else {
        return { done: true };
      }
    }
  }
};
