const fs = require("fs");
const pathDb = "./src/resources/db/persons.json";
module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      fs.promises
        .readFile(pathDb)
        .then((data) => resolve(JSON.parse(data)))
        .catch((err) => reject(err));
    });
  },
};
