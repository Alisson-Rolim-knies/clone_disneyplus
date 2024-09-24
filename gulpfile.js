// Importando gulp e sass
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss') // Fonte dos arquivos .scss
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // Compila o Sass e mostra erros
        .pipe(gulp.dest('./dist/css')); // Destino dos arquivos CSS
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
