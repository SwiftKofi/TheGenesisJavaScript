console.log('Test Run Default & Export')

// This is one way to do the import
import {default as sayMyName} from './defaultCalc.js'

// This is the other way of doing the import
// import sayMyName from './defaultCalc.js'

console.log(sayMyName())