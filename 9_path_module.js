const path = require('path')

// to check the seperator
console.log(path.sep);

//to show filepath
const filePath = path.join('/content', 'subfolder', 'text.txt')

console.log(filePath);

//to show only the base name

const baseName = path.basename(filePath)

console.log(baseName);

//to show absolute path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);