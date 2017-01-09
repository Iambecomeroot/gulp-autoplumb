'use strict'

const gulp     = require('gulp')
const plumber  = require('gulp-plumber')

let chalk

try {
  chalk = require('chalk')
} catch (e) {
  chalk = {
    red: s => s,
    bold: s => s,
  }
}

const _gulpsrc = gulp.src

let handler = function(err){
  const message = err.message.replace(`${err.file}: `, '')

  console.log()
  console.log(chalk.red(`Error in ${chalk.bold(err.file)}, line ${chalk.bold(err.line)} from ${err.plugin}`))
  console.log(chalk.red(message))
  console.log(err.stack)
  console.log()

  this.emit('end')
}

gulp.src = function() {
    return _gulpsrc.apply(gulp, arguments)
      .pipe(plumber({ errorHandler: module.exports.handler }))
}

module.exports = gulp
module.exports.handler = handler
