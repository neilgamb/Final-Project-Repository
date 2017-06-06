let gulp = require('gulp');
let browser = require('gulp-browser');
let sass = require('gulp-sass');

gulp.task('default', ['html', 'js', 'css', 'templates']);

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('public'));
})

gulp.task('js', function () {
    return gulp.src('js/app.js')
        .pipe(browser.browserify())
        .pipe(gulp.dest('public'));
})

gulp.task('css', function () {
    gulp.src('node_modules/font-awesome/**/*')
        .pipe(gulp.dest('public/font-awesome'))
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('public'));
})

gulp.task('templates', function () {
    return gulp.src('templates/*.html')
        .pipe(gulp.dest('public/templates'));
});

gulp.task('watch', function () {
    gulp.watch('*.html', ['html']);
    gulp.watch('templates/*.html', ['html']);
    gulp.watch('*.scss', ['css']);
    gulp.watch('js/*.js', ['js']);
    gulp.watch('js/*/*.js', ['js']);
});