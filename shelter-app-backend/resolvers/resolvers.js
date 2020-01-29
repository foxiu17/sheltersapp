const shelterRes = require('./shelter/shelter');
const petRes = require('./pet/pet');
const accountRes = require('./account/account');
const emailRes = require('./email/email');

const rootResolvers = {
  ...shelterRes,
  ...petRes,
  ...accountRes,
  ...emailRes
}

module.exports = rootResolvers;
