const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const root = './app/public'
const PORT = process.env.PORT || 3000

const server = () => {
  browserSync.init({
    server: root,
    port: PORT
  })
}

const watch = () => {
  gulp.watch(`${root}/*.html`).on('change', browserSync.reload)
  gulp.watch(`${root}/*.css`).on('change', browserSync.reload)
  gulp.watch(`${root}/*.js`).on('change', browserSync.reload)
}

gulp.task('browserSync', server)
gulp.task('watch', watch)
gulp.task('dev', gulp.series(gulp.parallel('browserSync', 'watch')))
