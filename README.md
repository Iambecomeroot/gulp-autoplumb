![npm downloads](https://img.shields.io/npm/dt/gulp-autoplumb.svg?style=flat-square)
![Git issues](https://img.shields.io/github/issues/marcel-robitaille/gulp-autoplumb.svg?style=flat-square)
![npm version](https://img.shields.io/npm/v/gulp-autoplumb.svg?style=flat-square)
![license](https://img.shields.io/npm/l/express.svg?style=flat-square)

# gulp-autoplumb
A hacky way of forcing gulp to use plumber by default. See [gulp-plumber](https://github.com/floatdrop/gulp-plumber). Use at your own risk.

## Installation
```
npm i gulp-autoplumb
```

## Usage
Use as if it were gulp:
```js
const gulp = require('gulp-autoplumb')

gulp.task('default', function(){
  gulp.src('./some/file')
    .pipe(someFunction())
    ...
})
```

## Changing the error handler
```js
const gulp = require('gulp-autoplumb')

gulp.handler = function(err){
  console.log(err.fileName)
  console.log(err.stack)
  this.emit('end')
}
```
If you want plumber to work properly, be sure to include `this.emit('end')`.

## How it works
This module will replace `gulp.src` with a proxy function. This function return's the original `gulp.src` and pipes plumber onto it.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
