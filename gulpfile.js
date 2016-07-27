var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var uglify = require('gulp-uglify');
var del = require('del');

var paths = {
  sass: ['./scss/**/*.scss'],
  move: ['./src/css/**/*.css', './src/img/**/*.*', './src/lib/**/*.*', './src/templates/**/*.html', './src/index.html'],
  js: ['./src/js/**/*.js']
};

gulp.task('default', ['sass', 'move', 'scripts']);
gulp.task('watch', watch);

gulp.task('clean', cleanAll);
gulp.task('move', ['clean'], move);
gulp.task('clean-script', cleanScript);
gulp.task('scripts', ['clean-script'], scripts);

gulp.task('sass', sass);

gulp.task('install', ['git-check'], install);
gulp.task('git-check', gitCheck);

function watch() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.move, ['move']);
  gulp.watch(paths.js, ['scripts']);
}

function cleanAll(cb) {
  return del(['./www/*'], cb);
}

function cleanScript(cb) {
  return del(['./www/js/*'], cb);
}

function move() {
  return gulp.src(paths.move, { base: './src' })
    .pipe(gulp.dest('./www'));
}

function scripts() {
  return gulp.src('./src/js/**/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./www/js'))
}

function sass(done) {
  return gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
}

function install() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
}

function gitCheck(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
}
