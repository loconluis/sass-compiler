// imports
const path = require('path')
const sass = require('node-sass')
const { writeFile } = require('./utils')
/**
 * @function compile SCSS or SASS to css output file
 * @param {String} pathSASSFile 
 * @param {String} fileCSSName 
 */
const compileSCSS = (pathSASSFile, fileCSSName) => {
  sass.render({
    file: pathSASSFile,
    outputStyle: 'compressed',
    outFile: './dist/' + fileCSSName,
    sourceMap: true,
  }, (err, result) => {
    if (err) console.log('err', err)
    let realPath = path.join(__dirname, 'dist', fileCSSName)
    writeFile(fileCSSName, result.css, realPath)
  })
}

compileSCSS('./styles/style.scss', 'generate.css')

