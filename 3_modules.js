// commonJs - every node file is a module (by default)
// Module   - Encapsulated code (only share minimum)

const names = require('./4_names')
const sayHi = require('./utils')
require('./7_mind_grenade')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter) 