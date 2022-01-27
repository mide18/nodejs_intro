// npm - global command comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>
// npm i nodemon -D ....to install in Dev dependencies
// nodemon is a dev dependency pkg that restarts serve once there is change in source code

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)
// npm uninstall <package name>

// package.json - manifest file (stores important info about package/project)
// manual approach (create package.json in the root, create properties)
// npm init (step by step, press enter to skip)
// npm init -y (everything default )

// package.json, u can insclude start in  the scripts object {"start" : "npm app.js"}....
//this will be name of the app you working on.
// then run 'npm start' on terminal for app start and 'npm run dev' for the server starter e.g nodemon

const _ = require('lodash');

const items = [1, [2, [3, [4, [5, [6]]]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);


//to share code with git
// create .gitignore file...this ignore the files that will be ignored by git fro the source control

//pushing to git
// git init
// git add .
// git commit -m "first commit"

//copy and paste this from git newly created repo
//git remote add origin https://github.com/mide18/nodejs_intro.git
//git branch -M main
//git push -u origin main 

//to clone the project
// navigate to the folder and copy the project url from git
// git clone url

//on open the project with editor, if the dependencies are not install
// run npm install.....npm will check for the dependencies in the package json and install

//control + ` to open terminal