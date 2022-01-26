// read existing file system

const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// write a new file or overwrite if one exist

writeFileSync(
  './content/result_autowrite.txt',
  `Here is the result: ${first}, ${second}`
);
