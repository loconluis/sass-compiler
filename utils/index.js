const fs = require('fs')
/**
 *   
 * @description Write a file on specific path
 * @param {String} fileName 
 * @param {any} fileData 
 * @param {String} path 
 */
const writeFile = (fileName, fileData, path) => {
  // write a file 
  if (fs.existsSync('dist')) {
    // write a file
    fs.writeFile(path, fileData, (err) => {
      if (!err) {
        return console.log('CSS is ready!')
      }
      // Error
      console.log('Errors', err)
    })
  } else {
    // create a directory
    fs.mkdirSync('dist')
    // create a file
    fs.writeFile(path, fileData, (err) => {
      if (!err) {
        return console.log('CSS is ready!')
      }
      // Error
      console.log('Errors', err)
    })

  }
}
// Export function
module.exports = { writeFile }