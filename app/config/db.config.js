module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "1234",
    DB: "d8ce6e25172b2e3f9f3dc03ca381141c96b5f76ebf4ed2314365917a923beda3",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };