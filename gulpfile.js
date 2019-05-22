"use strict"

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync'),
      imagemin = require('gulp-imagemin');

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
    return gulp.src('css/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(''))
        .pipe(browserSync.stream());
});

gulp.task('img', () =>
	gulp.src('img/*')
		.pipe(imagemin())
        .pipe(gulp.dest('images'))
);


gulp.task('watch', function () {
    gulp.watch(['css/scss/**/*.scss'], gulp.parallel('sass'));
});


gulp.task('default',  gulp.parallel('watch', 'sync'));
