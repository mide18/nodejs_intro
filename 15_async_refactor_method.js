const { readFile, writeFile } = require('fs').promises;
// const path = require('path/posix');
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile(
      './content/content-mind-grenade',
      `I HAVE IDEA OF THE TEXTS: ${first} and ${second} while the ${second} remains the same`, {flag: 'a'}
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
