const gulp = require('gulp');
const del = require('del');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const imageMin = require('gulp-imagemin'); 

const server = () => {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
};

const clear = done => {
    del.sync('./public');
    done();
};

const html = () => {
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream());
};

const scss = () => {
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public'))
    .pipe(browserSync.stream());
};

const img = () => {
    return gulp.src('./src/images/**/*')
    .pipe(imageMin({
        verbose: true
    }))
    .pipe(gulp.dest('./public/images'))
    .pipe(browserSync.stream());
}

const watch = () => {
    gulp.watch('./src/*.html', html);
    gulp.watch('./src/sass/**/*.scss', scss);
    gulp.watch('./src/images/**/*', img);
};

exports.default = gulp.series(
    clear,
    gulp.parallel(html, scss, img),
    gulp.parallel(watch, server),
);
