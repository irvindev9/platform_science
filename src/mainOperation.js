const FileReader = require('./helpers/fileReader');

async function mainOperation() {
  const destinations = new FileReader('./data/destinations.txt');
  await destinations.transformToArray();
  await destinations.transformToJSON();
  console.log('destinations', destinations.values);

  const drivers = new FileReader('./data/drivers.txt');
  await drivers.transformToArray();
  await drivers.transformToJSON();
  console.log('drivers', drivers.values);


}

// export default mainOperation;
module.exports = mainOperation;