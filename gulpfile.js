var gulp = require('gulp')
var clean = require('gulp-clean')
var zip = require('gulp-zip')
var dateFormat = require('dateformat')
var sftp = require('gulp-sftp')
var runSequence = require('run-sequence')
var copy = require('gulp-copy')
var minimist = require('minimist')
var GulpSSH = require('gulp-ssh')
var now = new Date()
var knownOptions = {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'dev' }
}
var options = minimist(process.argv.slice(2), knownOptions)
var env = options.env
// 载入配置文件
var config = require(`./config.${env}.js`)
var sshConfig = config.ssh
var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: sshConfig
})

gulp.task('clean', function () {
  return gulp.src('BUILD_OUTPUT', {read: false})
    .pipe(clean())
})

gulp.task('copy', function () {
  return gulp.src('dist/**/*')
    .pipe(copy('BUILD_OUTPUT/homepage', {prefix: 1}))
})

gulp.task('zip', function () {
  return gulp.src('BUILD_OUTPUT/homepage/**/*', {
    base: 'BUILD_OUTPUT'
  })
    .pipe(zip(dateFormat(now, 'yyyymmddHHMM') + 'homepage.zip'))
    .pipe(gulp.dest('BUILD_OUTPUT'))
})

gulp.task('up', () => {
  console.log('1s后开始上传文件...')
  setTimeout(function () {
    return gulp
      .src('BUILD_OUTPUT/*homepage.zip')
      .pipe(gulpSSH.dest(config.remoteDir))
  }, 1000)
})

gulp.task('up-t', function () {
  return gulp.src('BUILD_OUTPUT/*homepage.zip', {
    base: 'BUILD_OUTPUT'
  })
    .pipe(sftp({
      host: '176.122.138.127',
      user: 'sftp',
      pass: 'Rain1994116',
      remotePath: '/html/',
      port: 28107,
      timeout: 100000
    }))
})

gulp.task('default', ['clean'], function () {
  runSequence('copy', 'zip', 'up-t')
})
