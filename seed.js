const faker = require('faker');

function seed() {
  const landscapeObjects = [];

  for (let i = 1; i <= 10; i++) {
    const landscapeObject = {
      weeded: faker.datatype.boolean(),
      dogPeed: faker.datatype.boolean(),
      isGrassAlive: faker.datatype.boolean(),
      squareFootage: faker.datatype.float({ min: 100, max: 1000, precision: 2 })
    }
    landscapeObjects.push(landscapeObject);
  }
  return landscapeObjects;
}



module.exports = seed;