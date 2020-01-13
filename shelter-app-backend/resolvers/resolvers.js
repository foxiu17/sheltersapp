const shelterRes = require('./shelter/shelter');
const petRes = require('./pet/pet');
const accountRes = require('./account/account');

const rootResolvers = {
  ...shelterRes,
  ...petRes,
  ...accountRes
}

module.exports = rootResolvers;
