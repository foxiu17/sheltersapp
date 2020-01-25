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
    phone: String
    address: String
    images: Image
    pets: [Pet!]
  }

  type Pet {
    _id: ID!
    type: String
    name: String
    age: Int
    sex: String
    description: String
    shelter: Shelter
    accounts: [Account!]
    images: Image
  }

  type Image {
    _id: ID
    name: String
    publicId: String
  }

  type Account {
    _id: ID!
    type: Int
    email: String
    name: String
    surname: String
    password: String
    favoritePets: [Pet!]
  }

  input AccountInput {
    email: String!
    name: String
    surname: String
    password: String!
  }

  input ImageInput {
    name: String!
    publicId: String!
  }

  type AuthData {
    userID: ID!
    token: String!
    tokenExpiration: Int!
    type: Int
    name: String
    surname: String
    email: String
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
    createAccount(email: String!, password: String!, name: String, surname: String): Account

    editAccount(email: String!, newPassword: String, oldPassword: String!): Response

    addShelter(name: String, lat: String, lng: String, voivodeship: String, city: String, description: String, phone: String, address: String, images: ImageInput): Shelter

    addPet(type: String, name: String, age: Int, description: String, sex: String, shelter: ID, images: ImageInput): Pet

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
