var gulp = require('gulp');
var ts = require('gulp-typescript');
var browserify = require('browserify')
var source = require('vinyl-source-stream');
var tsify = require('tsify');


/**Config de gulp cli 'gulp' */
//code originale avec seul GULP
/* gulp.task('default', function () {
    return gulp.src('src/main.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'main.js'
        }))
        .pipe(gulp.dest('dist'));
}); */

//--------------------config avec browserify, tsify et vinyl : ----------------------


//tache 1 transfert des html :
gulp.task('txt', function () {
    return gulp.src('src/*.txt')
        .pipe(gulp.dest('dist'))
})

//tache 2 :
gulp.task("bundle", function () { //il faut rajouter les autre tache dans un array en argument de task()
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'))

})

gulp.task('default', gulp.series('txt','bundle'))