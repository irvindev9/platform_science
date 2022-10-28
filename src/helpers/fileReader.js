const fs = require('fs');

class FileReader {
  content = [];
  file = null;
  values = {};

  constructor(path) {
    this.file = fs.readFileSync(path, 'utf8');
  }

  transformToArray() {
    this.content = this.file.toString().replace(/\r\n/g,'\n').split("\n");
  }

  transformToJSON() {
    for (let i = 0; i < this.content.length; i++) {
      this.values[this.content[i]] = {
        name: this.content[i],
        type: this.content[i].length % 2 == 0 ? 'even' : 'odd',
        length: this.content[i].length
      }
    }
  }

  deleteKey(key) {
    delete this.values[key];
  }
}

module.exports = FileReader;