"use strict"

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const imagemin = require('gulp-imagemin');
const haml = require('gulp-haml');

gulp.task('sync', function () {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false,
        open: true
    });
});

gulp.task('sass', function () {
    return gulp.src('src/css/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

gulp.task('img', () =>
	gulp.src('src/img/*')
		.pipe(imagemin())
        .pipe(gulp.dest('images'))
);

gulp.task("haml", function () {
  return gulp
    .src("src/haml/*.haml")
    .pipe(haml())
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch("src/haml/*.haml", gulp.parallel("haml"));
    gulp.watch(['src/css/scss/**/*.scss'], gulp.parallel('sass'));
});


gulp.task('default',  gulp.parallel('watch', 'sync'));
