const { buildSchema } = require("graphql");

module.exports = buildSchema(`

  type Shelter {
    _id: ID!
    name: String
    lat: String
    lng: String
    voivodeship: String
    city: String
    description: String
    pets: [Pet!]
  }

  type Pet {
    _id: ID!
    type: String
    name: String
    age: Int
    description: String
    shelter: Shelter
    accounts: [Account!]
  }

  type Account {
    _id: ID!
    type: Int
    email: String
    name: String
    password: String
    favoritePets: [Pet!]
  }

  input AccountInput {
    email: String!
    name: String
    password: String!
  }

  type AuthData {
    userID: ID!
    token: String!
    tokenExpiration: Int!
    type: Int
  }

  type Response {
    done: Boolean
  }

  type RootQuery {
    shelters(id: ID, name: String, voivodeship: String, city: String, limit: Int): [Shelter!]
    pets(id: ID, name: String, type: String, shelterId: ID, limit: Int, age: Int, city: String, voivodeship: String): [Pet!]
    userPets(userID: ID, name: String, type: String, limit: Int, age: Int, city: String, voivodeship: String): [Pet!]
    login(email: String!, password: String!): AuthData!
  }

  type RootMutation {
    createAccount(email: String!, password: String!): Account
    addShelter(name: String, lat: String, lng: String, voivodeship: String, city: String, description: String): Shelter
    addPet(type: String, name: String, age: Int, description: String, shelter: ID): Pet
    addFavoritePet(id: ID, userID: ID): Response
    removeFavoritePet(id: ID, userID: ID): Response
    removeShelter(name: String, id: ID): Response
    removePet(id: ID): Response
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
