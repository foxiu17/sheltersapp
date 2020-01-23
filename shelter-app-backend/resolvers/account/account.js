const Account = require("../../models/Account/Account");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  createAccount: async args => {
    return Account.findOne({ email: args.email })
      .then(account => {
        if (account) {
          throw new Error("Email exists already");
        }
        return bcrypt.hash(args.password, 12);
      })
      .then(hashedPassword => {
        let account = undefined;
        if (args.email === "marcin.foks6@wp.pl") {
          account = new Account({
            email: args.email,
            name: args.name,
            surname: args.surname,
            password: hashedPassword,
            type: 2
          });
          return account.save();
        } else {
          account = new Account({
            email: args.email,
            name: args.name,
            surname: args.surname,
            password: hashedPassword,
            type: 1
          });
          return account.save();
        }
      })
      .then(result => {
        return { ...result._doc, _id: result._id, password: null };
      })
      .catch(err => {
        throw err;
      });
  },
  editAccount: async ({ email, newPassword, oldPassword }) => {
    const account = await Account.findOne({ email: email });

    if (!account) return { done: false };

    const isPasswordCorrect = await bcrypt.compare(
      oldPassword,
      account.password
    );

    if (!isPasswordCorrect) return { done: false };

    return bcrypt.hash(newPassword, 12).then(async hashedPassword => {
      return await Account.findOneAndUpdate(
        { email },
        { password: hashedPassword }
      )
        .then(result => {
          return { done: true };
        })
        .catch(err => {
          return { done: false };
        });
    });
  },
  login: async ({ email, password }) => {
    const user = await Account.findOne({ email: email });

    if (!user) {
      throw new Error("User doesn't exist!");
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      throw new Error("Password is incorrect!");
    }

    const token = jwt.sign(
      { userID: user.id, email: user.email },
      "myprivatespecialkey",
      {
        expiresIn: "1h"
      }
    );

    return {
      userID: user.id,
      token: token,
      tokenExpiration: 1,
      type: user.type,
      name: user.name,
      surname: user.surname,
      email: user.email
    };
  }
};
