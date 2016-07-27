const gulp     = require('gulp')
const plumber  = require('gulp-plumber')

const chalk

try {
  chalk = require('chalk')
} catch (e) {
  chalk = {
    red: s => s
  }
}

const _gulpsrc = gulp.src

let handler = function(err){
  const message = err.message.replace(`${err.fileName}: `, '')

  console.log()
  console.log(chalk.red(`  Error in ${err.fileName}, line ${err.lineNumber}: ${message}`))
  console.log(err.stack.replace('Error\n', ''))
  console.log()

  this.emit('end')
}

gulp.src = function() {
    return _gulpsrc.apply(gulp, arguments)
      .pipe(plumber({ errorHandler: module.exports.handler }))
}

module.exports = gulp
module.exports.handler = handler
