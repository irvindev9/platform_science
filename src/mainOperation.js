const FileReader = require('./helpers/fileReader');
const getBestCombination = require('./helpers/getBestCombination');

async function mainOperation() {
  const destinations = new FileReader('./data/destinations.txt');
  await destinations.transformToArray();
  await destinations.transformToJSON();

  const drivers = new FileReader('./data/drivers.txt');
  await drivers.transformToArray();
  await drivers.transformToJSON();

  const bestCombinations = [];
  const endLoop = Object.keys(destinations.values).length;
  let totalSS = 0;
  for (let i = 0; i < endLoop; i++) {
    const bestCombination = getBestCombination(drivers.values, destinations.values);
    console.log('bestCombination', bestCombination);
    totalSS += bestCombination.SS;
    bestCombinations.push(bestCombination);
    drivers.deleteKey(bestCombination.driver);
    destinations.deleteKey(bestCombination.destination);
  }
  console.log('totalSS', totalSS);
}

module.exports = mainOperation;