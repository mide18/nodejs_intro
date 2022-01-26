const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

// method returns systems uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

// show the system details

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);