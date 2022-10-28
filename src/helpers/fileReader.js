const fs = require('fs');

class FileReader {
  content = [];
  file = null;

  constructor(path) {
    this.file = fs.readFileSync(path, 'utf8');
  }

  transformToArray() {
    this.content = this.file.toString().replace(/\r\n/g,'\n').split("\n");
  }
}

module.exports = FileReader;