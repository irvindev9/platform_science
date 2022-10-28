const FileReader = require('./helpers/fileReader');

async function mainOperation() {
  const destinations = new FileReader('./data/destinations.txt');
  await destinations.transformToArray();
  console.log('destinations', destinations.content);

  const drivers = new FileReader('./data/drivers.txt');
  await drivers.transformToArray();
  console.log('drivers', drivers.content);
}

// export default mainOperation;
module.exports = mainOperation;