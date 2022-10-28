const fs = require('fs');

function OneFileConverter() {
  const file = fs.readFileSync('./data/OneFile.txt', 'utf8');

  // read in loop
  const lines = file.toString().replace(/\r\n/g,'\n').split("\n");

  fs.writeFile('./data/drivers.txt', '', function(){console.log('cleaned drivers')})
  fs.writeFile('./data/destinations.txt', '', function(){console.log('cleaned destinations')})

  for (let i = 0; i < lines.length; i++) {
    let items = lines[i].split(' ');
    fs.appendFileSync('./data/drivers.txt', items[1] + '\n');
    fs.appendFileSync('./data/destinations.txt', items[0] + '\n');
  }

}

OneFileConverter();