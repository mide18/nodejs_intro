
// const _ = require('lodash');

// const items = [1, [2, [3, [4, [5, [6]]]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems);

// console.log("Hello people!");

const { readFile } = require('fs');

console.log('Started the first task');

readFile('./content/first.txt', 'utf8', (err, firstResult) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`The first text: ${firstResult}`);
    console.log("completed first nested task");
  }
  readFile('./content/second.txt', 'utf8', (secondErr, secondResult) => {
    if (secondErr) {
      console.log(secondErr);
    } else {
      console.log(secondResult);
      console.log('completed second nested Task ');
    }
  });
});

console.log('Starting next task');


//  // starting operating  system

//  console.log('First ');

//  setTimeout(() => {
//      console.log('second');
//  }, 0);

//  console.log('third');

//  //completed and exited operating system

const http = require('http')

const server = http.createServer((req, res) => {
    console.log('resqust event');
    res.end('Hello word')
})

server.listen(5000, ()=> {
    console.log('server listening on port: 5000....');
})